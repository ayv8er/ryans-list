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
    <div className="flex flex-col justify-between items-center border h-4/6">
      <div className="flex flex-wrap justify-evenly border">
        {moviePages[pageNumber].map((movie) => {
          return <SingleNewMovie movie={movie} key={movie.id} />;
        })}
      </div>
      <ul className="flex justify-around w-1/2 my-1">
        <li
          className={pageNumber === 1 ? null : "cursor-pointer"}
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
          className={pageNumber === totalNumberPages ? null : "cursor-pointer"}
          onClick={nextClickHandler}
        >
          Next
        </li>
      </ul>
    </div>
  );
}
