import { CircleArrowRight } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BookNow = () => {
  const [nameError, setNameError] = useState("");
  const handleBooked = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Enter More Then 5 Character");
      return;
    } else {
      setNameError("");
    }
    const email = form.email.value;
    console.log(name, email);

    // react-hot-toast
    toast.success("Successfully Booked Pets!");
    form.reset();
  };

  return (
    <div>
      <h2
        className="text-center text-3xl mt-20 font-semibold pt-8"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
      >
        Book{" "}
        <span className="text-pink-500 underline underline-offset-4 ">
          Now
        </span>{" "}
      </h2>

      <div className="hero mt-8 pb-20">
        <div
          className="card w-full max-w-lg shrink-0 shadow-2xl"
          data-aos="zoom-in-up"
        >
          <form
            onSubmit={handleBooked}
            className="card-body bg-white rounded-xl"
          >
            <fieldset className="fieldset ">
              <label className="label text-lg font-semibold">Name</label>
              <input
                name="name"
                type="text"
                className="input bg-white border-1 border-base-100 w-full mb-1"
                placeholder="Enter Your Name"
                required
              />
              {/* name error */}
              {nameError && (
                <p className="text-red-400 text-xs font-medium pt-2">
                  Must should be more then 5 character
                </p>
              )}
              <label className="label text-lg font-semibold">Email</label>
              <input
                name="email"
                type="email"
                className="input bg-white border-1 border-base-100 w-full mb-3"
                placeholder="Enter Your Email"
                required
              />
              <div className="text-left">
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-secondary">
                Book Now <CircleArrowRight size={20} strokeWidth={3} />
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
