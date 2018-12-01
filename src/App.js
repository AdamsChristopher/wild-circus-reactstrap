import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
      <BrowserRouter className="App">
        <div>
          <HeaderTop />
          <HeaderPhotoBanner />
          <HeaderNav />
          <Switch>
            <Route
              path='/'
              component={Performances}
              exact
            />
            <Route
              path='/prices'
              component={Prices}
              exact
            />
            <Route
              path='/about'
              component={AboutUs}
              exact
            />
            <Route
              path='/contact'
              component={ContactUs}
              exact
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
