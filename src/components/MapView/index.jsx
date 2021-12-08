import React, { useState } from "react";
import Box from "../Box";
import Row from "../Row";
import Column from "../Column";
import TitleBig from "../TitleBig";
import ButtonMapType from "../ButtonMapType";
import MapActions from "../MapActions";
import Map from "../Map";
import Logo from "../Logo";

const MapView = ({ mapData }) => {
  return (
    <Column className={""}>
      <TitleBig>Map view</TitleBig>
      {!mapData ? (
        <Box className={"w-1/2 mt-4"}>
          <Logo />
        </Box>
      ) : (
        <Map
          className={
            "relative rounded-lg bg-gray-dark w-full h-72 overflow-hidden"
          }
          mapData={mapData}
        ></Map>
      )}
    </Column>
  );
};

export default MapView;
