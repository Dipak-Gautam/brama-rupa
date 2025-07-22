import React from "react";
import addQuantity from "../../LocalStorage/addQuantity";
import subQuantity from "../../LocalStorage/subQuantity";

const Quantity = ({ data, setCartData }) => {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <div
        className=" rounded-md bg-red-500 text-white font-bold w-6 h-6 md:w-8 md:h-8 flex justify-center items-center text-sm md:text-lg cursor-pointer"
        onClick={() => subQuantity(data, setCartData)}
      >
        -
      </div>
      <div className="text-orange-500 text-sm md:text-lg font-bold">
        {data.quantity}
      </div>
      <div
        className=" rounded-md bg-green-500 text-white font-bold w-6 h-6 md:w-8 md:h-8 flex justify-center items-center text-sm md:text-lg cursor-pointer"
        onClick={() => addQuantity(data, setCartData)}
      >
        +
      </div>
    </div>
  );
};

export default Quantity;
