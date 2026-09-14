import { useSelector } from "react-redux";
import { useSuggestedMovies } from "../../hooks/useSuggestedMovies";
import MovieCard from "../MovieCard";

const GptMoviesSuggestions = () => {
  const movieSuggestionsList = useSelector(
    (store) => store.gpt.suggestedMovies,
  );

  useSuggestedMovies(movieSuggestionsList);

  const moviesData = useSelector((store) => store.gpt.searchedMovies);

  return (
    <div className="grid grid-cols-2 h-screen justify-items-start gap-6 bg-black px-8 pt-8 pb-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      {moviesData?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default GptMoviesSuggestions;
