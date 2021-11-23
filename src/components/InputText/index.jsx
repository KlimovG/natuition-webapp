import React from "react";

const InputText = ({ name, children, styles }) => {
  return (
    <input
      type="text"
      placeholder={children}
      name={name}
      className={
        "py-2 px-4 border-2 border-gray rounded Montserrat-Regular " +
        (styles || "")
      }
    />
  );
};
export default InputText;
