const TMDB_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTUyOGY0NmUyMDdhODg0ZWE0OWIwNDIwOWM2Yjc1OSIsIm5iZiI6MTc4ODUwNDYyNy4zMTMsInN1YiI6IjZhOWE2YTMzNjZiMTBkODcyZjg5ODhjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P9eQKIsQCQVPscQ_JtAYhG9sIfvLOdh7TcjgljNEWyA";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
    accept: "application/json",
  },
};

export const youtubeURL = "https://www.youtube.com/embed/";
