import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import stock1 from '../assets/stock1.jpg';
import stock2 from '../assets/stock2.jpg';
import kohler from '../assets/kohler.png';
import moen from '../assets/moen.png';
import symmons from '../assets/symmons.png';
import elkay from '../assets/elkay.png';
import texture from '../assets/texture.png';
import card1 from '../assets/card1.jpg';
import '../App.css';

class Main extends Component {
  render() {
    const params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30,
    }
    return (
      <div className="main-content">
        <div className="swiper-frame">
            <Swiper {...params}>
                <img src={stock1} />
                <img src={stock2} />
            </Swiper>
            <div id="swiper-text-overlay">
              <h2>PLAN THE KITCHEN<br />OF YOUR DREAMS</h2>
              <button>START HERE</button>
            </div>
            <div id="swiper-bubble-overlay">
              <h3>JUST ASK.<br />WE'RE HERE<br />TO HELP :)</h3>
              <input type="text" value="START HERE"/>
            </div>
            <div id="bubble-triangle" />
        </div>
        <div id="brand-logos">
            <div className="content-frame">
                <img src={kohler} />
                <img src={moen} />
                <img src={symmons} />
                <img src={elkay} />
            </div>
        </div>
        <div id="card-section">
          <div className="content-frame">
            <div className="card">
              <img src={card1} />
            </div>
            <div className="card">
              <img src={card1} />
            </div>
            <div className="card">
              <img src={card1} />          
            </div>
            <div id="welcome-text">
              <h4>Welcome to Cleveland Plumbing Supply</h4><br />
              <small>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inveveritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspeatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </small>
            </div>
            <div id="showroom-links">
              <h4>Showroom Location:</h4><br />
              <a href="">Cleveland Showroom</a><br />
              <a href="">Chagrin Falls Showroom</a><br />
              <a href="">Medina Showroom</a><br />
              <a href="">Mentor Showroom</a><br />
              <a href="">Middlefield Showroom</a><br />
              <a href="">North Ridgeville Showroom</a><br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;