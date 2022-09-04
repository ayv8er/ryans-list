import useSWR from "swr";
import Pagination from "../Pagination";

const top250MoviesEndpoint = `https://imdb-api.com/en/API/MostPopularMovies/${process.env.NEXT_PUBLIC_IMDB_KEY}`;
const getMovies = async () => {
  const response = await fetch(top250MoviesEndpoint);
  const data = await response.json();
  return data;
};

export default function RenderMovies() {
  const { data, error } = useSWR(top250MoviesEndpoint, getMovies);

  if (error)
    return (
      <div className="flex flex-wrap justify-evenly min-h-screen">
        Could not load, please refresh or search.
      </div>
    );

  if (!data)
    return (
      <div className="flex flex-wrap justify-evenly min-h-screen">
        Loading...
      </div>
    );

  const totalNumberPages = Math.ceil(data.items.length / 8);
  const moviePages = {};
  const pageIndex = [];
  let i = 1;
  let j = 0;
  while (i <= totalNumberPages) {
    const page = [];
    data.items.forEach((movie, index) => {
      if (index >= j && index < j + 8) {
        page.push(movie);
      }
    });
    moviePages[i] = page;
    pageIndex.push(i);
    j += 8;
    i++;
  }

  return (
    <Pagination
      totalNumberPages={totalNumberPages}
      moviePages={moviePages}
      pageIndex={pageIndex}
    />
  );
}
