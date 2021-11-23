import React from "react";
const Box = ({ children, className }) => {
  return <div className={"mx-auto " + (className || null)}>{children}</div>;
};

export default Box;
