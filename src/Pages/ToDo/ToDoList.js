import React from "react";
import Tasks from "./Tasks";

const ToDoList = ({ tasks }) => {
  return (
    <section className="mt-3">
      <h5 className="text-uppercase my-3 fs-4 text-primary text-center">
        List of tasks
      </h5>
      <Tasks tasks={tasks}></Tasks>
    </section>
  );
};

export default ToDoList;
