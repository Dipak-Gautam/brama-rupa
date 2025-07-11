import React from "react";
import StarCalc from "../component/StarCalc";
import { LuDot } from "react-icons/lu";
import AddToCart from "../../Button/AddToCart";
import { IoMdArrowRoundBack } from "react-icons/io";

const ProductModal = ({
  data,
  setShowModal,
  cartBoolean,
  setCartBoolean,
  addItemToCart,
}) => {
  return (
    <div
      className="fixed inset-0 bg-gray-100/70 flex justify-center items-center"
      onClick={() => setShowModal(false)}
    >
      <div
        className=" bg-white rounded-xl w-[65%] h-[60%] overflow-hidden flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[40%] h-full relative">
          <div className="absolute p-1 bg-orange-500 rounded-full top-2 left-2 ">
            <IoMdArrowRoundBack
              color="white"
              onClick={() => setShowModal(false)}
            />
          </div>
          <img src={data.image} className="bg-cover h-full" />
        </div>
        <div className=" flex-1 p-5 flex flex-col  justify-center gap-3 ">
          <div className="flex items-center justify-between ">
            <div className=" font-bold w-[60%] text-2xl text-gray-700">
              {data.name}
            </div>
            <div>
              <StarCalc rating={Math.floor(Number(data.rating))} />
            </div>
          </div>
          <div className="text-sm font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            hic odit recusandae corporis facere libero ullam, magni quos, cum ea
            sequi voluptate dolor in commodi nesciunt numquam placeat minima
            ipsam eum! Temporibus fugit adipisci, officia culpa eius inventore
            dolorum quam.
          </div>
          <div className="overflow-auto flex-1">
            <div className="font-medium text-xl text-gray-700 mb-3 ">
              Ingredients:
            </div>
            <ul type="circle">
              {data.ingredients.map((item) => (
                <div className="flex gap-3 text-sm text-gray-600" key={item}>
                  <LuDot />
                  <li>{item}</li>
                </div>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center ">
            <div className="font-bold text-orange-500 text-2xl">
              $ {data.caloriesPerServing}
            </div>
            <AddToCart
              cartBoolean={cartBoolean}
              onClick={() => {
                setCartBoolean(true), addItemToCart();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
