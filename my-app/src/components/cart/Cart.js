import "./cart.css";
import { Link } from "react-router-dom";
export const Cart = () => {
  return (
    <div className="cart-main">
      <div className="bag">
        <div className="bag-heading">Bag</div>
        <div className="bag-content">
          <div className="cart-im">
            <img
              className="product-img"
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg"
            ></img>
          </div>
          <div className="product-detail">
            <div className="product-name">Nike full force low</div>
            <div className="product-brand">Nike</div>
            <div className="size"> Size 7</div>
            <div className="quantity">
              <div>Quantity</div>
              <div className="inc-button">
                <div className="dec">-</div>
                <div className="qty-value">2</div>
                <div className="inc">+</div>
              </div>
            </div>
            <button>Delete</button>
          </div>
          <div className="price">MRP: 10000</div>
        </div>
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
