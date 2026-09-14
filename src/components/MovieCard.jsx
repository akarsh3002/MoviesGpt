const MovieCard = ({ movie }) => {
  return (
    movie?.poster_path && (
      <div className="group h-54 w-36 shrink-0 cursor-pointer overflow-hidden rounded transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-black/60 hover:ring-2 hover:ring-white/80 md:h-66 md:w-44">
        <img
          className="block h-full w-full object-cover transition duration-300 group-hover:brightness-110"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    )
  );
};

export default MovieCard;
