import SearchNewMovies from "./SearchNewMovies";
import RenderNewMovies from "./RenderNewMovies";

export default function NewMovies() {
  return (
    <main className="flex flex-col px-5">
      <SearchNewMovies />
      <RenderNewMovies />
    </main>
  );
}
