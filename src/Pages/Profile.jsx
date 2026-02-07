import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import loginGif from "../../assets/login.gif";
// import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import {
  CalendarIcon,
  MailCheck,
  PawPrint,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import catImg from "../../assets/profile-cat-01.jpg";
import dogImg from "../../assets/profile-dog-02.jpg";

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
      <div
        className="p-2 md:p-6 space-y-8 min-h-screen w-full overflow-hidden"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        {/* Main Card */}
        <div className="bg-white w-full rounded-xl shadow-md border border-gray-100 overflow-hidden">
          {/* Header Section */}
          <div className="p-8 md:p-16 flex flex-col sm:flex-row items-center gap-16 border-b border-gray-50">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-3xl font-bold text-slate-800">
                {user.displayName}
              </h1>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-600 mt-1">
                <PawPrint size={20} className="text-blue-500" />
                <span className="font-medium text-gray-600">{user.email}</span>
              </div>
              <button
                onClick={() => setIsUpdateProfileModalOpen(true)}
                className="btn btn-primary mt-6"
              >
                Update Profile
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:px-16 md:pb-16">
            <hr className="text-gray-300 border-[1.3px] font-bold mb-3 rounded-full" />
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              My Information
            </h2>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Details List */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <UserIcon className="w-5 h-5 text-blue-500" />
                  <p>
                    <span className="font-bold">Name:</span> {user.displayName}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <MailCheck className="w-5 h-5 text-blue-500" />
                  <p>
                    <span className="font-bold">Email:</span> {user.email}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <PhoneIcon className="w-5 h-5 text-blue-500" />
                  <p>
                    <span className="font-bold">Phone:</span> +8801595000000
                  </p>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <CalendarIcon className="w-5 h-5 text-blue-500" />
                  <p>
                    <span className="font-bold">Member Since:</span> Nov 2025
                  </p>
                </div>
              </div>

              {/* Pets */}
              <div className="bg-gray-200 rounded-md p-4">
                <div className="flex gap-4">
                  {/* pet 01 */}
                  <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center w-36">
                    <img
                      src={dogImg}
                      alt="cat image"
                      className="w-24 h-24 rounded-full object-cover mb-2"
                    />
                    <h4 className="font-semibold text-gray-800">Buddy</h4>
                    <p className="text-sm text-gray-500 text-center">
                      White retriever · Age: 4
                    </p>
                  </div>

                  {/* pet 02 */}
                  <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center w-36">
                    <img
                      src={catImg}
                      alt="cat image"
                      className="w-24 h-24 rounded-full object-cover mb-2"
                    />
                    <h4 className="font-semibold text-gray-800">Luna</h4>
                    <p className="text-sm text-gray-500 text-center">
                      Siamese · Age: 2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {isUpdateProfileModalOpen && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-10">
              <div className="bg-white px-6 py-10 rounded-lg w-xs md:w-lg relative text-black">
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
      </div>
    </div>
  );
};

export default Profile;
