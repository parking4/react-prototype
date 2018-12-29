import React, { Component } from "react";

import torontoImage from "../assets/images/cities/toronto.jpg";
import vancouverImage from "../assets/images/cities/vancouver.jpg";
import montrealImage from "../assets/images/cities/montreal.jpg";

class TrendingCities extends Component {
  render() {
    return (
      <section class="popular-deals section bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-title">
                <h2>Trending Cities</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-lg-4">
              <div class="product-item bg-light">
                <div class="card">
                  <div class="thumb-content">
                    <a href="">
                      <img
                        class="card-img-top img-fluid"
                        src={torontoImage}
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="">Toronto</a>
                    </h4>
                    <p class="card-text">
                      Underground parking from $12.00 per day
                    </p>
                    <div class="product-ratings">
                      <ul class="list-inline">
                        <li class="list-inline-item selected">
                          <i class="fa fa-star" />
                        </li>
                        <li class="list-inline-item selected">
                          <i class="fa fa-star" />
                        </li>
                        <li class="list-inline-item selected">
                          <i class="fa fa-star" />
                        </li>
                        <li class="list-inline-item selected">
                          <i class="fa fa-star" />
                        </li>
                        <li class="list-inline-item">
                          <i class="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-4">
              <div class="product-item bg-light">
                <div class="card">
                  <div class="thumb-content">
                    <a href="">
                      <img
                        class="card-img-top img-fluid"
                        src={vancouverImage}
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="">Vancouver</a>
                    </h4>
                    <p class="card-text">Street parking from $3.00 an hour</p>
                    <div class="product-ratings">
                      <ul class="list-inline">
                        <li class="list-inline-item selected">
                          <i class="fa fa-star" />
                        </li>
                        <li class="list-inline-item selected">
                          <i class="fa fa-star" />
                        </li>
                        <li class="list-inline-item selected">
                          <i class="fa fa-star" />
                        </li>
                        <li class="list-inline-item selected">
                          <i class="fa fa-star" />
                        </li>
                        <li class="list-inline-item">
                          <i class="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-4">
              <div class="product-item bg-light">
                <div class="card">
                  <div class="thumb-content">
                    <a href="">
                      <img
                        class="card-img-top img-fluid"
                        src={montrealImage}
                        style={{height:225}}
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="">Montreal</a>
                    </h4>
                    <p class="card-text">Street parking from $10.00 per day</p>
                    <div class="product-ratings">
                      <ul class="list-inline">
                        <li class="list-inline-item selected">
                          <i class="fa fa-star" />
                        </li>
                        <li class="list-inline-item selected">
                          <i class="fa fa-star" />
                        </li>
                        <li class="list-inline-item selected">
                          <i class="fa fa-star" />
                        </li>
                        <li class="list-inline-item selected">
                          <i class="fa fa-star" />
                        </li>
                        <li class="list-inline-item">
                          <i class="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TrendingCities;
