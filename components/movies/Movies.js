import { useState } from "react";
import { MoviesContext } from "../../store/movies-context";
import SearchNewMovies from "./SearchNewMovies";
import PaginatedMovies from "./PaginatedMovies";

export default function Movies({ initialMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [displayMovies, setDisplayMovies] = useState(initialMovies);

  const getSearchedMovies = async () => {
    if (!movieTitle || movieTitle.trim() === "") {
      setMovieTitle("");
      return;
    }
    setIsLoading(true);
    const res = await fetch(
      `https://imdb-api.com/en/API/SearchMovie/${process.env.NEXT_PUBLIC_IMDB_KEY}/${movieTitle}`
    );
    const data = await res.json();
    const totalNumberPages = Math.ceil(data.results.length / 8);
    const moviePages = {};
    const pageIndex = [];
    let i = 1;
    let j = 0;
    while (i <= totalNumberPages) {
      const page = [];
      data.results.forEach((movie, index) => {
        if (index >= j && index < j + 8) {
          page.push(movie);
        }
      });
      moviePages[i] = page;
      pageIndex.push(i);
      j += 8;
      i++;
    }
    setIsLoading(false);
    setMovieTitle("");
    setDisplayMovies({ totalNumberPages, moviePages, pageIndex });
  };

  return (
    <main className="flex flex-col px-5">
      <SearchNewMovies
        movieTitle={movieTitle}
        setMovieTitle={setMovieTitle}
        getSearchedMovies={getSearchedMovies}
      />
      <MoviesContext.Provider value={{ displayMovies }}>
        {isLoading ? (
          <div className="flex flex-col justify-center items-center min-h-full">
            ...Loading
          </div>
        ) : (
          <PaginatedMovies />
        )}
      </MoviesContext.Provider>
    </main>
  );
}
