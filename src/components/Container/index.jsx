import React from "react";
const Container = ({ children, className }) => {
  return (
    <div className={"px-6 mx-auto w-full " + (className || "")}>{children}</div>
  );
};

export default Container;
