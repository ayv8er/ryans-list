import { useState } from "react";
import SingleNewMovie from "../components/newmovies/SingleNewMovie";

export default function Pagination({
  totalNumberPages,
  moviePages,
  pageIndex,
}) {
  const [pageNumber, setPageNumber] = useState(1);

  const prevClickHandler = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber(pageNumber - 1);
  };

  const nextClickHandler = () => {
    if (pageNumber === totalNumberPages) {
      return;
    }
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-full">
      <ul className="flex justify-around w-full sm:w-3/4 my-1 border-t py-2">
        <li
          className={
            pageNumber === 1
              ? "hidden sm:inline-block"
              : "hidden sm:inline-block cursor-pointer"
          }
          onClick={prevClickHandler}
        >
          Prev
        </li>
        {pageIndex.map((page, index) => {
          return (
            <li
              className={
                page === pageNumber
                  ? "text-indigo-600 cursor-pointer"
                  : "cursor-pointer"
              }
              onClick={() => setPageNumber(page)}
              key={index}
            >
              {page}
            </li>
          );
        })}
        <li
          className={
            pageNumber === totalNumberPages
              ? "hidden sm:inline-block"
              : "hidden sm:inline-block cursor-pointer"
          }
          onClick={nextClickHandler}
        >
          Next
        </li>
      </ul>
      <div className="flex flex-wrap w-full justify-around">
        {moviePages[pageNumber].map((movie) => {
          return <SingleNewMovie movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}
