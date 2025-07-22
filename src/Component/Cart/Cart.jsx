import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import CartCard from "./Component/CartCard";
import totalAmount from "../CoustomFunction/totalAmount";
import OrangeButton from "../Button/OrangeButton";
import CheckOutModal from "./Component/CheckOutModal";

const Cart = () => {
  const [visible, setVisible] = useState(false);
  let data = localStorage.getItem("cart1");
  const [cartData, setCartData] = useState(JSON.parse(data) || []);

  return (
    <div className="p-2 md:px-5 flex flex-col h-[100vh]">
      <NavBar />
      <div className="mx-5  space-y-5 flex-1 overflow-auto">
        {cartData.map((item) => (
          <CartCard data={item} key={item.id} setCartData={setCartData} />
        ))}
      </div>
      <hr className=" my-3 md:my-5" />
      <div className=" mx-2 md:mx-5 flex justify-between items-center p-2 ">
        <OrangeButton title={"Check Out"} onClick={() => setVisible(true)} />
        <div className="flex text-orange-600 font-bold text-lg md:text-2xl gap-2">
          <div>Total Amount :</div>
          <div>${totalAmount(cartData)}</div>
        </div>
      </div>
      <CheckOutModal
        visible={visible}
        setVisible={setVisible}
        cartData={cartData}
      />
    </div>
  );
};

export default Cart;
