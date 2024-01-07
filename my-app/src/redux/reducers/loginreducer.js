const initialState = {
  islogin: false,
  user: [],
};

export const loginreducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, islogin: true };

    case "SIGN_UP":
      console.log("inside signup ", state.user);
      return {
        ...state,
        islogin: true,
        user: [...state.user, action.payload],
      };

    case "LOGOUT":
      return {
        ...state,
        islogin: false,
      };
    default:
      return state;
  }
};
