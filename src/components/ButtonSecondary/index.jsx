import "./style.css";
import React from "react";
import Button from "../Button";

const ButtonSecondary = ({ children }) => {
  return (
    <Button
      styles="
            text-green-dark
            shadow-secondary-btn
            text-green-dark
            border-green-dark
            border-2
            hover:bg-green-dark
            hover:text-white
            hover:shadow-none"
    >
      {children}
    </Button>
  );
};

export default ButtonSecondary;
