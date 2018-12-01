import React, { Component } from 'react';

import HeaderTop from './components/HeaderTop';
import HeaderPhotoBanner from './components/HeaderPhotoBanner';
import HeaderNav from './components/HeaderNav';
import Performances from './components/Performances';
import Prices from './components/Prices';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderTop />
        <HeaderPhotoBanner />
        <HeaderNav />
        <Performances />
        <Prices />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
