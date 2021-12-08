import React, { useState } from "react";
import Box from "../Box";
import Row from "../Row";
import Column from "../Column";
import TitleBig from "../TitleBig";
import ButtonMapType from "../ButtonMapType";
import MapActions from "../MapActions";
import Map from "../Map";
import Logo from "../Logo";

const MapView = ({ mapData, toggleMapType, activeMapType }) => {
  return (
    <Column className={""}>
      <TitleBig>Map view</TitleBig>
      {!mapData ? (
        <Box className={"w-1/2 mt-16"}>
          <Logo />
        </Box>
      ) : (
        <Map
          className={
            "relative rounded-lg bg-gray-dark w-full h-72 overflow-hidden"
          }
          mapData={mapData}
          toggleMapType={toggleMapType}
          activeMapType={activeMapType}
        ></Map>
      )}
    </Column>
  );
};

export default MapView;
