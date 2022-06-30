import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="card w-75">
        <div className="card-header">Registration Form</div>
        <div className="card-body">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
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
