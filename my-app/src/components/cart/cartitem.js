import { decqty, deletefromcart, incqty } from "../../redux/action/cartaction";
import "./cart.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import deleteimg from "../../images/delete_image.png";
import { useEffect, useState } from "react";

export const CartItem = ({ item }) => {
  console.log("item", item);
  const dispatch = useDispatch();

  return (
    <div className="bag-content" key={item?.id}>
      <div className="cart-im">
        <img className="product-img" src={item?.imageURL}></img>
      </div>
      <div className="product-detail">
        <div className="product-info">
          <div className="product-name">{item?.name}</div>
          <div className="product-brand">{item?.brand}</div>
          <div className="cart-size"> Size : {item?.size}</div>
          <div className="quantity">
            <div>Quantity</div>

            <div className="inc-button">
              <div className="dec" onClick={() => dispatch(decqty(item))}>
                -
              </div>
              <div id="demo" className="qty-value">
                {item?.qty}
              </div>
              <div className="inc" onClick={() => dispatch(incqty(item))}>
                +
              </div>
            </div>
          </div>
        </div>
        <img
          className="del-img"
          src={deleteimg}
          onClick={() => dispatch(deletefromcart(item?.id))}
        ></img>
      </div>
      <div className="price">MRP: {item?.price} $</div>
    </div>
  );
};
