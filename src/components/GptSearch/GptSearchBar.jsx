import { useRef, useState } from "react";
import { geminiClient } from "../../utils/genai";
import { useDispatch } from "react-redux";
import { getSuggestedMovies } from "../../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const [disableSearch, setDisableSearch] = useState(false);
  const dispatch = useDispatch();

  const handleGPTsearchClick = async () => {
    setDisableSearch(true);

    const query =
      "Act as a movie recommendation system, always return in text format that simply can be rendered on screen,the query is: " +
      searchText.current.value.trim() +
      "Only give 5 movies in form of an array so simply just give an array in response";
    if (!query) return;

    try {
      const interaction = await geminiClient.interactions.create({
        model: "gemini-3.5-flash",
        input: query,
      });

      const output = interaction?.output_text;
      const movies = JSON.parse(output);
      dispatch(getSuggestedMovies(movies));
      setDisableSearch(false);
    } catch (error) {
      setDisableSearch(false);
      console.error("Gemini search failed:", error);
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-6 bg-black px-8 pb-6 pt-24"
      onSubmit={(event) => {
        event.preventDefault();
        handleGPTsearchClick();
      }}
    >
      <input
        ref={searchText}
        type="text"
        className="w-full rounded bg-gray-900 p-3 text-gray-200 placeholder:text-gray-400"
        placeholder="What would you like to watch today?"
      />
      <button
        type="submit"
        disabled={disableSearch}
        className="flex items-center justify-center gap-2 rounded border border-[#e60304] px-4 py-2 font-semibold text-[#e60304]
    hover:bg-[#e60304] hover:text-white
    disabled:cursor-not-allowed
    disabled:border-gray-600
    disabled:bg-gray-700
    disabled:text-gray-400
    disabled:opacity-60"
      >
        {disableSearch && (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-gray-400 border-t-transparent"
            aria-hidden="true"
          />
        )}
        {disableSearch ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default GptSearchBar;
