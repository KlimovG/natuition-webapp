import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Box from "../../components/Box";
import Row from "../../components/Row";
import RobotsList from "../../components/RobotsList";
import SessionsList from "../../components/SessionsList";
import RobotStatistic from "../../components/RobotStatistic";

const Main = () => {
  const [sessions, setSessions] = useState([]);
  const [activeSession, setActiveSession] = useState("");
  const [activeSessionData, setActiveSessionData] = useState({});
  const [isSessionDataLoaded, setIsSessionDataLoaded] = useState(false);
  const [robots, setRobots] = useState([]);
  const [activeRobot, setActiveRobot] = useState("");
  //Get sessions for one robot
  const getSessionsData = (e) => {
    setIsSessionDataLoaded(true);
    const robotID = e.currentTarget.dataset.num;
    setActiveRobot((prev) => (prev = robotID));
    axios
      .get(`https://natuition-fleet-api.herokuapp.com/session/all/${robotID}`)
      .then((res) => {
        // handle success
        setSessions(res.data);
        setIsSessionDataLoaded(false);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  //Get one sessions data
  const getOneSessionData = (e) => {
    const sessionsNumber = e.currentTarget.dataset.num;
    console.log(sessionsNumber);
    const getCurrentSession = sessions.find(
      (session) => session["sessions_number"] === sessionsNumber
    );

    setActiveSession(getCurrentSession["sessions_number"]);
    setActiveSessionData(getCurrentSession);
  };
  useEffect(() => {
    axios
      .get("https://natuition-fleet-api.herokuapp.com/robot")
      .then((res) => {
        // handle success
        setRobots(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <Box className={"w-full h-full flex flex-col self-start "}>
      <Header />
      <Row className={"flex-1 justify-between"}>
        <RobotsList
          robotsList={robots}
          handleClick={getSessionsData}
          activeRobot={activeRobot}
        />
        <RobotStatistic sessionData={activeSessionData} />
        <SessionsList
          sessionsData={sessions}
          handleClick={getOneSessionData}
          activeSession={activeSession}
          isLoaded={isSessionDataLoaded}
        />
      </Row>
    </Box>
  );
};

export default Main;
