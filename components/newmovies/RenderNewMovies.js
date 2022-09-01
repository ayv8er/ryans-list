import useSWR from "swr";
import SingleNewMovie from "./SingleNewMovie";

const top250MoviesEndpoint = `https://imdb-api.com/en/API/Top250Movies/${process.env.NEXT_PUBLIC_IMDB_KEY}`;
const getMovies = async () => {
  const response = await fetch(top250MoviesEndpoint);
  const data = await response.json();
  return data;
};

export default function RenderMovies() {
  const { data, error } = useSWR(top250MoviesEndpoint, getMovies);

  if (error)
    return (
      <div className="flex flex-wrap justify-evenly">
        Could not load, please refresh or search.
      </div>
    );

  if (!data)
    return <div className="flex flex-wrap justify-evenly">Loading...</div>;

  return (
    <div className="flex flex-wrap justify-evenly">
      {data &&
        data.items.length > 0 &&
        data.items.map((movie) => {
          return <SingleNewMovie movie={movie} key={movie.id} />;
        })}
    </div>
  );
}
