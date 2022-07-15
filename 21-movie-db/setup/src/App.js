import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies/:id" children={<Movie />} />
      <Route path="/error">
        <h2>There was an error</h2>
      </Route>
    </Switch>
  );
}

export default App;
