import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { youtubeURL } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const movieTrailer = useSelector((state) => state.movies?.trailerVideo);

  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!movieTrailer?.key) return;

    // Load YouTube IFrame API
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    // YouTube calls this function when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [movieTrailer?.key]);

  const handleMute = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  if (!movieTrailer?.key) return null;

  return (
    <div className="relative w-screen aspect-video overflow-hidden">
      <iframe
        id="youtube-player"
        className="w-full h-full scale-140"
        src={`${youtubeURL}${movieTrailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movieTrailer.key}&enablejsapi=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      />

      <button
        onClick={handleMute}
        className="absolute bottom-10 right-10 z-20 rounded-full bg-black/60 px-4 py-3 text-white hover:bg-black/80"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

export default VideoBackground;
