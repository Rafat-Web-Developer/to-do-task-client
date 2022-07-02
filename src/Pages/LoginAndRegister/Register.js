import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-error font-bold">{error?.message}</p>;
  }

  if (user) {
    navigate("/home");
  }

  const onSubmit = async (data) => {
    // console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <section className="d-flex justify-content-center">
      <div className="card w-75">
        <div className="card-header">Registration Form</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required.",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt font-bold text-danger">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required.",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt font-bold text-danger">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required.",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt font-bold text-danger">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <p>
              Already have an account{" "}
              <Link
                className="text-primary fw-bold text-decoration-none"
                to="/login"
              >
                Login
              </Link>
            </p>
            {errorMessage}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
