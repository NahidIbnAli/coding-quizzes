import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Legend,
  Line,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData().data;

  return (
    <div className="flex justify-center lg:w-2/3 2xl:w-5/12 container mx-auto mt-20 pr-6 lg:pr-0">
      <ResponsiveContainer width={"100%"} aspect={2}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
          <Legend></Legend>
          <Line type="monotone" dataKey="total" stroke="#8884d8"></Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
