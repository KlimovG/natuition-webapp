import Button from "../Button";

import React from "react";

const ButtonPrimary = ({ children, handleClick }) => {
  return (
    <Button
      styles="bg-green
            shadow-primary-btn
            text-white
            border-2 border-green
            hover:bg-green-dark
            hover:border-2
            hover:border-green-dark"
      handleClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
