import "../sneakers/Sneaker.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSneakers, getSneakers } from "../../redux/action/sneakeraction";
import { addtocart } from "../../redux/action/cartaction";
import favIcon from "../../images/like_image.png";
import { addtofav } from "../../redux/action/favaction";

export const Sneaker = ({ find }) => {
  console.log("find", { find });
  const [shoeSize, setShoeSize] = useState("UK 6");

  const dispatch = useDispatch();
  const products = useSelector((state) => state.Sneakerreducer.product);
  const search_bar = useSelector(
    (state) => state.Sneakerreducer.searched_sneaker
  );
  var filterProducts = search_bar;
  console.log("products", products);
  console.log("searchbar", search_bar);
  useEffect(() => {
    console.log("action dispatched");
    dispatch(getSneakers());
    // setTimeout(() => {
    //   dispatch(clearSneakers());
    // }, 2000);
  });

  const cartAddition = (item) => {
    const newItem = { ...item, size: shoeSize, qty: 1 };
    dispatch(addtocart(newItem));
    setShoeSize("UK 6");
  };

  return (
    <>
      <div className="parent-main">
        {products
          .filter((obj) => {
            if (filterProducts == "") {
              console.log("inside if block");
              return obj;
            } else {
              return obj.name
                .toLowerCase()
                .includes(filterProducts.toLowerCase());
            }
          })
          .map((item) => {
            return (
              <div className="main-sneaker" key={item.id}>
                <div className="img-section">
                  <img className="sneaker-img" src={item.imageURL}></img>
                  <div className="favor-icon">
                    <img
                      className="favor-img"
                      src={favIcon}
                      onClick={() => {
                        dispatch(addtofav(item));
                      }}
                    ></img>
                  </div>
                </div>

                <div className="sneaker-details">
                  <div className="info">
                    <div className="shoe-name">{item.name}</div>
                    <div className="brand">{item.brand}</div>
                    <div className="mrp-size">
                      <div className="mrp">MRP. {item.price}</div>
                      <div className="shubham">
                        <select
                          className="sneaker-size"
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

                  <div className="add-to-cart">
                    <button
                      className="add-button"
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
