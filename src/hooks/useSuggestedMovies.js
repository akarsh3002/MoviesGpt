import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSearchedMovies } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";

export const useSuggestedMovies = (queries = []) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!queries.length) return;

    const searchMovies = async () => {
      const responses = await Promise.all(
        queries.map((query) =>
          fetch(
            `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
              query,
            )}&include_adult=false&language=en-US&page=1`,
            API_OPTIONS,
          ).then((response) => response.json()),
        ),
      );

      const movies = responses.flatMap((data) => data.results);
      dispatch(addSearchedMovies(movies));
    };

    searchMovies();
  }, [queries, dispatch]);
};
