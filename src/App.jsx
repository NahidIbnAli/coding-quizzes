import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import "./App.css";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "topics",
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
