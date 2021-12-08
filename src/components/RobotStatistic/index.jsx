import React from "react";
import Column from "../Column";
import TitleBig from "../TitleBig";
import Row from "../Row";
import StatisticsOfExtractions from "../StatisticsOfExtractions";
import ButtonMapType from "../ButtonMapType";
import MapView from "../MapView";

const RobotStatistic = ({ sessionData }) => {
  const { voltage_at_start, extraction_number, map } = sessionData;
  return (
    <Column className={"p-6 w-1/2"}>
      <MapView mapData={map} />

      <StatisticsOfExtractions
        statistics={sessionData}
        voltage={voltage_at_start}
        extractions={extraction_number}
      />
    </Column>
  );
};

export default RobotStatistic;
