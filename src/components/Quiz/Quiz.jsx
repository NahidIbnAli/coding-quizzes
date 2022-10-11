import React from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import Option from "../Option/Option";

const Quiz = ({ questionDetails }) => {
  const { question, correctAnswer, options } = questionDetails;
  console.log(options);
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl text-center mb-3">Quiz : {question}</h2>
        <button></button>
        <div className="grid lg:grid-cols-2 gap-5">
          {options.map((option) => (
            <Option key={option} option={option}></Option>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
