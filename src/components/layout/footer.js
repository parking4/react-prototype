import React, { Component } from "react";

import phoneImage from "../../assets/images/footer/phone-icon.png"

class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer section section-sm">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-7 offset-md-1 offset-lg-0">
                <div class="block about">
                  <h1>PARK 4</h1>

                  <p class="alt-color">
                    Join the thousands who park and rent from each other
                    everyday in local communities around the world
                  </p>
                </div>
              </div>

              <div class="col-lg-3 offset-lg-2 col-md-5">
                <div class="block">
                  <h4>Site Pages</h4>
                  <ul>
                    <li>
                      <a href="#">Boston</a>
                    </li>
                    <li>
                      <a href="#">How It works</a>
                    </li>
                    <li>
                      <a href="#">Deals &amp; Coupons</a>
                    </li>
                    <li>
                      <a href="#">Articles &amp; Tips</a>
                    </li>
                    <li>
                      <a href="#">Terms of Services</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-4 col-md-7">
                <div class="block-2 app-promotion">
                  <a href="">
                    <img src={phoneImage} alt="mobile-icon" />
                  </a>
                  <p>Get the PARK 4 Mobile App and save more on parking.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <footer class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-12">
                <div class="copyright">
                  <p>Copyright © 2018. All Rights Reserved</p>
                </div>
              </div>
              <div class="col-sm-6 col-12">
                <ul class="social-media-icons text-right">
                  <li>
                    <a class="fa fa-facebook" href="" />
                  </li>
                  <li>
                    <a class="fa fa-twitter" href="" />
                  </li>
                  <li>
                    <a class="fa fa-pinterest-p" href="" />
                  </li>
                  <li>
                    <a class="fa fa-vimeo" href="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="top-to">
            <a id="top" class="" href="">
              <i class="fa fa-angle-up" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
