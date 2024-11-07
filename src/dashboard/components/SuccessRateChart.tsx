// SuccessRateChart.tsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ChartData, ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SuccessRateChart: React.FC = () => {
  const data: ChartData<"doughnut"> = {
    labels: ["Unsuccessful", "Successful"],
    datasets: [
      {
        data: [1, 150],
        backgroundColor: ["#e0f4e4", "#9ed29e"],
        borderWidth: 0,
        hoverOffset: 5,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "80%",
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="max-w-xs mx-auto p-4 text-center">
      <div className="relative w-40 h-40 mx-auto">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-semibold text-green-600">98%</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessRateChart;
