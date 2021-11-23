import React from "react";
import Header from "../../components/Header";
import Box from "../../components/Box";
import Row from "../../components/Row";
import RobotsList from "../../components/RobotsList";

const Main = () => {
  return (
    <Box className={"w-full h-full flex flex-col self-start "}>
      <Header />
      <Row className={"flex-1 "}>
        <RobotsList />
      </Row>
    </Box>
  );
};

export default Main;
