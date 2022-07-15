const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return {...state, isloading: true};
  }
  if (action.type === "SHOW_MOVIES") {
    return {
      ...state,
      movies: action.payload,
      error: {show: false, msg: ""},
      isLoading: false,
    };
  }
  if (action.type === "SHOW_ERROR") {
    return {...state, error: {show: true, msg: action.payload}};
  }
  if (action.type === "STOP_LOADING") {
    return {...state, isloading: false};
  }
  if (action.type === "HANDLE_QUERY") {
    return {...state, query: action.payload};
  }
};

export default reducer;
