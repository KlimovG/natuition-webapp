import "./style.css";
import React from "react";
import image from "./logo.svg";
const Logo = ({ children }) => {
  return <img className={"w-full"} src={image} alt="Logo of Natuition" />;
};

export default Logo;
