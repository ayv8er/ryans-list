import { useState } from "react";

export default function SearchNewMovies() {
  const [movieTitle, setMovieTitle] = useState("");

  return (
    <form className="w-full flex justify-center">
      <div className="flex sm:w-3/4 w-full py-2">
        <input
          className="flex-1 rounded-none rounded-l-md sm:text-xl px-2"
          placeholder="Enter Movie Title"
          value={movieTitle}
          type="text"
          onChange={(event) => {
            setMovieTitle(event.target.value);
          }}
        />
        <span className="inline-flex items-center px-5 rounded-none sm:text-xl rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-300 hover:text-gray-700 cursor-pointer">
          Search
        </span>
      </div>
    </form>
  );
}
