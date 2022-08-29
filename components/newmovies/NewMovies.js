import SearchMovie from "./SearchMovies";
import RenderMovies from "./RenderMovies";

export default function NewMovies() {
  return (
    <main className="flex flex-col px-5">
      <SearchMovie />
      <RenderMovies />
    </main>
  );
}
