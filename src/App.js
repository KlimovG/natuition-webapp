import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/LogIn";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
const App = () => {
  return (
    <div className="app h-full w-full mx-auto flex rounded-2xl">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home/login">
          <Login />
        </Route>
        <Route exact path="/home/registration">
          <Registration />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
