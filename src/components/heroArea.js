import React, { Component } from 'react';

class HeroArea extends Component {
  render() {
    return (
        <section class="hero-area bg-1 text-center overly">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="content-block">
                <h1>Find parking wherever you're going</h1>
                <p>
                  Join the thousands who park and rent from each other <br />
                  everyday in local communities around the world
                </p>
                <div class="short-popular-category-list text-center">
                  <h2>Flexible Payments</h2>
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href=""> Day by day</a>
                    </li>
                    <li class="list-inline-item">
                      <a href=""> Hourly</a>
                    </li>
                    <li class="list-inline-item">
                      <a href=""> Monthly</a>
                    </li>
                    <li class="list-inline-item">
                      <a href=""> Long-term</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="advance-search">
                <form action="#">
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="block d-flex">
                        <input
                          type="text"
                          class="form-control mb-2 mr-sm-2 mb-sm-0"
                          id="search"
                          placeholder="Search for parking..."
                        />
                        <button class="btn btn-main">SEARCH</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroArea;
