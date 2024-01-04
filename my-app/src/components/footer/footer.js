import "../footer/footer.css";
import insta from "../../images/insta.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";
export const Footer = () => {
  return (
    <>
      <footer className="main">
        <div className="left">
          <div className="column1">
            <div className="heading">FIND A STORE</div>
            <div className="content">BECOME A MEMBER</div>
            <div className="content">Send us Feedback</div>
          </div>
          <div className="column2">
            <div className="heading">GET HELP</div>
            <div className="content">Order Status</div>
            <div className="content">Delivery</div>
            <div className="content">Returns</div>
            <div className="content">Payment Options</div>
            <div className="content">Contact us </div>
          </div>
          <div></div>
        </div>
        <div className="right">
          <img src={insta} className="socials-img"></img>
          <img src={twitter} className="socials-img"></img>
          <img src={facebook} className="socials-img"></img>
        </div>
      </footer>
    </>
  );
};
