import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

  const {createUser, updateUser, setUser} = use(AuthContext);
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo })
            navigate("/")
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      });
  }

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen text-black">
        <div className="card max-w-lg shrink-0 shadow-2xl w-11/12 mx-auto">
          <div className="card-body ">
            <h2 className="text-center font-semibold text-xl py-4">
              Register your account
            </h2>
            <div className="w-xs mx-auto">
              <hr className="text-gray-200 py-3" />
            </div>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="label font-semibold">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input w-full border-base-100 border-1 bg-white mb-1"
                  placeholder="Enter your name"
                  required
                />
                {/* name */}
                <label className="label font-semibold">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  className="input w-full border-base-100 border-1 bg-white mb-1"
                  placeholder="Enter your photo url"
                  required
                />
                {/* email */}
                <label className="label font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full border-base-100 border-1 bg-white mb-1"
                  placeholder="Email"
                  required
                />
                {/* password */}
                <label className="label font-semibold">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input w-full border-base-100 border-1 bg-white mb-1"
                  placeholder="Password"
                  required
                />
                {/* {error && (
                  <p className="text-xs text-red-500 font-medium pt-2">
                    {error}
                  </p>
                )} */}
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
                <p className="text-xs py-3 text-center">
                  Dont’t Have An Account ?{" "}
                  <Link
                    className="text-secondary font-semibold"
                    to={"/auth/login"}
                  >
                    Login
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>{" "}
      Login
    </div>
  );
};

export default Register;
