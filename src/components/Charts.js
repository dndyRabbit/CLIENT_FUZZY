import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData, width }) => {
  return (
    <div className={`w-${width}`}>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
