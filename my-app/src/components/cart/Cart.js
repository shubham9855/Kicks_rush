import "./cart.css";
import { Link } from "react-router-dom";
import deleteimg from "../../images/delete_image.png";
import { useDispatch, useSelector } from "react-redux";
import { deletefromcart } from "../../redux/action/cartaction";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartProd = useSelector((state) => state.cartreducer.cart_product);
  console.log("cartProd", cartProd);
  return (
    <div className="cart-main">
      <div className="bag">
        <div className="bag-heading">Bag</div>
        {cartProd.map((item) => {
          return (
            <div className="bag-content" key={item.id}>
              <div className="cart-im">
                <img className="product-img" src={item.imageURL}></img>
              </div>
              <div className="product-detail">
                <div className="product-info">
                  <div className="product-name">{item.name}</div>
                  <div className="product-brand">{item.brand}</div>
                  <div className="cart-size"> Size 7</div>
                  <div className="quantity">
                    <div>Quantity</div>
                    <div className="inc-button">
                      <div className="dec">-</div>
                      <div className="qty-value">2</div>
                      <div className="inc">+</div>
                    </div>
                  </div>
                </div>
                <img
                  className="del-img"
                  src={deleteimg}
                  onClick={() => dispatch(deletefromcart(item.id))}
                ></img>
              </div>
              <div className="price">MRP: {item.price}</div>
            </div>
          );
        })}
      </div>
      <div className="summary">
        <div className="summary-heading">Summary</div>
        <div className="summary-content">
          <div className="subtotal">
            <div>Subtotal</div>
            <div>8000</div>
          </div>
          <div className="tax">
            <div>Tax & Delivery</div>
            <div>1250</div>
          </div>
          <div className="total">
            <div>Total</div>
            <div>10000</div>
          </div>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};
