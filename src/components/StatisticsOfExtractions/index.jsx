import React, { useEffect, useState } from "react";
import Column from "../Column";
import TitleBig from "../TitleBig";
import TitleSmall from "../TitleSmall";
import Chart from "../Chart";
import Row from "../Row";
import RobotStatItem from "../RobotStatItem";

const StatisticsOfExtractions = ({ statistics, voltage, extractions }) => {
  const [voltageAtStart, setVoltageAtStart] = useState("--.-");
  const [targetSurface, setTargetSurface] = useState("----");
  const [coveredSurface, setCoveredSurface] = useState("--");
  const [timeLeft, setTimeLeft] = useState("--:--");
  const [totalNumber, setTotalNumber] = useState("---");
  useEffect(() => {
    if (statistics) {
      if (extractions) {
        if (Object.values(extractions).length === 1) {
          setTotalNumber(Object.values(extractions)[0]);
        } else {
          const sumOfExtractions = Object.values(extractions).reduce(
            (a, b) => a + b
          );
          setTotalNumber(sumOfExtractions);
        }
      } else if (!extractions || extractions === undefined) {
        setTotalNumber((prev) => (prev = "---"));
      }
      if (!voltage) {
        setVoltageAtStart((prev) => (prev = "--.-"));
      } else {
        setVoltageAtStart((prev) => (prev = voltage));
        setTargetSurface((prev) => (prev = "4500"));
        setCoveredSurface((prev) => (prev = "45"));
        setTimeLeft((prev) => (prev = "04:30"));
      }
      if (!extractions & !voltage) {
        setTargetSurface((prev) => (prev = "----"));
        setCoveredSurface((prev) => (prev = "--"));
        setTimeLeft((prev) => (prev = "--:--"));
      } else if (!extractions && voltage) {
        setTargetSurface((prev) => (prev = "4500"));
        setCoveredSurface((prev) => (prev = "45"));
        setTimeLeft((prev) => (prev = "04:30"));
      }
    }
  }, [statistics, voltage, extractions]);
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
            <RobotStatItem text={"Voltage"} value={voltageAtStart + " v"} />
            <RobotStatItem
              text={"Target surface"}
              value={targetSurface + " m2"}
            />
            <RobotStatItem text={"Covered"} value={coveredSurface + " %"} />
            <RobotStatItem text={"Time left"} value={timeLeft} />
          </Column>
        </Column>
      </Row>
    </Column>
  );
};

export default StatisticsOfExtractions;
