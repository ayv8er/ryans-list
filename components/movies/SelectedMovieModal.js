import { useFavoritesContext } from "../../store/favorites-context";

export default function SelectedMovieModal({ movie, setIsSelectMovie }) {
  const { favorites, setFavorites } = useFavoritesContext();

  const addFavoritesHandler = () => {
    setFavorites((prevState) => [...prevState, movie]);
  };

  const removeFavoritesHandler = () => {
    const newFavorites = favorites.filter((movies) => {
      return movies.id !== movie.id;
    });
    setFavorites(newFavorites);
  };

  return (
    <div
      style={{ width: "200px", height: "296px" }}
      className="flex flex-col justify-around items-center m-3 py-6 px-3 bg-gray-800 border"
      onClick={() => setIsSelectMovie(false)}
    >
      <div className="text-xl">{movie.title}</div>
      <div>{movie.description}</div>
      {favorites.find((movies) => movies.id === movie.id) ? (
        <button
          className="items-center px-5 rounded-none sm:text-md rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-300 hover:text-gray-700"
          onClick={removeFavoritesHandler}
        >
          Remove from Favs
        </button>
      ) : (
        <button
          className="items-center px-5 rounded-none sm:text-md rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-300 hover:text-gray-700"
          onClick={addFavoritesHandler}
        >
          Add to Favs
        </button>
      )}
    </div>
  );
}
