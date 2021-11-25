import React from "react";

const ButtonArrow = ({ position, arrowColor, circleColor }) => {
  return (
    <button className={"absolute" + position}>
      <svg
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className={"w-20 h-20"}
      >
        <circle cx="40" cy="40" r="40" className={"fill-current text-white"} />
        <path
          className={"fill-current text-green"}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.5028 56.5036C47.1201 57.8828 44.8816 57.8814 43.5007 56.5005L28.8286 41.8284C27.2665 40.2663 27.2665 37.7337 28.8286 36.1716L43.5007 21.4995C44.8817 20.1185 47.1201 20.1172 48.5028 21.4964C49.8883 22.8784 49.8892 25.1225 48.5049 26.5057L38.8322 36.1704C37.2685 37.7328 37.2685 40.2672 38.8322 41.8296L48.5049 51.4943C49.8892 52.8775 49.8883 55.1216 48.5028 56.5036Z"
        />
      </svg>
    </button>
  );
};

export default ButtonArrow;
