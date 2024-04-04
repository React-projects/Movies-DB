import { AllMOVIES } from "../types/movieTypes";

const intalValue = { movies: [], pageCount: 0 };
export const moviesReducer = (state = intalValue, action) => {
  switch (action.type) {
    case AllMOVIES:
      return { movies: action.data , pageCount: action.pages};
    default:
      return state;
  }
};
