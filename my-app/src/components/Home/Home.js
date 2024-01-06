import { Product } from "../../Dataset";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sneakers/Sneaker.css";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSneakers } from "../../redux/action/sneakeraction";

export const Home = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    autpPlaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="home">
      <h2>Vertical Mode with Swipe To Slide</h2>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <div className="parent-main">
            <div className="main-sneaker">
              <div className="img-section">
                <img
                  className="sneaker-img"
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg"
                ></img>
              </div>

              <div className="sneaker-details">
                <div className="info">
                  <div className="shoe-name">shubham</div>
                  <div className="brand">nike</div>
                  <div className="mrp">MRP.</div>
                </div>

                <div className="add-to-cart">
                  <button className="add-button">Add to Bag</button>
                </div>
              </div>
            </div>
          </div> */}
            <div style={{ width: 400, backgroundColor: "red", height: 300 }} />
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <div className="parent-main">
            <div className="main-sneaker">
              <div className="img-section">
                <img
                  className="sneaker-img"
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg"
                ></img>
              </div>

              <div className="sneaker-details">
                <div className="info">
                  <div className="shoe-name">shubham</div>
                  <div className="brand">nike</div>
                  <div className="mrp">MRP.</div>
                </div>

                <div className="add-to-cart">
                  <button className="add-button">Add to Bag</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <button
        onClick={() => {
          sliderRef.current.slickNext(); // Call slickNext on the ref
        }}
      >
        Next
      </button>

      {/* Previous button */}
      <button
        onClick={() => {
          sliderRef.current.slickPrev(); // Call slickPrev on the ref
        }}
      >
        Prev
      </button>
    </div>
  );
};
