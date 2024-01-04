import { Product } from "../../Dataset";
import "../sneakers/Sneaker.css";
export const Sneaker = () => {
  return (
    <>
      <div className="parent-main">
        {Product.map((item) => {
          return (
            <div className="main-sneaker">
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
                  <button className="add-button">Add to Bag</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
