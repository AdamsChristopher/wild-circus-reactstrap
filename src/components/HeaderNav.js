import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RouterNavLink } from 'react-router-dom';

import '../styles/HeaderNav.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id="Header-Nav">
        <Navbar dark expand="md">
          <NavbarToggler
            onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            navbar
          >
            <Nav
              className="text-center mx-auto"
              navbar
            >
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to='/'
                >
                  Performances
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to='/prices'
                >
                  Prices
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to='/about'
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to='/contact'
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}