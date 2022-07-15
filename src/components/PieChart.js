import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ chartData, width }) => {
  return (
    <div className={`w-${width} h-[200px]`}>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
