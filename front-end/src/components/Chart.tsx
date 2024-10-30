import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { display } from "@mui/system";

const Data = [
  {
    id: 1,
    month: "01/06",
    amount: 80,
  },
  {
    id: 2,
    month: "01/07",
    amount: 45,
  },
  {
    id: 3,
    month: "01/08",
    amount: 78,
  },
  {
    id: 4,
    month: "01/09",
    amount: 90,
  },
  {
    id: 5,
    month: "01/10",
    amount: 60,
  },
  {
    id: 5,
    month: "01/11",
    amount: 40,
  },
  {
    id: 5,
    month: "01/12",
    amount: 400,
  },
];

const BarChart = ({ chartData }: any) => {
  return (
    <div
      className="chart-container"
      style={{ width: "565px", height: "349px" }}
    >
      <h2
        style={{
          textAlign: "left",
          marginBottom: "24px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Борлуулалт
      </h2>
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              grid: {
                display: true,
              },
              beginAtZero: true,
              border: { dash: [6, 6] },
              ticks: {
                stepSize: 100,
                callback: (v) => `${v}K`,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.dataset.label}: ${ctx.formattedValue}K`,
              },
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

Chart.register(CategoryScale);

export const BarChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.month),

    datasets: [
      {
        data: Data.map((data) => data.amount),
        backgroundColor: ["text.helper"],
        borderColor: "black",
        borderWidth: 2,
        barThickness: 8,
        borderRadius: 8,
      },
    ],
  });

  return (
    <div className="App">
      <BarChart chartData={chartData} />
    </div>
  );
};
