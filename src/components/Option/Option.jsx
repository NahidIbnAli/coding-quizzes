import React from "react";

const Option = ({ option, handleQuizResult }) => {
  return (
    <label className="label block">
      <div className="flex gap-x-5 items-center h-28 p-5 border border-slate-500 rounded-lg hover:bg-slate-700">
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
