import { useState } from "react";
import SelectedMovieModal from "./SelectedMovieModal";

export default function SingleNewMovie({ movie }) {
  const [isSelectMovie, setIsSelectMovie] = useState(false);

  if (isSelectMovie) {
    return (
      <SelectedMovieModal movie={movie} setIsSelectMovie={setIsSelectMovie} />
    );
  }

  return (
    <div
      style={{ width: "200px", height: "280" }}
      className="m-3 cursor-pointer hover:border"
      onClick={() => setIsSelectMovie(true)}
      key={movie.id}
    >
      <picture>
        <img
          style={{ width: "200px", height: "280" }}
          src={movie.image}
          alt={`${movie.title}`}
        />
      </picture>
    </div>
  );
}
