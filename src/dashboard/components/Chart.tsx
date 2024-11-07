// ChartComponent.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartData, ChartOptions } from "chart.js";

// Register chart elements
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Define data
const data: ChartData<"bar"> = {
  labels: ["Mar 1 - 7", "Mar 8 - 14", "Mar 15 - 21", "Mar 22 - 28", "Final wk"],
  datasets: [
    {
      label: "Weekly Data",
      data: [30000, 110000, 100000, 100000, 180000],
      backgroundColor: "rgba(186, 104, 200, 0.4)",
      borderRadius: 8,
    },
  ],
};

// Define options
const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 50000,
        callback: (value) => value.toLocaleString(),
      },
    },
  },
};

// Chart Component
const ChartComponent: React.FC = () => {
  return (
    <div className="mx-auto p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
