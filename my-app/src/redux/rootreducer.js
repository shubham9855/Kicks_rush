import { combineReducers } from "redux";
import { Sneakerreducer } from "./reducers/sneakerreducer";
import { cartreducer } from "./reducers/cartreducer";
import { loginreducer } from "./reducers/loginreducer";

const rootReducer = combineReducers({
  Sneakerreducer,
  cartreducer,
  loginreducer,
});

export default rootReducer;
