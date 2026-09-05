import { useState } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { youtubeURL } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const movieTrailer = useSelector((state) => state.movies?.trailerVideo);

  const [isMuted, setIsMuted] = useState(true);

  if (!movieTrailer?.key) return null;

  return (
    <div className="relative w-screen aspect-video overflow-hidden">
      <ReactPlayer
        src={`${youtubeURL}${movieTrailer.key}`}
        playing={true}
        muted={isMuted}
        controls={false}
        loop={true}
        width="100%"
        height="100%"
        className="scale-140 pointer-events-none"
      />

      <button
        onClick={() => setIsMuted((prev) => !prev)}
        className="absolute bottom-10 right-10 z-20 rounded-full bg-black/60 px-4 py-3 text-white hover:bg-black/80"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

export default VideoBackground;
