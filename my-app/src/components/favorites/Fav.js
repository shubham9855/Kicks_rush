import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../redux/action/cartaction";
import { addtofav, removeformfav } from "../../redux/action/favaction";
import { useState } from "react";
import delIcon from "../../images/delete_image.png";
import "./fav.css";

export const Favorite = () => {
  const [shoeSize, setShoeSize] = useState("UK 6");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.favreducer.fav_shoes);

  const cartAddition = (item) => {
    const newItem = { ...item, size: shoeSize, qty: 1 };
    dispatch(addtocart(newItem));
    setShoeSize("UK 6");
  };

  if (products.length == 0) {
    return (
      <div className="fav-container">
        <div className="fav-message">
          <h2>Your wishlist is empty</h2>
          <p>Add some items to your wishlist to save them for later.</p>
        </div>
      </div>
    );
  } else
    return (
      <>
        <div className="fav-main">
          {products.map((item) => {
            return (
              <div className="main-fav" key={item.id}>
                <div className="fav-img-section">
                  <img className="fav-sneaker-img" src={item.imageURL}></img>
                  <div className="favo-icon">
                    <img
                      className="favo-img"
                      src={delIcon}
                      onClick={() => {
                        console.log("remove action dispathed and id", item.id);
                        dispatch(removeformfav(item.id));
                      }}
                    ></img>
                  </div>
                </div>

                <div className="fav-sneaker-details">
                  <div className="fav-info">
                    <div className="fav-shoe-name">{item.name}</div>
                    <div className="fav-brand">{item.brand}</div>
                    <div className="fav-mrp-size">
                      <div className="fav-mrp">MRP. {item.price}</div>
                      <div className="fav-shubham">
                        <select
                          className="fav-sneaker-size"
                          onChange={(e) => {
                            console.log("sizze value", e.target.value);
                            setShoeSize(e.target.value);
                          }}
                        >
                          <option> UK 6 </option>
                          <option> UK 7 </option>
                          <option> UK 8 </option>
                          <option> UK 9 </option>
                          <option> UK 10 </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="fav-add-to-cart">
                    <button
                      className="fav-add-button"
                      onClick={() => {
                        cartAddition(item);
                      }}
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
};
