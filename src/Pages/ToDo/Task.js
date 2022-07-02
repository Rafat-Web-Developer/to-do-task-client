import React from "react";
import { useNavigate } from "react-router-dom";

const Task = ({ task }) => {
  const navigate = useNavigate();
  const handleCompleteTask = (id) => {
    fetch(`http://localhost:5000/completeTask/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/completedTask");
      });
  };
  return (
    <div className="card my-2 shadow-lg">
      <div className="row card-body">
        <div className="col-7 col-md-10">
          <p>{task.task}</p>
        </div>
        <div className="col-5 text-end col-md-2">
          {/* <button className="btn btn-sm btn-primary me-2">Edit</button> */}
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleCompleteTask(task._id)}
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
