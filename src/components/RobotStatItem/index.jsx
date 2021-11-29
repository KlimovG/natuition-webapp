import React from "react";
import Row from "../Row";
import Box from "../Box";

const RobotStatItem = ({ text, value, className }) => {
  return (
    <Row
      className={
        "justify-between w-full HindMadurai-Light items-center " + className
      }
    >
      {text || "text"}:
      <Box
        className={
          "border-green-dark border-2 rounded mr-0 p-1 w-2/5 text-center"
        }
      >
        {value || "value"}
      </Box>
    </Row>
  );
};

export default RobotStatItem;
