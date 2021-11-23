import React from "react";

const TitleBig = ({ children, className }) => {
  return (
    <h2 className={"Montserrat-Bold text-2xl text-left " + (className || "")}>
      {children}
    </h2>
  );
};

export default TitleBig;
