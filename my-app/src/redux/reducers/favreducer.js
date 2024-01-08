const initialState = {
  fav_shoes: [],
};

export const favreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return { ...state, fav_shoes: [...state.fav_shoes, action.payload] };
    case "REMOVE_FROM_FAV":
      console.log("remove fav and id", action.payload);
      return {
        ...state,
        fav_shoes: state.fav_shoes.filter((obj) => obj.id != action.payload),
      };
    default:
      return state;
  }
};
