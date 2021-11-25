import React from "react";
import Header from "../../components/Header";
import Box from "../../components/Box";
import Row from "../../components/Row";
import RobotsList from "../../components/RobotsList";
import SessionsList from "../../components/SessionsList";
import RobotStatistic from "../../components/RobotStatistic";

const Main = () => {
  return (
    <Box className={"w-full h-full flex flex-col self-start "}>
      <Header />
      <Row className={"flex-1 justify-between"}>
        <RobotsList />
        <RobotStatistic />
        <SessionsList />
      </Row>
    </Box>
  );
};

export default Main;
