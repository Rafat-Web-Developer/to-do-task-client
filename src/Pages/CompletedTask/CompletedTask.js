import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SingleTask from "./SingleTask";

const CompletedTask = () => {
  const [user] = useAuthState(auth);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/completedTasks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return (
    <section className="mt-3">
      <h5 className="text-uppercase my-3 fs-4 text-primary text-center">
        Completed Task List
      </h5>
      {tasks.map((task) => (
        <SingleTask key={task._id} task={task}></SingleTask>
      ))}
    </section>
  );
};

export default CompletedTask;
