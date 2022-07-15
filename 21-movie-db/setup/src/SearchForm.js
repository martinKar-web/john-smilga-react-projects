import React, {useRef} from "react";
import {useGlobalContext} from "./context";

const SearchForm = () => {
  const {query, handleQuery, error} = useGlobalContext();

  return (
    <form
      className="search-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleQuery(e.target.value)}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
