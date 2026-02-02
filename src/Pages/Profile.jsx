import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import loginGif from "../../assets/login.gif";
// import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Profile = () => {
  const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] =
    useState(false);
  const { user, updateUser, setUser } = use(AuthContext);
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <img src={loginGif} alt="login" className="w-96 h-96" />
      </div>
    );
  }

  const handleUpdateUserInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    // console.log(name, photo, "btn clicked");
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        // ui update
        setUser({ ...user, displayName: name, photoURL: photo });
        setIsUpdateProfileModalOpen(false);
        toast.success("Profile Update Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Update Failed!!");
      });
  };

  return (
    <div className="bg-[#f4f2ef]">
      <div className="p-2 md:p-8 space-y-8 min-h-screen w-full">
        <h2 className="text-xl font-bold text-[#001f3f] pt-8 md:pt-0">
          My Profile
        </h2>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <img
                src={user.photoURL}
                alt=""
                className="border-2 border-sky-900"
              />

              <div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {user.displayName}
                </h3>
                <p className="text-slate-500 text-sm">{user.email}</p>
              </div>
            </div>

            {/* update profile */}
            <div>
              <button
                onClick={() => setIsUpdateProfileModalOpen(true)}
                className="btn btn-primary"
              >
                Update Profile
              </button>
            </div>
          </div>

          {isUpdateProfileModalOpen && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white px-6 py-10 rounded-lg min-w-sm relative text-black">
                <button
                  onClick={() => setIsUpdateProfileModalOpen(false)}
                  className="absolute top-5 right-6 cursor-pointer"
                >
                  ✕
                </button>

                <form onSubmit={handleUpdateUserInfo}>
                  <div>
                    <h2 className="text-lg font-bold mb-8">
                      Update Your Profile
                    </h2>

                    {/* Update Profile Form */}
                    {/* name */}
                    <label className="label font-semibold">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="input w-full border-base-100 border-1 bg-white mb-3"
                      placeholder="Enter your name"
                      required
                    />
                    {/* photo url */}
                    <label className="label font-semibold">Photo URL</label>
                    <input
                      name="photo"
                      type="text"
                      className="input w-full border-base-100 border-1 bg-white mb-8"
                      placeholder="Enter your photo url"
                      required
                    />

                    <button type="submit" className="btn btn-primary w-full">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
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
