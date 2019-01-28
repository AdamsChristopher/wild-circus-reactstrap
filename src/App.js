import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import HeaderTop from './components/HeaderTop';
import HeaderPhotoBanner from './components/HeaderPhotoBanner';
import HeaderNav from './components/HeaderNav';
import Performances from './components/Performances';
import Prices from './components/Prices';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div
          id="App"
          className="d-flex flex-column"
        >
          <HeaderTop />
          <HeaderPhotoBanner />
          <HeaderNav />
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={450}
              >
                <Switch location={location}>
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
              </CSSTransition>
            </TransitionGroup>
          )} />
          <Footer />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
