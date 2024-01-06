import "../sneakers/Sneaker.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSneakers } from "../../redux/action/sneakeraction";
import { addtocart } from "../../redux/action/cartaction";

export const Sneaker = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Sneakerreducer.product);
  console.log("products", products);

  useEffect(() => {
    console.log("action dispatched");
    dispatch(getSneakers());
  }, []);

  return (
    <>
      <div className="parent-main">
        {products.map((item) => {
          return (
            <div className="main-sneaker" key={item.id}>
              <div className="img-section">
                <img className="sneaker-img" src={item.imageURL}></img>
              </div>

              <div className="sneaker-details">
                <div className="info">
                  <div className="shoe-name">{item.name}</div>
                  <div className="brand">{item.brand}</div>
                  <div className="mrp">MRP. {item.price}</div>
                </div>

                <div className="add-to-cart">
                  <button
                    className="add-button"
                    onClick={() => {
                      dispatch(addtocart(item));
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
