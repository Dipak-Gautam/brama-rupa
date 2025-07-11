import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const AddToCart = ({ cartBoolean, ...props }) => {
  return (
    <div
      {...props}
      className={`flex  ${
        cartBoolean ? "bg-gray-500" : "bg-orange-500"
      } p-1 px-3 gap-1 text-white font-medium rounded-md items-center justify-center cursor-pointer`}
    >
      <MdOutlineShoppingCart className="text-xl" />
      <div className="w-24 text-center text-sm">
        {cartBoolean ? "Added to cart " : "Add to Cart"}
      </div>
    </div>
  );
};

export default AddToCart;
