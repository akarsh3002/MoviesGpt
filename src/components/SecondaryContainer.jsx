import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies,
  );
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-20 relative z-20">
        <MovieList title="Now Playing" list={nowPlayingMovies} />
        <MovieList title="New Releases" list={upcomingMovies} />
        <MovieList title="Trending" list={popularMovies} />
        <MovieList title="Top-Rated" list={topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
