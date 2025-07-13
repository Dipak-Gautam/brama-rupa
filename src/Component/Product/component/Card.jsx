import AddToCart from "../../Button/AddToCart";
import StarCalc from "./StarCalc";
import ProductModal from "../Modal/ProductModal";
import { useState } from "react";
import addToCart from "../../LocalStorage/addToCart";

const Card = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [cartBoolean, setCartBoolean] = useState(false);

  const addItemToCart = () => {
    if (!cartBoolean) {
      addToCart(data);
    }
  };

  return (
    <>
      <div
        className="my-2 flex flex-col items-center justify-center border border-gray-400  rounded-lg shadow-md w-72 overflow-hidden gap-1 hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 hover:bg-slate-50"
        onClick={() => setShowModal(true)}
      >
        <div>
          <img src={data.image} alt="" className="h-40 w-72" />
        </div>
        <div className="w-full px-3 py-2 pb-3 flex flex-col gap-1">
          <div className="text-center text-xs text-gray-600 font-medium">
            {data.mealType[0]}
          </div>
          <div className="flex items-center justify-between ">
            <div className=" font-bold w-[60%]">{data.name}</div>
            <div>
              <StarCalc rating={Math.floor(Number(data.rating))} />
            </div>
          </div>
          <div
            className="flex justify-between items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-bold text-orange-500 text-xl">
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
      {showModal && (
        <ProductModal
          data={data}
          setShowModal={setShowModal}
          cartBoolean={cartBoolean}
          setCartBoolean={setCartBoolean}
          addItemToCart={addItemToCart}
        />
      )}
    </>
  );
};

export default Card;
