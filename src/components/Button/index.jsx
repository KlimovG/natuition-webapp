import "./style.css";
import React from "react";

const Button = ({ children, className, handleClick, num }) => {
  return (
    <button
      onClick={(e) => {
        if (handleClick) return handleClick(e);
      }}
      className={
        "py-4 px-6 rounded text-base Montserrat-Regular transition duration-300 " +
        (className || "")
      }
      data-num={num || null}
    >
      {children}
    </button>
  );
};

export default Button;
