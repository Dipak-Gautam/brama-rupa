const productDataApi = async (setProductDta) => {
  const request = await fetch("https://dummyjson.com/recipes");
  const response = await request.json();
  if (request.status == 200) {
    setProductDta(response.recipes);
  }
};
export default productDataApi;
