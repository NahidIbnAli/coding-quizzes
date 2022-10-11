import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  const quizCategories = useLoaderData().data;
  return (
    <div>
      <div className="container mx-auto px-6 lg:px-0">
        <HeroSection></HeroSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
          {quizCategories.map((quizCategory) => (
            <Card key={quizCategory.id} quizCategory={quizCategory}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
