export default function SelectedMovieModal({ movie, setIsSelectMovie }) {
  return (
    <div
      style={{ width: "300px", height: "400px" }}
      className="flex flex-col justify-around items-center m-3 py-6 px-3 bg-gray-800 border"
      onClick={() => setIsSelectMovie(false)}
    >
      <div className="text-xl">{movie.title}</div>
      <div>{movie.description}</div>
      <button
        className="inline-flex items-center px-5 rounded-none sm:text-xl rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-300 hover:text-gray-700"
        onClick={() => setIsSelectMovie(false)}
      >
        Add to Favorites
      </button>
    </div>
  );
}
// render button with "Add to Favorites" or "Remove from Favorites"