import React from "react";

const ButtonCheckboxCircle = ({ children, className, name, id, checked }) => {
  return (
    <div className={"relative"}>
      {checked ? (
        <input
          defaultChecked
          type="radio"
          name={name}
          className={`hidden`}
          value={children}
          id={"filterRadio" + id}
        />
      ) : (
        <input
          type="radio"
          name={name}
          className={`hidden`}
          value={children}
          id={"filterRadio" + id}
        />
      )}
      <label
        htmlFor={"filterRadio" + id}
        className={
          "flex justify-center items-center w-12 h-12 bg-white rounded-full text-center Montserrat-Bold text-xl transition-colors duration-300 cursor-pointer cursor-pointer" +
          className
        }
      >
        {children}
      </label>
    </div>
  );
};
export default ButtonCheckboxCircle;
