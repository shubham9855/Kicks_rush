import "./cart.css";
import { Link } from "react-router-dom";
import deleteimg from "../../images/delete_image.png";
import { useDispatch, useSelector } from "react-redux";
import { deletefromcart } from "../../redux/action/cartaction";
import { CartItem } from "./cartitem";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartProd = useSelector((state) => state.cartreducer.cart_product);
  console.log("cartProd", cartProd);

  let cartTotal = 0;
  cartProd.map((item) => {
    cartTotal += item.price;
  });
  let taxTotal = Math.floor(0.18 * cartTotal);
  let subTotal = cartTotal + taxTotal;

  return (
    <div className="cart-main">
      <div className="bag">
        <div className="bag-heading">Bag</div>
        {cartProd.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
      <div className="summary">
        <div className="summary-heading">Summary</div>
        <div className="summary-content">
          <div className="subtotal">
            <div>Subtotal</div>
            <div>{cartTotal} $</div>
          </div>
          <div className="tax">
            <div>Tax & Delivery (18% GST)</div>
            <div>{taxTotal} $</div>
          </div>
          <div className="total">
            <div>Total</div>
            <div>{subTotal} $</div>
          </div>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};
