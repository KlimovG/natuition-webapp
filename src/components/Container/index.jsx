import React from "react";
const Container = ({ children, className }) => {
  return (
    <div className={"px-6 mx-auto max-w-xl " + (className || "")}>
      {children}
    </div>
  );
};

export default Container;
