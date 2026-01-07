import React from "react";
import services from "../../public/petcare.json";
import { CircleArrowRight, DollarSign, Star } from "lucide-react";

const Services = () => {
  return (
    <div>
      <h2 className="text-center text-3xl mt-20 font-semibold">
        Popular{" "}
        <span className="text-pink-500 underline underline-offset-4 ">
          Winter
        </span>{" "}
        Care Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-6 my-10">
        {/* services cards  */}
        {services.map((item) => {
          return (
            <div
              key={item.serviceId}
              className="card shadow-sm hover:scale-105 hover:shadow-lg duration-300 ease-in-out transition-transform px-4 pt-4 pb-6"
            >
              <figure className="rounded-lg overflow-hidden">
                <img src={item.image} alt="" className="w-full" />
              </figure>
              <div className="space-y-3">
                <h2 className="card-title pt-4">{item.serviceName}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-start ">
                  <div className="badge badge-outline bg-[#393d72] text-white py-4">
                    <Star
                      size={16}
                      strokeWidth={2}
                      absoluteStrokeWidth
                      className="text-yellow-400"
                    />
                    {item.rating}{" "}
                  </div>
                  <div className="badge badge-outline bg-[#393d72] text-white py-4">
                    <DollarSign
                      className="text-yellow-500"
                      size={16}
                      strokeWidth={3}
                    />
                    {item.price}
                  </div>
                </div>
                <button className="btn btn-primary w-42 ">
                  View Details <CircleArrowRight size={20} strokeWidth={3} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
