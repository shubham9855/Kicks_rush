const initialState = {
  cart_product: [],
};

export const cartreducer = (state = initialState, action) => {
  console.log("inside cart reducer", action.type, action.payload);
  switch (action.type) {
    case "ADD_TO_CART":
      let itemExist = false;
      state.cart_product.forEach((obj) => {
        console.log("obj", obj);
        if (obj.id === action.payload.id && obj.size === action.payload.size)
          itemExist = true;
      });
      if (itemExist) {
        // const newItem = { ...item };
        // console.log("new item if exist", newItem);

        state.cart_product.map((obj) => {
          console.log("obj.qty after inc", obj);
          if (obj.id === action.payload.id) {
            obj.qty++;
          }
        });
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cart_product: [...state.cart_product, action.payload],
        };
      }

    // if (state.cart_product.length != 0) {
    //   const shubham = state.cart_product?.map((item) =>
    //     if (
    //       item.id === action.payload.id &&
    //       item.size === action.payload.size
    //     ) {
    //       item.qty++;
    //     }
    //   });
    //   console.log("CART", shubham);
    //   return {
    //     ...state,
    //   };
    // } else {
    //   return {
    //     ...state,
    //     cart_product: [...state.cart_product, action.payload],
    //   };
    // }
    case "DELETE_FROM_CART":
      return {
        ...state,
        cart_product: state.cart_product.filter(
          (item) => item.id != action.payload
        ),
      };

    case "INC_CART_QTY":
      const new_cart = state.cart_product?.map((item) => {
        return item.id === action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : item;
      });

      return {
        ...state,
        cart_product: new_cart,
      };

    case "DEC_CART_QTY":
      const newCart = state.cart_product?.map((item) => {
        return item.id === action.payload.id
          ? { ...item, qty: item.qty - (item.qty > 1 ? 1 : 0) }
          : item;
      });
      return {
        ...state,
        cart_product: newCart,
      };

    default:
      return state;
  }
};
