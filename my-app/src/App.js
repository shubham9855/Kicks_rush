import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar.js";
import { Footer } from "./components/footer/footer.js";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/sneakers" Component={Sneakers}></Route>
        <Route path="/favorites" Component={Favorites}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/cart" Component={Cart}></Route>
      </Routes> */}
      <Footer></Footer>
    </>
  );
}

export default App;
