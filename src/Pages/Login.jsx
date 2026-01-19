import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { IoLogIn } from "react-icons/io5";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location, navigate)

  // login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // sign in
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  // signin with google
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // password show or close
  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

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
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input w-full border-base-100 border-1 bg-white mb-6"
                    placeholder="Password"
                    required
                  />
                  <button
                    onClick={handleShowPassword}
                    className="absolute top-3 right-4 cursor-pointer"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-xl" />
                    ) : (
                      <FaEye className="text-xl" />
                    )}
                  </button>
                </div>

                {error && (
                  <p className="text-xs text-red-500 font-medium pt-2">
                    {error}
                  </p>
                )}

                {/* forgot password */}
                <div>
                  <a
                    // href="/forgot-password"
                    size="sm"
                    className="link link-hover"
                  >
                    Forgot password?
                  </a>
                </div>
                
                <button type="submit" className="btn btn-secondary mt-2">
                  <IoLogIn size={24} /> Login
                </button>
                {/* google */}
                <button
                  onClick={handleSignInWithGoogle}
                  className="btn btn-secondary"
                >
                  <AiFillGoogleCircle size={24} />
                  Login with Google
                </button>

                <p className="text-xs py-3 text-center">
                  Dont’t Have An Account ?{" "}
                  <Link
                    className="text-secondary font-semibold"
                    to={"/auth/register"}
                  >
                    Sign Up
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
