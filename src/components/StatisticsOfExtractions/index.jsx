import React, { useEffect, useState } from "react";
import Column from "../Column";
import TitleBig from "../TitleBig";
import TitleSmall from "../TitleSmall";
import Chart from "../Chart";
import Row from "../Row";
import RobotStatItem from "../RobotStatItem";

const StatisticsOfExtractions = ({ statistics, voltage, extractions }) => {
  const [totalNumber, setTotalNumber] = useState("000");
  useEffect(() => {
    if (extractions) {
      const sumOfExtractions = Object.values(extractions).reduce(
        (a, b) => a + b
      );
      console.log(sumOfExtractions);
      setTotalNumber(sumOfExtractions);
    }
  }, [extractions]);
  // useEffect();
  return (
    <Column className={"mt-auto"}>
      <Row>
        <TitleBig>Statistics of extractions</TitleBig>
      </Row>
      <Row>
        <Column className={"w-1/2"}>
          <TitleSmall>Type of plants:</TitleSmall>
          {statistics ? (
            <Chart extractionsData={statistics["extraction_number"]} />
          ) : (
            <Chart />
          )}
          <RobotStatItem
            className={"mt-auto"}
            text={"Total number"}
            value={totalNumber}
          />
        </Column>
        <Column className={"w-2/5 ml-auto "}>
          <TitleSmall>Stats of robot:</TitleSmall>
          <Column className={" space-y-2"}>
            <RobotStatItem text={"Voltage"} value={voltage || "00.0V"} />
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
