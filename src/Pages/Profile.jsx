import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import loginGif from "../../assets/login.gif";
import { User } from "lucide-react";

const Profile = () => {
  const { user } = use(AuthContext);
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <img src={loginGif} alt="login" className="w-96 h-96" />
      </div>
    );
  }

  return (
    <div className="bg-[#f4f2ef]">
      <div className="p-8 space-y-8 min-h-screen w-full">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-[#001f3f]">My Profile</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={user.photoURL} alt="" className="border-2 border-sky-900"/>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {user.displayName}
                </h3>
                <p className="text-slate-500 text-sm">{user.email}</p>
              </div>
            </div>
            {/* update profile */}
            <div className="mt-6 flex gap-2">
              <button className="btn btn-primary">Update Profile</button>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-4">
          {/* Admin Name */}
          <div className="space-y-2">
            <label className="text-lg font-bold text-[#001f3f]">
              User Name
            </label>
            <br />
            <input
              value={user.displayName}
              className="w-full border border-slate-400 rounded-md mt-1 px-4 py-2 text-slate-600 text-base focus-visible:ring-[#003f5c]"
              readOnly
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-lg font-bold text-[#001f3f]">Email</label>
            <br />
            <input
              value={user.email}
              className="w-full border border-slate-400 rounded-md mt-1 px-4 py-2 text-slate-600 text-base focus-visible:ring-[#003f5c]"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
