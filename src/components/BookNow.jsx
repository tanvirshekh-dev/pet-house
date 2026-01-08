import { CircleArrowRight } from "lucide-react";
import React from "react";

const BookNow = () => {
  return (
    <div className="bg-[#f4f2ef]">
      <h2 className="text-center text-3xl mt-20 font-semibold pt-16">
        Book{" "}
        <span className="text-pink-500 underline underline-offset-4 ">Now</span>{" "}
      </h2>

      <div className="hero mt-8 pb-20">
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body bg-white rounded-xl">
            <fieldset className="fieldset ">
              <label className="label text-lg font-semibold">Name</label>
              <input
                type="text"
                className="input bg-white border-1 border-base-100 w-full mb-1"
                placeholder="Enter Your Name"
              />
              <label className="label text-lg font-semibold">Email</label>
              <input
                type="email"
                className="input bg-white border-1 border-base-100 w-full mb-3"
                placeholder="Enter Your Email"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-secondary">
                Book Now <CircleArrowRight size={20} strokeWidth={3} />
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
