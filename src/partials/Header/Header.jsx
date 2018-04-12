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
import avatar from "../../assets/img/me_v3.jpg";
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
        <Navbar color="primary" dark expand="md">
          <NavbarBrand tag={Link} to="/">
            <h5 className="mb-0">
              <img
                className="rounded-circle"
                style={{ width: 32, height: 32 }}
                src={avatar}
                alt="My avatar"
              />
            </h5>
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
                <NavLink
                  tag={RRNavLink}
                  to="https://medium.com/@nicholaskajoh"
                  target="_blank"
                >
                  Blog
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  to="/projects"
                  activeClassName="active"
                >
                  Projects
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  to="/speaking"
                  activeClassName="active"
                >
                  Speaking
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
