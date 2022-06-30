import React from "react";

const ToDoInput = () => {
  return (
    <section className="d-flex justify-content-center">
      <div class="input-group mb-3 w-75">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Task Title"
          aria-label="Enter Task Title"
          aria-describedby="button-addon2"
        />
        <button class="btn btn-success" type="button" id="button-addon2">
          Enter
        </button>
      </div>
    </section>
  );
};

export default ToDoInput;
