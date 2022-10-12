import React from "react";

const Option = ({ option }) => {
  return (
    <div className="flex gap-x-5 items-center h-28 p-5 border border-slate-500 rounded-lg">
      <input
        type="radio"
        name="radio-2"
        className="radio radio-primary block"
      />
      <p>{option}</p>
    </div>
  );
};

export default Option;
