import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { data } from "../../data";
import SingleNewMovie from "./SingleNewMovie";

export default function RenderMovies() {
  const [movies, setMovies] = useState([]); // this needs to be context
  const router = useRouter();

  useEffect(() => {
    // set the top 250 here by default
    setMovies(data.results);
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {movies.length > 0 &&
        movies &&
        movies.map((movie) => {
          return <SingleNewMovie movie={movie} key={movie.id} />;
        })}
    </div>
  );
}
