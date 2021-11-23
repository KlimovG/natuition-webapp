import './App.css';
import React from "react"
import ButtonPrimary from "./components/ButtonPrimary";
import ButtonSecondary from "./components/ButtonSecondary";
import Logo from './components/Logo'
const App = () => {
  return (
    <div className="app">
        <Logo/>
        <ButtonPrimary>Sign in</ButtonPrimary>
        <ButtonSecondary>Sign up</ButtonSecondary>
    </div>
  );
}

export default App;
