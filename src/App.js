import React, { Component } from 'react';

// Layout Components
import Navigation from "./components/layout/navigation";
import Footer from "./components/layout/footer";

// Pages
import HomePage from "./pages/homePage";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
          <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
