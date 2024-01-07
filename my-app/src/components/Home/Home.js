import { Product } from "../../Dataset";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSneakers } from "../../redux/action/sneakeraction";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../Home/Home.css";

export const Home = () => {
  const dispatch = useDispatch();
  const dataset = useSelector((state) => state.Sneakerreducer.product);
  console.log("products", dataset);

  useEffect(() => {
    console.log(" home action dispatched");
    dispatch(getSneakers());
  }, []);
  let val = Math.floor(Math.random() * 20);
  console.log("random val", val);

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
                    <div className="shoe-info">{dataset[i]?.brand}</div>
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
                    <div className="range">MRP.{dataset[i]?.price}</div>
                  </div>
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
    </div>
  );
};
// };
