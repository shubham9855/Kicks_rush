import "../navbar/navbar.css";
import { Link } from "react-router-dom";
import cart from "../../images/cart_image.png";
import search from "../../images/search_image.png";

export const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">kicks_rush</div>

        <div className="navbar-middle">
          <Link to="/sneakers" className="sneaker-icon">
            Sneakers
          </Link>
          <Link to="/favorites" className="fav-icon">
            Favorites
          </Link>
          <Link to="/about" className="fav-icon">
            About us
          </Link>
          <div className="search-icon">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            ></input>
            <img src={search} className="search-img"></img>
          </div>
        </div>
        <div className="navbar-mail">
          <Link to="/login" className="login-icon">
            Login
          </Link>
          <img src={cart} className="cart-image"></img>
        </div>
      </div>
    </>
  );
};
