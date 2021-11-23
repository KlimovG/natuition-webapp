import "./style.css";
import React from "react";

const Button = ({ children, className, handleClick }) => {
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={
        "py-4 px-6 rounded text-base Montserrat-Regular hover:shadow-none transition duration-300 " +
        (className || "")
      }
    >
      {children}
    </button>
  );
};

export default Button;
