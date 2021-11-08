import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from "recharts";

function UsChart() {
  const data = [
    { Date: "Oct 10", Cases: 200, pv: 2400, amt: 2400 },
    { Date: "Oct 11", Cases: 600, pv: 2400, amt: 2400 },
    { Date: "Oct 12", Cases: 800, pv: 4000, amt: 2400 },
  ];

  const renderLineChart = (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="Cases" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="Date" />
      <YAxis />
      <Legend
        width={100}
        wrapperStyle={{
          top: 40,
          right: 20,
          backgroundColor: "#f5f5f5",
          border: "1px solid #d5d5d5",
          borderRadius: 3,
          lineHeight: "40px",
        }}
      />
    </LineChart>
  );

  return (
    <div>
      <h1>US COVID-19 Cases:</h1>
      <div className="uschart">{renderLineChart}</div>
    </div>
  );
}

export default UsChart;
