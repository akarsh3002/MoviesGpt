import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const movieCategories = [
  {
    endpoint: "popular",
    action: addPopularMovies,
  },
  {
    endpoint: "top_rated",
    action: addTopRatedMovies,
  },
  {
    endpoint: "upcoming",
    action: addUpcomingMovies,
  },
];

export const useMovieCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovies = async ({ endpoint, action }) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
        API_OPTIONS,
      );
      const data = await response.json();
      dispatch(action(data.results));
    };

    movieCategories.forEach(getMovies);
  }, [dispatch]);
};
