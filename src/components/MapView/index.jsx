import React, { useState } from "react";
import Box from "../Box";
import Row from "../Row";
import Column from "../Column";
import TitleBig from "../TitleBig";
import ButtonMapType from "../ButtonMapType";
import MapActions from "../MapActions";
import Map from "../Map";

const MapView = ({ mapData }) => {
  return (
    <Column className={"space-y-2"}>
      <TitleBig>Map view</TitleBig>
      <Map
        className={
          "relative rounded-lg bg-gray-dark w-full h-72 overflow-hidden"
        }
        mapData={mapData}
      ></Map>
    </Column>
  );
};

export default MapView;
