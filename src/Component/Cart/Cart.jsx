import React from "react";
import NavBar from "../NavBar/NavBar";

const Cart = () => {
  let data = localStorage.getItem("cart1");
  console.log("data from cart", data);
  return (
    <div className="p-2 px-5">
      <NavBar />
      hello from cart
    </div>
  );
};

export default Cart;
