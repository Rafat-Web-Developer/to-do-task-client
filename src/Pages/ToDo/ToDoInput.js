import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const ToDoInput = ({ handleSubmitData }) => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const task = {
      task: data.task,
      email: user?.email,
      status: 0,
    };
    // console.log(task);
    handleSubmitData(task);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex justify-content-center"
      >
        <div className="input-group mb-3 w-75">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task Title"
            aria-label="Enter Task Title"
            aria-describedby="button-addon2"
            {...register("task", {
              required: {
                value: true,
                message: "Task is required.",
              },
            })}
          />

          <button className="btn btn-success" type="submit" id="button-addon2">
            Enter
          </button>
        </div>
      </form>
      <div className="label text-center">
        {errors.task?.type === "required" && (
          <span className="label-text-alt font-bold text-danger">
            {errors.task.message}
          </span>
        )}
      </div>
    </>
  );
};

export default ToDoInput;
