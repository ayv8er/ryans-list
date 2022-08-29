import { useState, useEffect } from "react";
import { data } from "../../data";

export default function RenderMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data.results);
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {movies.length > 0 &&
        movies &&
        movies.map((item) => {
          return (
            <div
              style={{ width: "300px", height: "300px" }}
              className="border m-3"
              key={item.id}
            >
              {item.title}
            </div>
          );
        })}
    </div>
  );
}
