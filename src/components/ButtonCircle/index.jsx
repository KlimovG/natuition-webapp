import React from "react";
import "./style.css";

const ButtonCircle = ({ children, className, name, activeType, onClick }) => {
  return (
    <button
      className={
        "sessions__btn-filter h-12 w-12 rounded-full text-center Montserrat-SemiBold" +
        className +
        (name === activeType ? " active" : "")
      }
      activeType={activeType}
      name={name}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
};
export default ButtonCircle;
