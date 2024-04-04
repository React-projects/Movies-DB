import axios from "axios";
import { AllMOVIES, movieApi } from "../types/movieTypes";

export const allDataMovies = () => {
  return async (dispatch) => {
    const res = await axios.get(movieApi);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
export const getSearchMovies = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
     
      `https://api.themoviedb.org/3/search/movie?api_key=a5b028967ab8251416e6ad7347bbe6cf&query=${word}&language=ar`
    );
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
export const getPagesMovies = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a5b028967ab8251416e6ad7347bbe6cf&language=ar&page=${page}`
    );
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
