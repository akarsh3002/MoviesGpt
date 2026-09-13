const MovieList = ({ title, list }) => {
  if (!list?.length) return null;

  return (
    <section className="px-6 py-2">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="flex gap-4 overflow-x-auto py-4 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {list.map((movie) => (
          <div
            key={movie.id}
            className="group shrink-0 cursor-pointer overflow-hidden rounded transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-black/60 hover:ring-2 hover:ring-white/80"
          >
            <img
              className="block w-36 object-cover transition duration-300 group-hover:brightness-110 md:w-44"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieList;
