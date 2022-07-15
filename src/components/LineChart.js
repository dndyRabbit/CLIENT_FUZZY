import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData, width }) => {
  return (
    <div className={`w-${width}`}>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
