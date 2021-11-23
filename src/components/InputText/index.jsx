import React from "react";

const InputText = ({ name, children, className }) => {
  return (
    <input
      type="text"
      placeholder={children}
      name={name}
      className={
        "py-2 px-4 border-2 text-green-dark border-gray rounded Montserrat-Regular focus:outline-none focus:border-green-dark hover:border-green transition duration-300 " +
        (className || "")
      }
    />
  );
};
export default InputText;
