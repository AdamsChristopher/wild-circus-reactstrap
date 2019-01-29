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

import ScrollToTop from './components/scrollToTop/ScrollToTop';
import HeaderTop from './components/header/HeaderTop';
import HeaderPhotoBanner from './components//header/HeaderPhotoBanner';
import HeaderNav from './components/header/HeaderNav';
import Performances from './components/performances/Performances';
import Prices from './components/prices/Prices';
import AboutUs from './components/about/AboutUs';
import ContactUs from './components/contact/ContactUs';
import Footer from './components//footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
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
                      path exact='/'
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
        </ScrollToTop>
      </BrowserRouter >
    );
  }
}

export default App;
