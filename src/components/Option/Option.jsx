import React, { useState } from "react";

const Option = ({ option, correctAnswer, rightAnswer, wrongAnswer }) => {
  const [bg, setBg] = useState("bg-transparent");
  const handleQuizResult = (option) => {
    if (option === correctAnswer) {
      rightAnswer();
      setBg("bg-slate-700");
    } else {
      wrongAnswer();
    }
  };
  return (
    <label className="label block">
      <div
        className={`flex gap-x-5 items-center h-28 p-5 border border-slate-500 rounded-lg hover:bg-slate-700 ${bg}`}
      >
        <input
          onClick={() => handleQuizResult(option)}
          type="radio"
          name="radio-2"
          className="radio radio-primary"
        />
        <p>{option}</p>
      </div>
    </label>
  );
};

export default Option;
