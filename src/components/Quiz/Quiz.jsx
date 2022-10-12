import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import Option from "../Option/Option";
import { toast } from "react-toastify";

const Quiz = ({ questionDetails, quizCount }) => {
  const { question, correctAnswer, options } = questionDetails;
  const notify = () => toast.success(correctAnswer, { theme: "dark" });
  const rightAnswer = () => toast.success("Correct Answer", { theme: "dark" });
  const wrongAnswer = () => toast.error("Wrong Answer", { theme: "dark" });
  const handleQuizResult = (option) => {
    if (option === correctAnswer) {
      rightAnswer();
    } else {
      wrongAnswer();
    }
  };
  // console.log(questionDetails);
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="m-7">
        <h2 className="text-xl text-center mb-7 w-4/5 md:w-3/5 mx-auto">
          Quiz {quizCount}: {question}
        </h2>
        <button onClick={notify} className="absolute top-5 right-5">
          <EyeIcon className="w-6 h-6"></EyeIcon>
        </button>
        <div className="grid lg:grid-cols-2 gap-5">
          {options.map((option) => (
            <Option
              handleQuizResult={handleQuizResult}
              key={option}
              option={option}
            ></Option>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
