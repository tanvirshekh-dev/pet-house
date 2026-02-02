import React from "react";
import tips from "../../public/petcaretips.json";
import { Calendar, CircleArrowRight } from "lucide-react";

const TipsAndCare = () => {
  return (
    <div>
      <h2
        className="text-center text-2xl md:text-3xl mt-28 font-semibold"
        data-aos="zoom-out"
        data-aos-anchor-placement="top-bottom"
      >
        Winter Care{" "}
        <span className="text-pink-500 underline underline-offset-4">
          Tips for Pets
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-6 my-10">
        {/* pet tips and care card */}
        {tips.map((item) => {
          return (
            <div
              key={item.serviceId}
              className="card shadow-sm hover:shadow-lg hover:scale-105 duration-300 transition-transform ease-in-out p-4"
               data-aos="fade-right"
            >
              <figure className="rounded-lg overflow-hidden">
                <img src={item.image} alt="" className="w-full h-52" />
              </figure>
              <div className="flex items-center gap-2 pt-2">
                <Calendar size={16} strokeWidth={3} /> <p>{item.date} </p>
              </div>
              <div className="space-y-3">
                <h2 className="card-title pt-4">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-start ">
                  <p>
                    <span className="text-pink-500 font-bold underline">
                      Tips:
                    </span>{" "}
                    {item.tips}
                  </p>
                </div>
                <button className="btn btn-primary w-42 mb-4">
                  Read More <CircleArrowRight size={20} strokeWidth={3} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TipsAndCare;
