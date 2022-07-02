import React from "react";

const SingleTask = ({ task }) => {
  return (
    <div className="card my-2 shadow-lg">
      <div className="row card-body">
        <div className="col-9 col-md-10">
          <p>{task.task}</p>
        </div>
        {/* <div className="col-3 text-end col-md-2">
          <button className="btn btn-sm btn-danger">Delete</button>
        </div> */}
      </div>
    </div>
  );
};

export default SingleTask;
