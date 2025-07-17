import React from "react";
import StarCalc from "../../Product/component/StarCalc";
import { BsFillTrash3Fill } from "react-icons/bs";
import removeFromCart from "../../LocalStorage/removeFromCart";
import Quantity from "./Quantity";

const CartCard = ({ data, setCartData }) => {
  return (
    <div className=" border border-gray-300 overflow-hidden rounded-md flex hover:border-gray-600 hover:bg-slate-200 hover:shadow-md hover:shadow-black/50 relative">
      <div
        className="h-8 w-8 flex justify-center items-center absolute rounded-full top-1 right-1 border border-gray-500 bg-red-500"
        onClick={() => removeFromCart(data, setCartData)}
      >
        <BsFillTrash3Fill className="text-white text-xl" />
      </div>
      <div>
        <img src={data.image} alt="" className="h-40 w-40" />
      </div>
      <div className="flex p-4 justify-between w-full items-center">
        <div className=" space-y-2">
          <p className="text-gray-800 font-semibold text-2xl">{data.name}</p>
          <p className="text-gray-400 ">{data.tags[0]}</p>
          <Quantity data={data} setCartData={setCartData} />
        </div>
        <div className="space-y-3">
          <div>
            <StarCalc rating={Math.floor(data.rating)} />
          </div>
          <p className="text-2xl font-bold text-orange-600">
            Rs. {data.caloriesPerServing}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
