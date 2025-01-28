import React from "react";
import { chartData } from "../../assets/data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={300} className="mt-8">
      <BarChart data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        
        {/* Individual Bars */}
        <Bar dataKey="total" fill="#8884d8" name="High" stackId="a" />
        <Bar dataKey="total" fill="#82ca9d" name="Medium" stackId="b" />
        <Bar dataKey="total" fill="#ffc658" name="Normal" stackId="c" />
        <Bar dataKey="total" fill="#ff8042" name="Low" stackId="d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
