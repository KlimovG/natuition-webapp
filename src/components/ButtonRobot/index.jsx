import React from "react";
import Button from "../Button";

const ButtonRobot = ({ children, className }) => {
  return (
    <Button
      className={
        " bg-white border-2 border-green hover:bg-green w-full hover:text-white " +
        (className || "")
      }
    >
      {children}
    </Button>
  );
};

export default ButtonRobot;
