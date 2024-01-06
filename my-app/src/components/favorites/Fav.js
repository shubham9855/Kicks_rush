import "./fav.css";
export const Favorite = () => {
  return (
    <div className="home-main">
      <div className="first-component">
        <div className="details">
          <div className="img-in">
            <div className="info">
              <div className="shoe">Nike Lebron 17</div>
              <div className="shoe-info">Nike</div>
            </div>
            <div className="stars">4.7 stars</div>
          </div>
          <div className="prod-detail">
            <div className="prod-size">
              <div>Size</div>
              <select className="prod-size">
                <option>1</option>
              </select>
            </div>
            <div className="price">
              <button className="cart-button">Add to bag</button>
              <div className="range">MRP. 230</div>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img
            className="main-img"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};
