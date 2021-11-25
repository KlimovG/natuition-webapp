import Button from "../Button";

import React from "react";

const ButtonPrimary = ({ children, handleClick, className }) => {
  return (
    <Button
      className={
        " bg-green shadow-primary-btn text-white border-2 border-green active:bg-green-dark active:border-2 active:border-green-dark " +
        (className || "")
      }
      handleClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
