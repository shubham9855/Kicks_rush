import { combineReducers } from "redux";
import { Sneakerreducer } from "./reducers/sneakerreducer";
import { cartreducer } from "./reducers/cartreducer";
import { loginreducer } from "./reducers/loginreducer";
import { favreducer } from "./reducers/favreducer";

const rootReducer = combineReducers({
  Sneakerreducer,
  cartreducer,
  loginreducer,
  favreducer,
});

export default rootReducer;
