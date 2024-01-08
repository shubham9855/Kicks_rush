import { Product } from "../../Dataset";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSneakers } from "../../redux/action/sneakeraction";
import { Link } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../Home/Home.css";
import { addtocart } from "../../redux/action/cartaction";

export const Home = () => {
  const [shoeSize, setShoeSize] = useState("UK 6");
  const dispatch = useDispatch();
  const dataset = useSelector((state) => state.Sneakerreducer.product);
  console.log("products", dataset);

  useEffect(() => {
    console.log(" home action dispatched");
    dispatch(getSneakers());
  }, [Home]);
  let val = Math.floor(Math.random() * 20);
  console.log("random val", val);

  const cartAddition = (id) => {
    let item = {};
    dataset.map((obj) => {
      if (obj.id === id) item = obj;
    });
    const newItem = { ...item, size: shoeSize, qty: 1 };
    dispatch(addtocart(newItem));
    setShoeSize("UK 6");
  };

  const carouslcomponent = () => {
    const carousal = [];
    for (let i = val; i < val + 4; i++) {
      carousal.push(
        <SwiperSlide>
          <div className="home-main">
            <div className="first-component">
              <div className="details">
                <div className="img-in">
                  <div className="info">
                    <div className="shoe">{dataset[i]?.name}</div>
                    <div className="shoe-info"></div>
                  </div>
                  <div className="stars"></div>
                </div>
              </div>
              <div className="prod-detail">
                <div className="prod-size">
                  <div>Size</div>
                  <select
                    className="select-size"
                    onChange={(e) => {
                      console.log("sizze value", e.target.value);
                      e.preventDefault();
                      setShoeSize(e.target.value);
                    }}
                  >
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>
                <div className="price">
                  <button
                    className="cart-button"
                    onClick={() => {
                      cartAddition(dataset[i]?.id);
                    }}
                  >
                    Add to bag
                  </button>
                  <div className="range">MRP.{dataset[i]?.price} $</div>
                </div>
              </div>
              <div className="img-container">
                <img className="main-img" src={dataset[i]?.imageURL}></img>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    }
    return carousal;
  };
  const carArray = carouslcomponent();
  console.log("car array ", carArray);
  return (
    <div className="home">
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {carArray.map((item) => {
          return item;
        })}
      </Swiper>
      <div className="home-static-info">
        <div className="static-text">FEEL IT TO BELIEVE IT !</div>
        <Link to="/sneaker" className="shop-now-button">
          Shop now
        </Link>
      </div>
    </div>
  );
};
// };
