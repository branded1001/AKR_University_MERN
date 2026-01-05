import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Analytics() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Admissions Growth",
        data: [30, 45, 60, 80, 120, 150],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: false },
    },
    scales: {
      x: { type: "category" },
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-[#111117] p-6 rounded-xl shadow-lg mb-10">
      <h3 className="text-2xl font-bold mb-4">Analytics Overview</h3>
      <div style={{ minHeight: 260 }}>
        <Line data={data} options={options} redraw />
      </div>
    </div>
  );
}
