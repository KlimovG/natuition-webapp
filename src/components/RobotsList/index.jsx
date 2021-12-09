import React, { useEffect, useState } from "react";
import TitleBig from "../TitleBig";
import Box from "../Box";
import ButtonPrimary from "../ButtonPrimary";
import ButtonRobot from "../ButtonRobot";
import Column from "../Column";
import ClipLoader from "react-spinners/ClipLoader";

const RobotsList = ({ robotsList, handleClick, activeRobot, isLoading }) => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    if (robotsList) {
      setRobots((prev) => (prev = robotsList));
    }
  }, [robotsList]);
  return (
    <Column
      className={
        "w-1/4 p-6 h-auto bg-gray-light relative rounded-2xl overflow-hidden xl:mr-6 max-h-42-5"
      }
    >
      {/*<ButtonArrow*/}
      {/*  position={" top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"}*/}
      {/*/>*/}
      <TitleBig className={"justify-self-start"}>Robots</TitleBig>
      <Box className={"flex flex-col overflow-x-visible gap-2 w-full mt-3"}>
        {isLoading ? (
          <Box className={"mx-auto my-auto"}>
            <ClipLoader loading={isLoading} size={50} />
          </Box>
        ) : (
          robots.map((robot, i) => {
            return (
              <ButtonRobot
                key={i}
                className={""}
                num={robot["_id"]}
                handleClick={handleClick}
                active={activeRobot}
              >
                {robot["robot_name"]}
              </ButtonRobot>
            );
          })
        )}
      </Box>
      <Box
        className={
          "absolute bottom-0 left-0 w-full flex justify-center items-center py-6 bg-green-bg rounded-b-2xl"
        }
      >
        <ButtonPrimary className={"flex items-center uppercase font-bold"}>
          <span className={"font-bold"}>Assistance</span>
          <svg
            className={"w-3 ml-4 -mt-0.5"}
            viewBox="0 0 10 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53609 0.78523L2.2355 0.561627C2.89201 0.352325 3.59207 0.690979 3.87352 1.35269L4.43188 2.6709C4.67498 3.24486 4.54043 3.92022 4.09778 4.34012L2.86666 5.50884C2.94206 6.20824 3.17736 6.8966 3.57127 7.57391C3.94553 8.22925 4.4475 8.80283 5.04744 9.26068L6.5262 8.76667C7.08716 8.58012 7.69752 8.79527 8.04072 9.30033L8.84218 10.4768C9.24193 11.0645 9.17043 11.8744 8.67448 12.3723L8.14277 12.9059C7.61367 13.437 6.85771 13.63 6.15895 13.4116C4.50858 12.8968 2.99146 11.3687 1.60695 8.82712C0.22048 6.28169 -0.268976 4.12107 0.139229 2.34785C0.310831 1.60164 0.841887 1.00688 1.53609 0.78523Z"
              fill="#FDFDFD"
            />
          </svg>
        </ButtonPrimary>
      </Box>
    </Column>
  );
};
export default RobotsList;
