import { RotateCcwKey } from "lucide-react";
import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router";

const ForgotPassword = () => {
  const { resetPassword } = use(AuthContext);
  const location = useLocation();
  const emailFormLogin = location.state?.email;
  const [email, setEmail] = useState(emailFormLogin);

  const handleResetPassword = () => {
    resetPassword(email)
      .then(() => {
        window.location.href = "https://mail.google.com";
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
              Forgot Password
            </h2>
            <div className="w-xs mx-auto">
              <hr className="text-gray-200 py-3" />
            </div>
            <div>
              {/* email */}
              <label className="label font-semibold">Email</label>
              <input
                name="email"
                type="email"
                value={email}
                className="input w-full border-base-100 border-1 mb-8 bg-white"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                required
              />

                <button
                  onClick={handleResetPassword}
                  type="submit"
                  className="btn btn-secondary w-full"
                >
                  <RotateCcwKey
                    size={20}
                    strokeWidth={2.25}
                    absoluteStrokeWidth
                  />{" "}
                  Reset Password
                </button>
            </div>
          </div>
        </div>
      </div>{" "}
      Login
    </div>
  );
};

export default ForgotPassword;
