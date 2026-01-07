import React from "react";

const Services = () => {
  return (
    <div>
      <h2 className="text-center text-3xl mt-20 font-semibold">
        We provide Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-10 my-10">
        {/* card 01 */}
        <div className="card shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">4.9</div>
              <div className="badge badge-outline">25</div>
            </div>
            <button className="btn btn-xs sm:btn-sm md:btn-md w-32">Click Me</button>
          </div>
        </div>
        {/* card 02 */}
        <div className="card shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">4.9</div>
              <div className="badge badge-outline">25</div>
            </div>
            <button className="btn btn-xs sm:btn-sm md:btn-md w-32">Click Me</button>
          </div>
        </div>
        {/* card 03 */}
        <div className="card shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">4.9</div>
              <div className="badge badge-outline">25</div>
            </div>
            <button className="btn btn-xs sm:btn-sm md:btn-md w-32">Click Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
