import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import stock1 from '../assets/stock1.jpg';
import stock2 from '../assets/stock2.jpg';
import kohler from '../assets/kohler.png';
import moen from '../assets/moen.png';
import symmons from '../assets/symmons.png';
import elkay from '../assets/elkay.png';
import texture from '../assets/texture.png';
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
        </div>
        <div id="brand-logos">
            <div className="content-frame">
                <img src={kohler} />
                <img src={moen} />
                <img src={symmons} />
                <img src={elkay} />
            </div>
        </div>
        <div id="cards">
        </div>
      </div>
    );
  }
}

export default Main;