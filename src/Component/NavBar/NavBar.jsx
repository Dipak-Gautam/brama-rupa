import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center   rounded-md p-1 ">
      <div className="text-3xl font-bold">
        <NavLink to={"/"}>
          <img src="./logo2.jpg" alt="" className="w-24 md:w-32" />
        </NavLink>
      </div>
      <div className="flex items-center gap-3 md:gap-5">
        <div className="flex border-2 border-gray-200 items-center rounded-sm  ">
          <input
            type="text"
            className="outline-none p-1 text-sm w-24 md:w-52 md:text-lg "
            placeholder="search"
          />
          <IoSearch className="mr-2 text-lg" />
        </div>
        <div>
          <NavLink to="/cart">
            <MdOutlineShoppingCart className="text-4xl text-gray-600" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
