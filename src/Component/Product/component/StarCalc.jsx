import React from "react";
import { FaStar } from "react-icons/fa6";

const StarCalc = ({ rating }) => {
  return (
    <div className=" flex gap-0.5">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          className={` ${index < rating ? "text-orange-400" : "text-gray-400"}`}
        />
      ))}
    </div>
  );
};

export default StarCalc;
