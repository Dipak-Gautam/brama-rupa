const addToCart = (productData) => {
  let localData = localStorage.getItem("cart1");

  if (localData == null) {
    let tempArray = [];
    tempArray.push(productData);
    localStorage.setItem("cart1", JSON.stringify(tempArray));
  } else {
    let tempArray = JSON.parse(localData);
    tempArray.push(productData);
    localStorage.setItem("cart1", JSON.stringify(tempArray));
  }
};

export default addToCart;

// productData.quantity = 1;

// console.log("product data", productData);
