import React from "react";
import HeroImage from "../../assets/hero-image.svg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div>
        <img className="w-56" src={HeroImage} alt="" />
      </div>
      <div>
        <p className="text-xl text-center lg:w-3/5 mx-auto">
          Are you a budding web developer? Take our quiz to see how much you
          know about the world of coding!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
