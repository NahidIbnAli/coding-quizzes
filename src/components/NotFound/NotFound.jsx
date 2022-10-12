import React from "react";
import errorImage from "../../assets/404-error.svg";

const NotFound = () => {
  return (
    <div className="lg:w-2/4 container mx-auto flex items-center h-screen px-6 lg:px-0">
      <img className="w-full" src={errorImage} alt="" />
    </div>
  );
};

export default NotFound;
