import { useState } from "react";
import { useFavoritesContext } from "../../store/favorites-context";
import PageNavigator from "./PageNavigator";
import SingleNewMovie from "./SingleNewMovie";

export default function Favorites() {
  const [pageNumber, setPageNumber] = useState(1);
  const { totalNumberPages, moviePages, pageIndex } = useFavoritesContext();

  return (
    <main className="flex flex-col px-5">
      <div className="flex flex-col justify-center items-center min-h-full">
        <PageNavigator
          pageIndex={pageIndex}
          totalNumberPages={totalNumberPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
        {pageIndex.length === 0 ? null : (
          <div className="flex flex-wrap w-full justify-around">
            {moviePages[pageNumber].map((movie) => {
              return <SingleNewMovie movie={movie} key={movie.id} />;
            })}
          </div>
        )}
      </div>
    </main>
  );
}
