import React from "react";

const Blog = () => {
  return (
    <div className="lg:w-2/5 container mx-auto px-6 lg:px-0 my-8">
      <div className="grid grid-cols-1 gap-5">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is the purpose of the react router?
          </div>
          <div className="collapse-content">
            <p>
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does context API work?
          </div>
          <div className="collapse-content">
            <p>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to 'prop drilling' or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is the usage of useHref in React?
          </div>
          <div className="collapse-content">
            <p>
              The useHref hook returns a URL that may be used to link to the
              given to location, even outside of React Router.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
