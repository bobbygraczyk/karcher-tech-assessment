import React, { Component } from "react";
import Swiper from "react-id-swiper";
import stock1 from "../assets/stock1.jpg";
import stock2 from "../assets/stock2.jpg";
import kohler from "../assets/kohler.png";
import moen from "../assets/moen.png";
import symmons from "../assets/symmons.png";
import elkay from "../assets/elkay.png";
import texture from "../assets/texture.png";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.jpg";
import "../App.css";

class Main extends Component {
  render() {
    //Params for React Swiper
    const params = {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      spaceBetween: 30
    };
    return (
      <div className="main-content">
        {/** Swiper */}
        <div className="swiper-frame">
          <Swiper {...params}>
            <img src={stock1} />
            <img src={stock2} />
          </Swiper>
          {/** Text Overlay */}
          <div id="swiper-text-overlay">
            <h2>
              PLAN THE KITCHEN
              <br />
              OF YOUR DREAMS
            </h2>
            <button>START HERE</button>
          </div>
          {/** Bubble Overlay */}
          <div id="swiper-bubble-overlay">
            <h3>
              JUST ASK.
              <br />
              WE'RE HERE
              <br />
              TO HELP :)
            </h3>
            <input type="text" value="START HERE" />
          </div>
          <div id="bubble-triangle" />
        </div>
        {/** Brand logo bar */}
        <div id="brand-logos">
          <div className="content-frame">
            <img style={{ position: "relative", top: "12px" }} src={kohler} />
            <img src={moen} />
            <img src={symmons} />
            <img style={{ position: "relative", top: "16px" }} src={elkay} />
          </div>
        </div>
        {/** Cards */}
        <div id="card-section">
          <div className="content-frame">
            <div id="card-one">
              <div id="card-one-gradient" />
              <img src={card1} />
              <h3>
                VISIT OUR NEW
                <br />
                SHOWROOM
              </h3>
              <button>COME ON IN</button>
            </div>
            <div id="card-two">
              <div id="card-two-gradient" />
              <h3>
                CREATE THE
                <br />
                PERFECT
                <br />
                KITCHEN
                <br />
                TRIANGLE
              </h3>
              <img src={card2} />
              <button>FIND OUT WHY</button>
            </div>
            <div id="card-three">
              <div id="card-three-gradient" />
              <img src={card3} />
              <h3>
                WE HAVE YOUR
                <br />
                DREAM BATH
              </h3>
              <button>FIND IT HERE</button>
            </div>
            {/** Welcome Text */}
            <div id="welcome-text">
              <h4>Welcome to Cleveland Plumbing Supply</h4>
              <small>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inveveritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspeatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet.
              </small>
              <br />
            </div>
            {/** Showroom Location Links */}
            <div id="showroom-links">
              <h4>Showroom Location:</h4>
              <a href="">Cleveland Showroom</a>
              <br />
              <a href="">Chagrin Falls Showroom</a>
              <br />
              <a href="">Medina Showroom</a>
              <br />
              <a href="">Mentor Showroom</a>
              <br />
              <a href="">Middlefield Showroom</a>
              <br />
              <a href="">North Ridgeville Showroom</a>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
