const quizDataLoader = async () => {
  return fetch("https://openapi.programming-hero.com/api/quiz");
};

export default quizDataLoader;
