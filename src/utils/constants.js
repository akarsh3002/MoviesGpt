const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
    accept: "application/json",
  },
};

export const youtubeURL = "https://www.youtube.com/embed/";
