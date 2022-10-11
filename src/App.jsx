import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import "./App.css";
import Topics from "./components/Topics/Topics";
import Blog from "./components/Blog/Blog";
import quizDataLoader from "./loaders/quizDataLoader";

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
        },
        {
          path: "blog",
          element: <Blog></Blog>,
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
