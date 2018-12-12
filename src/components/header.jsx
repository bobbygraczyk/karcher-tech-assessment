import React, { Component } from "react";
import logo from "../assets/logo.png";
import circle_background from "../assets/circle_pattern.png";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        {/** Top Bar */}
        <div id="top-bar">
          <div className="content-frame">
            <h4 className="float-left">
              Plumbing and Heating in Northeast Ohio Since 1932
            </h4>
            <h3 className="float-right">1.800.331.1078</h3>
          </div>
        </div>
        <div id="nav-container">
          <div className="content-frame">
            <img src={logo} />
            {/** Quick Links */}
            <div id="quick-links">
              <button>ABOUT US</button>//
              <button>CONTACT US</button>//
              <button>NEWS</button>
            </div>
            {/** Search */}
            <div id="search">
              <input type="text" value="Keyword" />
              <button>SEARCH</button>
              <div id="chat-triangle-inner" />
              <div id="chat-triangle-outer" />
            </div>
            {/** Page Links */}
            <div id="pages">
              <button>KITCHEN</button>
              <button>BATH</button>
              <button>CLEVELAND SHOWROOM</button>
              <button>MANUFACTURERS</button>
            </div>
          </div>
        </div>
        <span id="bottom-border" />
      </header>
    );
  }
}

export default Header;
