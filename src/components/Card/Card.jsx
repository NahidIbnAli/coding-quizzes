import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ quizCategory }) => {
  const { id, name, logo, total } = quizCategory;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={logo}
          alt=""
          className="rounded-xl bg-slate-100 dark:bg-transparent"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Total Quiz : {total}</p>
        <div className="card-actions">
          <Link to={`/quiz/${id}`}>
            <button className="btn btn-primary">Start Practice</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
