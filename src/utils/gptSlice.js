import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    suggestedMovies: [],
    searchedMovies: [],
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    getSuggestedMovies: (state, action) => {
      state.suggestedMovies = action.payload;
    },
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});

export const { toggleGptSearchView, getSuggestedMovies, addSearchedMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
