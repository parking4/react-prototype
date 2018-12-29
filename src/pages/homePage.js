import React, { Component } from "react";
import HeroArea from "../components/heroArea";
import TrendingCities from "../components/trendingCities";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeroArea />
        <TrendingCities />
      </div>
    );
  }
}

export default HomePage;
