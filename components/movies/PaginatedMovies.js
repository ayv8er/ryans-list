import { useState } from "react";
import { useMoviesContext } from "../../store/movies-context";
import PageNavigator from "./PageNavigator";
import SingleNewMovie from "./SingleNewMovie";

export default function PaginatedMovies() {
  const [pageNumber, setPageNumber] = useState(1);
  const { totalNumberPages, moviePages, pageIndex } =
    useMoviesContext().displayMovies;

  return (
    <div className="flex flex-col justify-center items-center min-h-full">
      <PageNavigator
        pageIndex={pageIndex}
        totalNumberPages={totalNumberPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <div className="flex flex-wrap w-full justify-around">
        {moviePages[pageNumber].map((movie) => {
          return <SingleNewMovie movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}
