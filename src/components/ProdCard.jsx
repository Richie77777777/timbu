import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { PiStarFill } from "react-icons/pi";

function ProdCard({
  name,
  price,
  img,
  id,
  ach_percent,
  litre,
  rating,
  category,
}) {
  return (
    <div>
      <div className="bg-brandteal/20 rounded-lg shadow-md p-1">
        <div className="p-4 grid place-content-center">
          <img
            src={img}
            alt={name}
            className=" h-24  md:w-full md:h-60 object-contain rounded-t-lg"
          />
        </div>{" "}
        <div className="p-4 font-serif bg-brandbg rounded-md">
          <h2 className="  font-bold text-brandbrown font-serif">
            {name} | {category} | {ach_percent} | {litre}
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-brandbrown text-sm md:text-xl">{price} NGN</p>
            <div>
              <p className="flex items-end space-x-1">
                {rating} <PiStarFill className="text-yellow-400" />
              </p>

              <button className="bg-none text-brandbrown border border-brandbrown grid place-content-center w-8 h-8 rounded-full mt-2 hover:bg-brandbrown hover:text-white">
                <IoCartOutline className="inline-block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdCard;
