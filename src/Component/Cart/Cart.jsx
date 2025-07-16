import React from "react";
import NavBar from "../NavBar/NavBar";
import CartCard from "./Component/CartCard";

const Cart = () => {
  let data = localStorage.getItem("cart1");
  let cartData = JSON.parse(data);

  return (
    <div className="p-2 px-5">
      <NavBar />
      <div className="mx-5  space-y-5">
        {cartData.map((item) => (
          <CartCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
