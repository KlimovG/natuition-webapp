import React from "react";

const TitleBig = ({ children, className }) => {
  return (
    <h2
      className={
        "Montserrat-Bold text-2xl text-left mb-2.5 " + (className || "")
      }
    >
      {children}
    </h2>
  );
};

export default TitleBig;
