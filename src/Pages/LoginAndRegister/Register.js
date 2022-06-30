import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  // if (loading) {
  //   return <Loading></Loading>;
  // }

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-error font-bold">{error?.message}</p>;
  }

  if (user) {
    navigate("/hello-gas/admin/dashboard");
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
            <div class="mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
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
            <div class="mb-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
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
              Already have an account{" "}
              <Link
                className="text-primary fw-bold text-decoration-none"
                to="/login"
              >
                Login
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

export default Register;
