import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizContainer = () => {
  const quizzes = useLoaderData().data;
  const { name, questions } = quizzes;
  let quizCounter = 0;
  return (
    <div className="2xl:w-3/5 container mx-auto mt-10 px-6">
      <ToastContainer position="top-center" />
      <h2 className="text-3xl font-semibold text-center mb-7">
        Quiz of {name}
      </h2>
      <div className="grid grid-cols-1 gap-10">
        {questions.map((questionDetails) => {
          ++quizCounter;
          return (
            <Quiz
              key={questionDetails.id}
              questionDetails={questionDetails}
              quizCount={quizCounter}
            ></Quiz>
          );
        })}
      </div>
    </div>
  );
};

export default QuizContainer;
