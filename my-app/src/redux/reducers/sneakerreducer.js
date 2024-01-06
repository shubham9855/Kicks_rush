const initialState = {
  product: [],
};

export const Sneakerreducer = (state = initialState, action) => {
  console.log("insided reducer", action.type, action.payload);
  switch (action.type) {
    case "GET_SNEAKERS":
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
