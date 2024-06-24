// src/FetchData.js
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import anime from "animejs";
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
  const [newData, setNewData] = useState(null); // New state for additional endpoint data
  const [entryCount, setEntryCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

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

        // Fetch additional data from the new endpoint
        const newResponse = await axios.get(
          "https://expressbackend-kvby.onrender.com/api/mineral-revenues/2000"
        );
        console.log("New Data Response:", newResponse.data.result);
        setNewData(newResponse.data.result);

        setLoading(false);

        // Animate headings
        anime({
          targets: headingRef.current,
          translateY: [-50, 0],
          opacity: [0, 1],
          duration: 1000,
          easing: "easeOutExpo",
        });

        anime({
          targets: subHeadingRef.current,
          translateY: [-30, 0],
          opacity: [0, 1],
          duration: 1000,
          easing: "easeOutExpo",
          delay: 500,
        });
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

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    animation: {
      duration: 2000,
    },
  };

  const createChartData = (data) => ({
    labels: Object.keys(data),
    datasets: [
      {
        label: "Counts",
        data: Object.values(data),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const createNewChartData = (data, field) => {
    if (!data) return { labels: [], datasets: [] };
    return {
      labels: data.map((entry) => entry.district),
      datasets: [
        {
          label: field,
          data: data.map((entry) => entry[field]),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 ref={headingRef}>Mines & Minerals Monitoring System</h1>
      <h2 ref={subHeadingRef}>Total Number of Cases: {entryCount}</h2>
      <h3>Field Data:</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Bar data={createChartData(data33)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Pie data={createChartData(data33)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Line data={createChartData(data33)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Doughnut data={createChartData(data33)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Bar data={createChartData(data5)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Pie data={createChartData(data5)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Line data={createChartData(data5)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Doughnut data={createChartData(data5)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Bar data={createChartData(data59)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Pie data={createChartData(data59)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Line data={createChartData(data59)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Doughnut data={createChartData(data59)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Bar data={createChartData(data61)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Pie data={createChartData(data61)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Line data={createChartData(data61)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Doughnut data={createChartData(data61)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Bar data={createChartData(data67)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Pie data={createChartData(data67)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Line data={createChartData(data67)} options={options} />
        </div>
        <div style={{ flex: "1 1 45%", height: "400px" }}>
          <Doughnut data={createChartData(data67)} options={options} />
        </div>

        {/* New Charts for the additional data */}
        {newData && (
          <>
            <div style={{ flex: "1 1 45%", height: "400px" }}>
              <Bar
                data={createNewChartData(newData, "Limestone")}
                options={options}
              />
            </div>
            <div style={{ flex: "1 1 45%", height: "400px" }}>
              <Pie
                data={createNewChartData(newData, "Limestone")}
                options={options}
              />
            </div>
            <div style={{ flex: "1 1 45%", height: "400px" }}>
              <Line
                data={createNewChartData(newData, "Limestone")}
                options={options}
              />
            </div>
            <div style={{ flex: "1 1 45%", height: "400px" }}>
              <Doughnut
                data={createNewChartData(newData, "Limestone")}
                options={options}
              />
            </div>
            <div style={{ flex: "1 1 45%", height: "400px" }}>
              <Bar
                data={createNewChartData(newData, "Coal")}
                options={options}
              />
            </div>
            <div style={{ flex: "1 1 45%", height: "400px" }}>
              <Pie
                data={createNewChartData(newData, "Coal")}
                options={options}
              />
            </div>
            <div style={{ flex: "1 1 45%", height: "400px" }}>
              <Line
                data={createNewChartData(newData, "Coal")}
                options={options}
              />
            </div>
            <div style={{ flex: "1 1 45%", height: "400px" }}>
              <Doughnut
                data={createNewChartData(newData, "Coal")}
                options={options}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FetchData;
