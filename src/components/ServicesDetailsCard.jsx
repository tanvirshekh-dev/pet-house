import { MoveLeft } from "lucide-react";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { Link } from "react-router";
import BookNow from "./BookNow";

const ServicesDetailsCard = ({ pets }) => {
  const { image, serviceName, category, rating, description } = pets;
  return (
    <div className="bg-[#fbfcfe] overflow-hidden">
      <div className="w-11/12 mx-auto">
        <div>
          <img
            className="rounded-2xl h-[450px] object-cover w-full"
            src={image}
            alt=""
          />
          <div className="space-y-1">
            <h2 className="text-4xl font-bold pt-4">{serviceName}</h2>
            <h3 className="font-medium text-lg">{category}</h3>
            <div className="flex items-center justify-center space-x-1">
              <p className="flex items-center space-x-1">
                <MdOutlinePets className="text-yellow-400" />{" "}
                <h3 className="font-semibold text-lg text-[#996d39]">
                  {rating}{" "}
                </h3>
                <FaStar className="text-yellow-400 ml-2" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />
                <FaStarHalfAlt className="text-yellow-400" />
              </p>
              <p className="ml-6 text-lg ">
                From <span className="font-semibold text-[#996d39]">$50</span>{" "}
                Per Session
              </p>
            </div>

            <div className="text-start bg-[#fefefe] p-4 rounded-xl shadow-md mt-8 mb-12">
              <h3 className="font-semibold text-2xl text-[#243c64] pb-1">
                About The Services
              </h3>
              <hr className="w-10/12 text-gray-400 leading-1 pb-4" />
              <p>{description}</p>
            </div>

            <div className="text-start bg-[#fefefe] p-4 rounded-xl shadow-md">
              <h3 className="pb-1 font-semibold text-2xl text-[#243c64]">
                What's Included
              </h3>
              <hr className="w-10/12 text-gray-400 leading-1 pb-4" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-center">
                  <img
                    src="../../assets/bath.png"
                    alt=""
                    className="w-24 mx-auto"
                  />
                  <p className="text-xl font-semibold text-[#243c64] text-center pt-6">
                    Bath & Shampoo
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="../../assets/hair trimming.png"
                    alt=""
                    className="w-24 mx-auto"
                  />
                  <p className="text-xl font-semibold text-[#243c64] text-center pt-6">
                    Hair Trimming
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="../../assets/Nail Clipping.png"
                    alt=""
                    className="w-24 mx-auto"
                  />
                  <p className="text-xl font-semibold text-[#243c64] text-center pt-6">
                    Nail Clipping
                  </p>
                </div>

                <div className="flex flex-col items-center">
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

        <section>
          <BookNow></BookNow>
        </section>
      </div>
    </div>
  );
};

export default ServicesDetailsCard;
