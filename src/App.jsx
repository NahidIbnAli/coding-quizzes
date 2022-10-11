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
