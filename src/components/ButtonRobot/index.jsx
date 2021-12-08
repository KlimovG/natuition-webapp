import React from "react";
import Button from "../Button";

const ButtonRobot = ({ children, className, num, handleClick, active }) => {
  return (
    <Button
      className={
        "  border-2 border-green w-full Montserrat-SemiBold rounded-lg " +
        (className || "") +
        (active === num
          ? "bg-green text-white"
          : "bg-white hover:bg-green hover:text-white")
      }
      num={num}
      handleClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ButtonRobot;
