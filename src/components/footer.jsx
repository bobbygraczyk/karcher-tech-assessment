import React, { Component } from "react";
import circle_background from "../assets/circle_pattern.png";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/** Contact Banner */}
        <div id="footer-banner">
          <div className="content-frame">
            <h2>QUESTIONS OR CONCERNS? JUST ASK US > </h2>
          </div>
        </div>
        <div className="content-frame">
          {/** Tagline */}
          <div id="tag">
            Cleveland Plumbing Supply, ©2012 All rights reserved
          </div>
          {/** Links */}
          <div id="manufacturer-links">
            <b>MANUFACTURERS</b>
            <table>
              <tr>
                <td>
                  <small>Altmans Products</small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>Elkay</small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>Franz Viegener</small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>Gerber Plumbing</small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>Grohe</small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>Kohler</small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>
                    <a href="">View All</a>
                  </small>
                </td>
              </tr>
            </table>
          </div>
          <div id="company-links">
            <b>OUR COMPANY</b>
            <table>
              <tr>
                <td>
                  <small>About Us</small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>Contact Us</small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>News</small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>Locations</small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>Directions</small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>Sitemap</small>
                </td>
              </tr>
              <tr>
                <td>
                  <small>Privacy Policy</small>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
