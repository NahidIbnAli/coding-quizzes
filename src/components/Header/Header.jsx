import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div className="flex justify-between items-center container mx-auto px-6 py-4 lg:px-0">
        <Link to="/" className="text-ghost normal-case text-xl font-medium">
          Coding Quizzes
        </Link>
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="lg:hidden"
        >
          <Bars3BottomRightIcon className="w-7 h-7 text-ghost"></Bars3BottomRightIcon>
        </button>
        <div
          className={`flex flex-col lg:flex-row gap-4 lg:gap-7 font-medium absolute left-0 z-10 lg:static ${
            toggleMenu ? "top-[60px]" : "top-[-150px]"
          } duration-500 ease-in-out text-center w-full lg:w-auto pb-4 lg:p-0 bg-base-100 lg:bg-transparent`}
        >
          <NavLink to="/topics">Topics</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
