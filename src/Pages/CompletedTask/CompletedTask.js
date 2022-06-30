import React from "react";
import SingleTask from "./SingleTask";

const CompletedTask = () => {
  return (
    <section className="mt-3">
      <h5 className="text-uppercase my-3 fs-4 text-primary text-center">
        Completed Task List
      </h5>
      <SingleTask></SingleTask>
      <SingleTask></SingleTask>
      <SingleTask></SingleTask>
    </section>
  );
};

export default CompletedTask;
