import React from "react";
import "./NotFound.css";
import errorImage from "../../assets/404-error.svg";

const NotFound = () => {
  return (
    <div className="lg:w-2/4 bg-img container mx-auto flex flex-col items-center h-screen px-6 lg:px-0 pt-24">
      <h1 className="text-5xl md:text-6xl font-semibold text-center">
        This route not found
      </h1>
    </div>
  );
};

export default NotFound;
