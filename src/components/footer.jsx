import React, { Component } from 'react';
import circle_background from '../assets/circle_pattern.png';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div id="footer-banner">
            <div className="content-frame">
                <h2>QUESTIONS OR CONCERNS? JUST ASK US > </h2>
            </div>
        </div>
        <div className="content-frame">
            Cleveland Plumbing Supply
        </div>
      </div>
    );
  }
}

export default Footer;