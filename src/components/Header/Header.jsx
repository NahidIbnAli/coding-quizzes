import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="lg:w-3/5 mx-auto">
        <Link className="btn btn-ghost normal-case text-xl">
          Coding Quizzes
        </Link>
      </div>
    </nav>
  );
};

export default Header;
