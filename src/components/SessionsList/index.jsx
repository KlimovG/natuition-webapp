import React from "react";
import Column from "../Column";
import TitleBig from "../Title";
import Box from "../Box";
import ButtonRobot from "../ButtonRobot";
import ButtonCircle from "../ButtonCircle";

const SessionsList = (props) => {
  const sessions = ["1", "2", "3"];
  const filter = ["D", "W", "M", "Y"];

  return (
    <Column
      className={
        "sessions-list w-1/4 p-6 h-full bg-gray-light relative rounded-2xl overflow-hidden ml-6"
      }
    >
      <TitleBig className={"justify-self-start"}>Sessions</TitleBig>
      <Box className={"flex flex-col overflow-y-auto gap-2 w-full mt-3"}>
        {sessions.map((robot, i) => {
          return (
            <ButtonRobot key={i} className={""}>
              Session {robot}
            </ButtonRobot>
          );
        })}
      </Box>
      <Box
        className={
          "absolute bottom-0 left-0 w-full flex justify-center items-center py-6 bg-green-bg gap-2"
        }
      >
        {filter.map((period, i) =>
          i === 0 ? (
            <ButtonCircle
              checked
              key={i}
              name={"filterByPeriod"}
              id={i}
              className={
                "text-xl w-12 h-12 flex justify-center items-center bg-gray-light text-xl"
              }
            >
              {period}
            </ButtonCircle>
          ) : (
            <ButtonCircle
              key={i}
              name={"filterByPeriod"}
              id={i}
              className={
                "text-xl w-12 h-12 flex justify-center items-center bg-gray-light text-xl"
              }
            >
              {period}
            </ButtonCircle>
          )
        )}
      </Box>
    </Column>
  );
};

export default SessionsList;
