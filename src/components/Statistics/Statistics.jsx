import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData().data;

  return (
    <div className="flex justify-center lg:w-2/3 2xl:w-5/12 container mx-auto mt-20 pr-6 lg:pr-0">
      <ResponsiveContainer aspect={2}>
        <BarChart data={data}>
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
