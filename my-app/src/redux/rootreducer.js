import { combineReducers } from "redux";
import { Sneakerreducer } from "./reducers/sneakerreducer";
import { cartreducer } from "./reducers/cartreducer";

const rootReducer = combineReducers({
  Sneakerreducer,
  cartreducer,
});

export default rootReducer;
