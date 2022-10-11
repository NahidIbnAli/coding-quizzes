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
              React Router, and dynamic, client-side routing, allows us to build
              a single-page web application with navigation without the page
              refreshing as the user navigates. React Router uses component
              structure to call components, which display the appropriate
              information.
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
              It returns a consumer and a provider. Provider is a component that
              as it's names suggests provides the state to its children. It will
              hold the "store" and be the parent of all the components that
              might need that store. Consumer as it so happens is a component
              that consumes and uses the state.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is useRef?
          </div>
          <div className="collapse-content">
            <p>
              The useRef Hook allows us to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. And It can be used to access a DOM element
              directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
