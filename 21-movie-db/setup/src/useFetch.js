import { useState, useEffetct } from "module";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const useFetch = () => {
  dispatch({type: "LOADING"});
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        dispatch({type: "SHOW_MOVIES", payload: data.Search});
      } else {
        dispatch({type: "SHOW_ERROR", payload: data.Error});
      }
      dispatch({type: "STOP_LOADING"});
    } catch (error) {
      console.log(error);
      console.log('hello error');
    }
};

export default useFetch;
