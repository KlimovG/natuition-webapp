import React from "react";
import Column from "../Column";
import TitleBig from "../Title";
import Row from "../Row";

const RobotStatistic = (props) => {
  return (
    <Column className={"p-6 w-1/2"}>
      <Row>
        <TitleBig>Map view</TitleBig>
      </Row>
      <Row>
        <TitleBig>Statistics of extractions</TitleBig>
      </Row>
    </Column>
  );
};

export default RobotStatistic;
