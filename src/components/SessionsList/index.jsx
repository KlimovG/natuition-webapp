import React, { useState } from "react";
import Column from "../Column";
import TitleBig from "../TitleBig";
import Box from "../Box";
import ButtonSession from "../ButtonSession";
import ButtonSecondary from "../ButtonSecondary";
import ButtonCircle from "../ButtonCircle";

const SessionsList = (props) => {
  const sessions = ["1", "2", "3"];
  const filterTypes = ["day", "week", "month", "year"];
  // Filter by time period
  const [filterBy, setFilterBy] = useState("day");
  // Function to toggle filter type of sessions
  const toggleFilterBy = (e) => {
    const name = e.target.name;
    setFilterBy(name);
  };
  return (
    <Column
      className={
        "sessions-list w-1/4 p-6 h-full bg-gray-light relative rounded-2xl overflow-hidden ml-6"
      }
    >
      <TitleBig className={"justify-self-start"}>Sessions</TitleBig>
      <Box className={"flex flex-col gap-2 w-full mt-3"}>
        {sessions.map((robot, i) => {
          return (
            <ButtonSession key={i} className={""}>
              Session {robot}
            </ButtonSession>
          );
        })}
      </Box>
      <Box
        className={
          "absolute bottom-0 left-0 w-full flex justify-center items-center py-6 bg-green-bg gap-2"
        }
      >
        {filterTypes.map((period, i) => (
          <ButtonCircle
            key={i}
            name={period}
            activeType={filterBy}
            id={i}
            onClick={toggleFilterBy}
            className={
              " text-xl w-12 h-12 flex justify-center items-center bg-white"
            }
          >
            {period[0].toUpperCase()}
          </ButtonCircle>
        ))}
      </Box>
    </Column>
  );
};

export default SessionsList;
