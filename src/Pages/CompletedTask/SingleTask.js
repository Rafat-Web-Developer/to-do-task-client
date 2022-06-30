import React from "react";

const SingleTask = () => {
  return (
    <div class="card my-2 shadow-lg">
      <div class="row card-body">
        <div className="col-9 col-md-10">
          <p>
            This is some text within a card
            bodysdfsdfsdfsdfsdfsdfsdfsdfsdfsdf.asdasdasd
          </p>
        </div>
        <div className="col-3 text-end col-md-2">
          <button className="btn btn-sm btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
