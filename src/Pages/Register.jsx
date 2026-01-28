import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { LuNotebookPen } from "react-icons/lu";
import toast from "react-hot-toast";

const Register = () => {
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUser, setUser, signInWithGoogle } =
    use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name Must should be more then 5 character");
      toast.error("Name Must should be more then 5 character")
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must be 1 Uppercase, 1 Lowercase, and should be 6 character",
        toast.error("Password must be 1 Uppercase, 1 Lowercase, and should be 6 character")
      );
      return;
    } else {
      setPasswordError("");
    }
    console.log(name, photo, email, password);
    // create user
    createUser(email, password).then((result) => {
      const user = result.user;
      updateUser({ displayName: name, photoURL: photo }) // update user
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          toast.success("Registration Successful");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          setUser(user); // set user
        });
    });
  };

  // password show or close
  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  // login with google
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen text-black">
        <div className="card max-w-lg shrink-0 shadow-2xl w-11/12 mx-auto">
          <div className="card-body ">
            <h2 className="text-center font-semibold text-xl py-4">
              SignUp your account
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
                {nameError && (
                  <p className="text-red-400 text-xs font-medium pt-2">
                    Must should be more then 5 character
                  </p>
                )}
                {/* photo url */}
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
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input w-full border-base-100 border-1 bg-white mb-1"
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
                {passwordError && (
                  <p className="text-xs text-red-500 font-medium pt-2">
                    Password must be 1 Uppercase, 1 Lowercase, and should be 6
                    character
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


                {/* register button */}
                <button type="submit" className="btn btn-secondary mt-4">
                  <LuNotebookPen size={20} /> Register Now
                </button>
                {/* login with google */}
                <button
                  onClick={handleSignInWithGoogle}
                  className="btn btn-secondary"
                >
                  <AiFillGoogleCircle size={24} />
                  SignUp with Google
                </button>

                <p className="text-xs py-3 text-center">
                  Already Have An Account ?{" "}
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
