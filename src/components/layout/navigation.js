import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <nav class="navbar navbar-expand-lg  navigation">
                <a class="navbar-brand" href="#">
                  <h1>PARK4</h1>
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon" />
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ml-auto mt-10">
                    <li class="nav-item">
                      <a class="nav-link login-button" href="#">
                        Login
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link add-button" href="#">
                        <i class="fa fa-plus-circle" /> Add Listing
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Navigation;
