import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("")
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location, navigate)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    
    // sign in
    signIn(email, password)
      .then((result) => {
        console.log(result.user)
        navigate(`${location.state ? location.state : "/"}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode)
    })

  }


  return (
    <div>
      <div className="flex justify-center items-center min-h-screen text-black">
        <div className="card max-w-lg shrink-0 shadow-2xl w-11/12 mx-auto">
          <div className="card-body ">
            <h2 className="text-center font-semibold text-xl py-4">
              Login your account
            </h2>
            <div className="w-xs mx-auto">
              <hr className="text-gray-200 py-3" />
            </div>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
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
                {error && (
                  <p className="text-xs text-red-500 font-medium pt-2">
                    {error}
                  </p>
                )}
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>

                <p className="text-xs py-3 text-center">
                  Dont’t Have An Account ?{" "}
                  <Link
                    className="text-secondary font-semibold"
                    to={"/auth/register"}
                  >
                    Register
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

export default Login;
