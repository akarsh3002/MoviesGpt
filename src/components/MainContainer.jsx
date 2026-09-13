import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);

  if (!movies) return null;

  const randomIndex = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[randomIndex];

  return (
    <div className="relative">
      <VideoBackground movieId={mainMovie?.id} />

      <VideoTitle
        title={mainMovie?.original_title}
        description={mainMovie?.overview}
      />
    </div>
  );
};

export default MainContainer;
