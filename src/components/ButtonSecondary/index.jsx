import "./style.css";
import React from "react";
import Button from "../Button";

const ButtonSecondary = ({ children, handleClick }) => {
  return (
    <Button
      className="
            text-green-dark
            shadow-secondary-btn
            text-green-dark
            border-green-dark
            border-2
            hover:bg-green-dark
            hover:text-white
            active:bg-green-dark
            active:text-white
            active:shadow-none"
      handleClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ButtonSecondary;
