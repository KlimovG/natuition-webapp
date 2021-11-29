import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Column from "../Column";
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: [
      "Plantain great",
      "Dandellion",
      "Daisy",
      "Plantain narrowleaf",
      "Porcelle",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(116, 224, 110, 0.7)",
          "rgba(191, 245, 188, 0.7)",
          "rgba(59, 171, 54, 0.7)",
          "rgba(126, 166, 124, 0.7)",
          "rgba(3, 43, 0, 0.7)",
        ],
        borderColor: [
          "rgba(116, 224, 110, 1)",
          "rgba(191, 245, 188, 1)",
          "rgba(59, 171, 54, 1)",
          "rgba(126, 166, 124, 1)",
          "rgba(3, 43, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Column className={"w-full h-38 relative"}>
      <Doughnut
        data={data}
        options={{
          maintainAspectRatio: false,
          cutout: 10,
          plugins: {
            legend: {
              position: "right",
              onClick: function (event, legendItem) {},
              maxWidth: 200,
              labels: {
                boxWidth: 20,
                font: {
                  family: "Hind Madurai",
                  size: "12px",
                },
              },
            },
          },
        }}
      />
    </Column>
  );
};

export default Chart;
