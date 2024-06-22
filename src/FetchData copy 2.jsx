// src/FetchData.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const FetchData = () => {
  const [data33, setData33] = useState(null);
  const [data5, setData5] = useState(null);
  const [data59, setData59] = useState(null);
  const [data61, setData61] = useState(null);
  const [data67, setData67] = useState(null);
  const [entryCount, setEntryCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://case.minesandminerals.info/wp-json/gf/v2/forms/1/results",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${btoa(
                "ck_d18198b694fe812b26e1b2c6ca9abeb99cf7c4ae:cs_a75ed2b34b77657a063ce0c54fb66891a83781e3"
              )}`,
            },
          }
        );
        const responseData = response.data;
        setEntryCount(responseData.entry_count);
        setData33(responseData.field_data["33"]);
        setData5(responseData.field_data["5"]);
        setData59(responseData.field_data["59"]);
        setData61(responseData.field_data["61"]);
        setData67(responseData.field_data["67"]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Prepare chart data for field 33
  const chartData33 = {
    labels: Object.keys(data33),
    datasets: [
      {
        label: "Field Data Counts (33)",
        data: Object.values(data33),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Prepare chart data for field 5
  const chartData5 = {
    labels: Object.keys(data5),
    datasets: [
      {
        label: "Field Data Counts (5)",
        data: Object.values(data5),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const chartData59 = {
    labels: Object.keys(data59),
    datasets: [
      {
        label: "Field Data Counts (59)",
        data: Object.values(data59),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Prepare chart data for field 61
  const chartData61 = {
    labels: Object.keys(data61),
    datasets: [
      {
        label: "Field Data Counts (61)",
        data: Object.values(data61),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Prepare chart data for field 67
  const chartData67 = {
    labels: Object.keys(data67),
    datasets: [
      {
        label: "Field Data Counts (67)",
        data: Object.values(data67),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Form Data Counts</h1>
      <h2>Entry Count: {entryCount}</h2>
      <h3>Field Data:</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Bar data={chartData33} options={options} />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Pie data={chartData33} options={options} />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Line data={chartData33} options={options} />
        </div>

        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Bar data={chartData5} options={options} />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Pie data={chartData5} options={options} />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Line data={chartData5} options={options} />
        </div>

        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Bar data={chartData59} options={options} />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Pie data={chartData59} options={options} />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Line data={chartData59} options={options} />
        </div>

        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Bar data={chartData61} options={options} />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Pie data={chartData61} options={options} />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Line data={chartData61} options={options} />
        </div>

        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Bar data={chartData67} options={options} />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Pie data={chartData67} options={options} />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", height: "400px" }}>
          <Line data={chartData67} options={options} />
        </div>
      </div>
    </div>
  );
};

export default FetchData;
