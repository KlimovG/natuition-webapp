import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="app h-full max-w-lg mx-auto flex items-center justify-center rounded-2xl">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
