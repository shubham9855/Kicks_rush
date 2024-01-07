import "../navbar/navbar.css";
import { Link } from "react-router-dom";
import cart from "../../images/cart_image.png";
import search from "../../images/search_image.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/action/loginaction";

export const Navbar = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.loginreducer.islogin);

  if (islogin) {
    return (
      <>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" className="logo-icon">
              kicks_rush
            </Link>
          </div>

          <div className="navbar-middle">
            <Link to="/sneaker" className="sneaker-icon">
              Sneakers
            </Link>
            <Link to="/favorite" className="fav-icon">
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
            <Link
              to="/login"
              className="login-icon"
              onClick={() => dispatch(logout())}
            >
              Logout
            </Link>
            <Link to="/cart" className="image-icon">
              <img src={cart} className="cart-image"></img>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" className="logo-icon">
              kicks_rush
            </Link>
          </div>

          <div className="navbar-middle">
            <Link to="/sneaker" className="sneaker-icon">
              Sneakers
            </Link>
            <Link to="/favorite" className="fav-icon">
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
              login
            </Link>
            <Link to="/cart" className="image-icon">
              <img src={cart} className="cart-image"></img>
            </Link>
          </div>
        </div>
      </>
    );
  }
};
