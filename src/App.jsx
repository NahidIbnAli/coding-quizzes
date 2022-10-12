import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import "./App.css";
import Topics from "./components/Topics/Topics";
import Blog from "./components/Blog/Blog";
import quizDataLoader from "./loaders/quizDataLoader";
import QuizContainer from "./components/QuizContainer/QuizContainer";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: quizDataLoader,
          element: <Topics></Topics>,
        },
        {
          path: "topics",
          loader: quizDataLoader,
          element: <Topics></Topics>,
        },
        {
          path: "statistics",
          loader: quizDataLoader,
          element: <Statistics></Statistics>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "quiz/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <QuizContainer></QuizContainer>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
