export const addtocart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const deletefromcart = (id) => ({
  type: "DELETE_FROM_CART",
  payload: id,
});

export const incqty = (item) => ({
  type: "INC_CART_QTY",
  payload: item,
});

export const decqty = (item) => ({
  type: "DEC_CART_QTY",
  payload: item,
});
