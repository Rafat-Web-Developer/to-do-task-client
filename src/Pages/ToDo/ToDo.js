import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const [user] = useAuthState(auth);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/tasks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const handleSubmitData = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const result2 = await response.json();
    fetch(`http://localhost:5000/tasks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  };

  return (
    <>
      <ToDoInput handleSubmitData={handleSubmitData}></ToDoInput>
      <ToDoList tasks={tasks}></ToDoList>
    </>
  );
};

export default ToDo;
