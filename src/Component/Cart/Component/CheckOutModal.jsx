import React from "react";
import totalAmount from "../../CoustomFunction/totalAmount";

const CheckOutModal = ({ visible, setVisible, cartData }) => {
  return (
    <div
      className={`${
        visible ? "flex" : "hidden"
      } fixed inset-0 backdrop-blur-sm justify-center items-center`}
      onClick={() => setVisible(false)}
    >
      <div className="w-96 max-h-[80vh] p-5 rounded-md border border-gray-400 bg-white overflow-auto flex flex-col shadow-xl shadow-black/50">
        <div className="text-center font-semibold text-xl text-orange-500">
          Checkout
        </div>
        <div>
          <div className="text-lg text-gray-600 font-medium">Items:</div>
          {cartData.map((item) => (
            <div
              className="flex justify-between text-sm text-gray-700"
              key={item.id}
            >
              <div className="flex-1 font-medium">{item.name}</div>
              <div className="w-14">{item.quantity}</div>
              <div className="w-16 text-end">{item.caloriesPerServing}</div>
            </div>
          ))}
          <div className="flex justify-between font-medium text-gray-800">
            <div>Total</div>
            <div className="w-16 text-end">${totalAmount(cartData)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutModal;
