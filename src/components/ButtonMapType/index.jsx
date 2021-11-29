import React from "react";
import "./style.css";
const ButtonMapType = ({ children, className, value, type, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`button__map-type w-10 h-10 bg-white text-black rounded-full flex justify-center items-center transition-colors duration-300 ${
        className || ""
      }${value === type ? "active" : " "}`}
      name={value}
    >
      {children}
    </button>
  );
};

export default ButtonMapType;
