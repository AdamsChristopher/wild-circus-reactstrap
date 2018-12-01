import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

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
                <NavLink>
                  Performances
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  Prices
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
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