import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/LogIn";
import Registration from "./pages/Registration";
const App = () => {
  return (
    <div className="app h-full max-w-lg mx-auto flex items-center justify-center rounded-2xl">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
