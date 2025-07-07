import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const AddToCart = ({ ...props }) => {
  return (
    <div
      {...props}
      className="flex bg-orange-500 p-1 px-3 gap-1 text-white font-medium rounded-md items-center"
    >
      <MdOutlineShoppingCart className="text-xl" />
      <div className="">Add to Cart</div>
    </div>
  );
};

export default AddToCart;
