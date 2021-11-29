import React from "react";
import Column from "../Column";
import TitleBig from "../TitleBig";
import TitleSmall from "../TitleSmall";
import Chart from "../Chart";
import Row from "../Row";
import RobotStatItem from "../RobotStatItem";

const StatisticsOfExtractions = () => {
  return (
    <Column className={"mt-auto"}>
      <TitleBig>Statistics of extractions</TitleBig>
      <Row>
        <Column className={"w-1/2"}>
          <TitleSmall>Type of plants:</TitleSmall>
          <Chart />
          <RobotStatItem
            className={"mt-auto"}
            text={"Total number"}
            value={"1200"}
          />
        </Column>
        <Column className={"w-2/5 ml-auto "}>
          <TitleSmall>Stats of robot:</TitleSmall>
          <Column className={" space-y-2"}>
            <RobotStatItem text={"Voltage"} value={"12.9V"} />
            <RobotStatItem text={"Target surface"} value={"4500 m2"} />
            <RobotStatItem text={"Covered"} value={"40 %"} />
            <RobotStatItem text={"Time left"} value={"04:30"} />
          </Column>
        </Column>
      </Row>
    </Column>
  );
};

export default StatisticsOfExtractions;
