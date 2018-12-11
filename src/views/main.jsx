import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import stock1 from '../assets/stock1.jpg';
import stock2 from '../assets/stock2.jpg';
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
        <div className="content-frame">
            <Swiper {...params}>
                <img src={stock1} />
                <img src={stock2} />
            </Swiper>
        </div>
      </div>
    );
  }
}

export default Main;