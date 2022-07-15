import React, {
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "./reducer";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const initialState = {
  isLoading: true,
  error: {show: false, msg: ""},
  movies: [],
  query: "avengers",
};

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = async (url) => {
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
    }
  };
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${state.query}`);
  }, [state.query]);

  const handleQuery = (value) => {
    dispatch({type: "HANDLE_QUERY", payload: value});
  };

  return (
    <AppContext.Provider value={{...state, handleQuery}}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
