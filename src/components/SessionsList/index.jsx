import React, { useEffect, useState } from "react";
import Column from "../Column";
import TitleBig from "../TitleBig";
import Box from "../Box";
import ButtonSession from "../ButtonSession";
import ButtonSecondary from "../ButtonSecondary";
import ButtonCircle from "../ButtonCircle";
import ClipLoader from "react-spinners/ClipLoader";

const SessionsList = ({
  sessionsData,
  handleClick,
  activeSession,
  isLoaded,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    setSessions(sessionsData);
  });
  // const sessions = ["1", "2", "3"];
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
        "sessions-list w-1/4 px-4 py-6 h-auto bg-gray-light relative rounded-2xl overflow-hidden xl:ml-6 max-h-42-5  pb-24"
      }
    >
      <TitleBig className={"justify-self-start px-2"}>Sessions</TitleBig>
      <Box
        className={
          "flex flex-col gap-2 w-full mt-3 overflow-auto h-full max-h-full px-2 pb-4 "
        }
      >
        {isLoaded ? (
          <Box className={"mx-auto my-auto"}>
            <ClipLoader loading={isLoaded} size={50} />
          </Box>
        ) : (
          sessions &&
          sessions.map((data, i) => {
            return (
              <ButtonSession
                handleClick={handleClick}
                key={i}
                className={""}
                num={data["sessions_number"]}
                active={activeSession}
              >
                Session {i + 1}
              </ButtonSession>
            );
          })
        )}
      </Box>
      <Box
        className={
          "absolute bottom-0 left-0 w-full flex justify-center items-center py-6 bg-green-bg gap-2 rounded-b-2xl"
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
