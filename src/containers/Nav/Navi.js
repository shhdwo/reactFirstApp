// @flow

import React, { Component } from 'react';
import { NavbarBrand, Navbar, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './Navi.css';
import logo from '../../assets/logo.svg';

type State = {
  isOpen: boolean
}

class Navi extends Component<{}, State> {

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <header className="App-header">
        <Navbar dark expand="md">
          <NavbarBrand className="mr-auto"><img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/youtube-search">Search YT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Navi;
