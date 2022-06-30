import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

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
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <section className="d-flex justify-content-center">
      <div className="card w-75">
        <div className="card-header">Login Form</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
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
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
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
              Create a new account{" "}
              <Link
                className="text-primary fw-bold text-decoration-none"
                to="/register"
              >
                Signup
              </Link>
            </p>
            {errorMessage}
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
