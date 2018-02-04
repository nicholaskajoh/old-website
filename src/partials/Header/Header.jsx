import React, { Component } from "react";
import { Link, NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpened: false
    };
  }

  toggleNavbar = () => {
    this.setState({
      isNavOpened: !this.state.isNavOpened
    });
  };

  render() {
    return (
      <div>
        <Navbar color="info" dark expand="md">
          <NavbarBrand tag={Link} to="/">
            Nicholas Kajoh's
          </NavbarBrand>

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse isOpen={this.state.isNavOpened} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={RRNavLink} to="/work" activeClassName="active">
                  Work
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  to="https://medium.com/@nicholaskajoh"
                  target="_blank"
                >
                  Blog-ish
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  to="/open-source"
                  activeClassName="active"
                >
                  Open Source
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  to="/talks-and-workshops"
                  activeClassName="active"
                >
                  Talks and Workshops
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  to="/interests"
                  activeClassName="active"
                >
                  Interests
                </NavLink>
              </NavItem>

              <NavItem>
                <RRNavLink
                  className="btn btn-outline-light"
                  to="http://bit.ly/resume-of-nicholas-v2018"
                  target="_blank"
                >
                  Resumé
                </RRNavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
