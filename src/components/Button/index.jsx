import "./style.css";
import React from "react";

const Button = ({ children, className, handleClick }) => {
  return (
    <button
      onClick={(e) => {
        if (handleClick) return handleClick(e);
      }}
      className={
        "py-4 px-6 rounded text-base Montserrat-Regular active:shadow-none active:bg-white transition duration-300 " +
        (className || "")
      }
    >
      {children}
    </button>
  );
};

export default Button;
