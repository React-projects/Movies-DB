import axios from "axios";
import { ALLMOVIES, movieApi } from "../types/movieTypes";

export const allDataMovies = () => {
  return async (dispatch) => {
    const res =  await axios.get(movieApi);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
