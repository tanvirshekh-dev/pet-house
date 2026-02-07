import React, { useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import AOS from "aos";
import BookNow from "./BookNow";

const ServicesDetailsCard = ({ pets }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const { image, serviceName, category, rating, description, price } = pets;

  return (
    <div className="bg-[#fbfcfe] overflow-hidden mt-6 md:mt-2">
      <div className="w-11/12 mx-auto">
        <div>
          <img
            className="rounded-xl h-[600px] object-cover w-full"
            src={image}
            alt=""
            data-aos="fade-up"
          />
          <div className="space-y-1 relative">
            {/* data-aos="zoom-in" */}
            <div  className="bg-black/60 absolute z-10 -top-54 rounded-b-xl w-full text-white pb-6">
              <h2 className="text-4xl font-bold pt-6">{serviceName}</h2>
              <div className="flex items-center justify-center py-2">
                <p className="flex items-center space-x-1">
                  <MdOutlinePets className="text-yellow-400" />{" "}
                  <h3 className="font-semibold text-lg">
                    {rating}{" "}
                  </h3>
                  <FaStar className="text-yellow-400 ml-2" />{" "}
                  <FaStar className="text-yellow-400" />{" "}
                  <FaStar className="text-yellow-400" />{" "}
                  <FaStar className="text-yellow-400" />
                  <FaStarHalfAlt className="text-yellow-400" />
                </p>
                <p className="ml-6 text-lg ">
                  From{" "}
                  <span className="font-semibold">${price}</span>{" "}
                  Per Session
                </p>
              </div>
              <h3 className="font-medium text-lg bg-[#f6339a] rounded-md w-[100px] py-1 inline-block text-center cursor-pointer">{category}</h3>

            </div>

              {/* about the services */}
              <div
                className="text-start bg-[#fefefe] p-4 rounded-xl shadow-md mt-12 mb-12"
                data-aos="fade-right"
              >
                <h3 className="font-semibold text-2xl text-[#243c64] pb-1">
                  About The Services
                </h3>
                <hr className="w-10/12 text-gray-400 leading-1 pb-4" />
                <p>{description}</p>
              </div>

              {/* what's included section */}
              <div
                className="text-start bg-[#fefefe] p-4 rounded-xl shadow-md"
                data-aos="fade-left"
              >
                <h3 className="pb-1 font-semibold text-2xl text-[#243c64]">
                  What's Included
                </h3>
                <hr className="w-10/12 text-gray-400 leading-1 pb-4" />

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-y-6">
                  <div className="flex flex-col items-center p-2">
                    <img
                      src="../../assets/bath.png"
                      alt=""
                      className="w-24 mx-auto"
                    />
                    <p className="text-xl font-semibold text-[#243c64] text-center pt-6">
                      Bath & Shampoo
                    </p>
                  </div>

                  <div className="flex flex-col items-center p-2">
                    <img
                      src="../../assets/hair trimming.png"
                      alt=""
                      className="w-24 mx-auto"
                    />
                    <p className="text-xl font-semibold text-[#243c64] text-center pt-6">
                      Hair Trimming
                    </p>
                  </div>

                  <div className="flex flex-col items-center p-2">
                    <img
                      src="../../assets/Nail Clipping.png"
                      alt=""
                      className="w-24 mx-auto"
                    />
                    <p className="text-xl font-semibold text-[#243c64] text-center pt-6">
                      Nail Clipping
                    </p>
                  </div>

                  <div className="flex flex-col items-center p-2">
                    <img
                      src="../../assets/Ear Cleaning.png"
                      alt=""
                      className="w-24 mx-auto"
                    />
                    <p className="text-xl font-semibold text-[#243c64] text-center pt-6">
                      Ear Cleaning
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* book section */}
      <div className="bg-[#f4f2ef]">
        <BookNow></BookNow>
      </div>

    </div>
  );
};

export default ServicesDetailsCard;
