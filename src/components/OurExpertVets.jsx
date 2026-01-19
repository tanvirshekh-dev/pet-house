import React from "react";
import vets01 from "../../assets/vets-01.png";
import vets02 from "../../assets/vets-02.png";
import vets03 from "../../assets/vets-03.png";
import vets04 from "../../assets/vets-04.png";

const OurExpertVets = () => {
  return (
    <div className="bg-[#f4f2ef]">
      <h2
        className="text-center text-3xl mt-28 pt-16 font-semibold"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
      >
        Meet Our{" "}
        <span className="text-pink-500 underline underline-offset-4">
          Expert Vets
        </span>
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-6 pb-20 pt-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        {/* card 01 */}
        <div className="card shadow-md bg-white hover:scale-105 duration-300 transition-transform">
          <figure className="w-40 mx-auto py-6">
            <img
              src={vets01}
              alt="vets"
              className="rounded-full bg-sky-200 p-2"
            />
          </figure>
          <div className="flex flex-col items-center space-y-2 pb-6">
            <h3 className="card-title text-gray-400">Founder</h3>
            <h2 className="text-2xl font-bold text-[#393d72]">
              Rosalina D. William
            </h2>
            <div className="card-actions">
              <img
                className="w-10 cursor-pointer"
                src="../../assets/facebook.png"
                alt=""
              />
              <img
                className="w-10 cursor-pointer"
                src="../../assets/twitter.png"
                alt=""
              />
              <img
                className="w-10 cursor-pointer"
                src="../../assets/instagram.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* card 02 */}
        <div className="card shadow-md bg-white hover:scale-105 duration-300 transition-transform">
          <figure className="w-40 mx-auto py-6">
            <img
              src={vets02}
              alt="vets"
              className="rounded-full bg-sky-200 p-2"
            />
          </figure>
          <div className="flex flex-col items-center space-y-2 pb-6">
            <h3 className="card-title text-gray-400">CEO</h3>
            <h2 className="text-2xl font-bold text-[#393d72]">
              Whatson William
            </h2>
            <div className="card-actions">
              <img
                className="w-10 cursor-pointer"
                src="../../assets/facebook.png"
                alt=""
              />
              <img
                className="w-10 cursor-pointer"
                src="../../assets/twitter.png"
                alt=""
              />
              <img
                className="w-10 cursor-pointer"
                src="../../assets/instagram.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* card 03 */}
        <div className="card shadow-md bg-white hover:scale-105 duration-300 transition-transform">
          <figure className="w-40 mx-auto py-6">
            <img
              src={vets03}
              alt="vets"
              className="rounded-full bg-sky-200 p-2"
            />
          </figure>
          <div className="flex flex-col items-center space-y-2 pb-6">
            <h3 className="card-title text-gray-400">Groomer</h3>
            <h2 className="text-2xl font-bold text-[#393d72]">
              Hilixer Jon William
            </h2>
            <div className="card-actions">
              <img
                className="w-10 cursor-pointer"
                src="../../assets/facebook.png"
                alt=""
              />
              <img
                className="w-10 cursor-pointer"
                src="../../assets/twitter.png"
                alt=""
              />
              <img
                className="w-10 cursor-pointer"
                src="../../assets/instagram.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* card 04 */}
        <div className="card shadow-md bg-white hover:scale-105 duration-300 transition-transform">
          <figure className="w-40 mx-auto py-6">
            <img
              src={vets04}
              alt="vets"
              className="rounded-full bg-sky-200 p-2"
            />
          </figure>
          <div className="flex flex-col items-center space-y-2 pb-6">
            <h3 className="card-title text-gray-400">Groomer</h3>
            <h2 className="text-2xl font-bold text-[#393d72]">
              Miranda H. Halim
            </h2>
            <div className="card-actions">
              <img
                className="w-10 cursor-pointer"
                src="../../assets/facebook.png"
                alt=""
              />
              <img
                className="w-10 cursor-pointer"
                src="../../assets/twitter.png"
                alt=""
              />
              <img
                className="w-10 cursor-pointer"
                src="../../assets/instagram.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertVets;
