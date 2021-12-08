import React from "react";
import Button from "../Button";

const ButtonSession = ({ children, className, active, num, handleClick }) => {
  return (
    <Button
      className={
        "w-11/12 flex justify-between items-center border-2 border-green-dark w-full w-full Montserrat-SemiBold rounded-lg " +
        (className || "") +
        (active === num
          ? "text-white bg-green-dark"
          : "text-green-dark bg-white hover:bg-green-dark  hover:text-white active:bg-green-dark active:text-white ")
      }
      num={num}
      handleClick={handleClick}
    >
      {children}
      <svg
        className={"w-6 h-6 fill-current ml-4"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.59 9H15V4C15 3.45 14.55 3 14 3H10C9.45 3 9 3.45 9 4V9H7.41C6.52 9 6.07 10.08 6.7 10.71L11.29 15.3C11.68 15.69 12.31 15.69 12.7 15.3L17.29 10.71C17.92 10.08 17.48 9 16.59 9ZM5 19C5 19.55 5.45 20 6 20H18C18.55 20 19 19.55 19 19C19 18.45 18.55 18 18 18H6C5.45 18 5 18.45 5 19Z" />
      </svg>
    </Button>
  );
};

export default ButtonSession;