import React, { Component } from 'react';
import Header from './header/header';
import Slider from './slider/slider'
import Home from './home/home';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <Home />
      </div>
    );
  }
}

export default App;
