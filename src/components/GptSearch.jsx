import React from "react";
import GptSearchBar from "./GptSearch/GptSearchBar";
import GptMoviesSuggestions from "./GptSearch/GptMoviesSuggestions";

const GptSearch = () => {
  return (
    <div>
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearch;
