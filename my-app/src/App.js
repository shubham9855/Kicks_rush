import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar.js";
import { Footer } from "./components/footer/footer.js";
import { Home } from "./components/Home/Home.js";
import { Sneaker } from "./components/sneakers/Sneaker.js";
import { Cart } from "./components/cart/Cart.js";
import { Login } from "./components/login/Login.js";
import "../src/index.css";
import "./App.css";
import { Register } from "./components/register/Register.js";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/sneaker" Component={Sneaker}></Route>
        {/* <Route path="/favorites" Component={Favorites}></Route> */}
        <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Register}></Route>
        <Route path="/cart" Component={Cart}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
