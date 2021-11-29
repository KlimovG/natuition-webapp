import React from "react";
import Column from "../Column";
import TitleBig from "../TitleBig";
import Row from "../Row";
import StatisticsOfExtractions from "../StatisticsOfExtractions";
import ButtonMapType from "../ButtonMapType";
import MapView from "../MapView";

const RobotStatistic = (props) => {
  return (
    <Column className={"p-6 w-1/2"}>
      <MapView />

      <StatisticsOfExtractions />
    </Column>
  );
};

export default RobotStatistic;
