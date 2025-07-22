import React, { useEffect, useState } from "react";
import Card from "./component/Card";

const Product = ({ productData }) => {
  return (
    <div className="px-5 py-3 flex flex-wrap gap-6 justify-center">
      {productData.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
};

export default Product;
