import { Link, useRouteError } from "react-router-dom";
import homeBGImage from "../assets/homeBg.png";
import logoMoviesGPT from "../assets/logoMoviesGPT.png";

const Error = () => {
  const error = useRouteError();
  const status = error?.status || 404;
  const message =
    status === 404
      ? "The page you are looking for is not available."
      : "Something went wrong. Please try again.";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 text-white">
      <img
        src={homeBGImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <img
        src={logoMoviesGPT}
        alt="MoviesGPT"
        className="absolute left-4 top-3 z-10 w-36 sm:left-8 sm:w-44"
      />

      <section className="relative z-10 w-full max-w-md rounded-lg bg-black/90 p-8 text-center shadow-2xl sm:p-10">
        <p className="text-7xl font-bold text-[#e60304]">{status}</p>
        <h1 className="mt-4 text-2xl font-bold">Lost in the movie library?</h1>
        <p className="mt-3 text-sm text-gray-300">{message}</p>
        <Link
          to="/"
          className="mt-7 inline-block rounded bg-[#e60304] px-6 py-3 font-semibold transition hover:bg-red-700"
        >
          Back to Sign In
        </Link>
      </section>
    </main>
  );
};

export default Error;
