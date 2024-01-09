const initialState = {
  searched_sneaker: "",
  product: [],
};

export const Sneakerreducer = (state = initialState, action) => {
  console.log("insided reducer", action.type, action.payload);
  switch (action.type) {
    case "GET_SNEAKERS":
      return { ...state, product: action.payload };
    case "SEARCH_SNEAKERS":
      console.log("seach reducer", action.payload);
      return {
        ...state,
        searched_sneaker: action.payload,
      };
    default:
      return state;
  }
};
