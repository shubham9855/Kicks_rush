export const addtocart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const deletefromcart = (id) => ({
  type: "DELETE_FROM_CART",
  payload: id,
});
