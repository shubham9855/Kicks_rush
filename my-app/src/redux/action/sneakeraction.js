import { Product } from "../../Dataset";

console.log("product in action", Product);
export const getSneakers = () => ({
  type: "GET_SNEAKERS",
  payload: Product,
});
