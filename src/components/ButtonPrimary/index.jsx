import Button from "../Button";

import React from "react";

const ButtonPrimary = ({ children, handleClick, className }) => {
  return (
    <Button
      className={
        " bg-green shadow-primary-btn text-white border-2 border-green hover:bg-green-dark hover:border-green-dark active:shadow-none " +
        (className || "")
      }
      handleClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
