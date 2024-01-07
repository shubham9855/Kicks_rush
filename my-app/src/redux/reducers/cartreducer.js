const initialState = {
  cart_product: [],
};

export const cartreducer = (state = initialState, action) => {
  console.log("inside cart reducer", action.type, action.payload);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart_product: [...state.cart_product, action.payload],
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cart_product: state.cart_product.filter(
          (item) => item.id != action.payload
        ),
      };

    case "INC_CART_QTY":
      const item = state.cart_product.filter(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        cart_product: [...state.cart_product, { ...item, qty: item.qty++ }],
      };

    case "DEC_CART_QTY":
      return {};

    default:
      return state;
  }
};
