import MovieCard from "./MovieCard";

const MovieList = ({ title, list }) => {
  if (!list?.length) return null;

  return (
    <section className="px-6 py-2">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="flex gap-4 overflow-x-auto py-4 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {list.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
