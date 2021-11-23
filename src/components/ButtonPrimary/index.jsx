import Button from "../Button";
import "./style.css";

import React from "react";

const ButtonPrimary = ({ children }) => {
  return (
    <Button
      styles="bg-green
            shadow-primary-btn
            text-white
            border-2 border-green
            hover:bg-green-dark
            hover:border-2
            hover:border-green-dark"
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
