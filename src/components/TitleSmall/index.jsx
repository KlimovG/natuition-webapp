import React from "react";

const TitleSmall = ({ children, className }) => {
  return (
    <h3
      className={
        "Montserrat-Medium text-xl text-left mb-2 " + (className || "")
      }
    >
      {children}
    </h3>
  );
};

export default TitleSmall;
