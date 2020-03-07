import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col">
              <h4>SMDMACHINERY</h4>
              <ul className="list-unstyled">
                <li>Novi Beograd</li>
                <li>Blok 61</li>
                <li>333-333-333</li>
                <li></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="index.html">Lorem ipsum</a>
                </li>
                <li>
                  <a href="index.html">Lorem ipsum</a>
                </li>
                <li>
                  <a href="index.html">Lorem ipsum</a>
                </li>
                <li>
                  <a href="index.html">Lorem ipsum</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="index.html">Lorem ipsum</a>
                </li>
                <li>
                  <a href="index.html">Lorem ipsum</a>
                </li>
                <li>
                  <a href="index.html">Lorem ipsum</a>
                </li>
                <li>
                  <a href="index.html">Lorem ipsum</a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="index.html">Lorem ipsum</a>
                </li>
                <li>
                  <a href="index.html">Lorem ipsum</a>
                </li>
                <li>
                  <a href="index.html">Lorem ipsum</a>
                </li>
                <li>
                  <a href="index.html">Lorem ipsum</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} SMDMACHINERY - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
      </div>
  );
}
export default Footer;

