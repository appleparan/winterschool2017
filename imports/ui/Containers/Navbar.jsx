import React, { Component } from 'react';
import { render } from 'react-dom';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { IndexLink, Link } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

// For IndexLink & LinkContainer
// https://themeteorchef.com/snippets/react-router-basics/#tmc-setting-up-our-routes
export const NavbarLayout = () => (
  <Navbar fixedTop className="navbar-winter">
    <Navbar.Header>
      <Navbar.Brand>
        <IndexLink to="/">
          2017 Winter School
        </IndexLink>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavDropdown eventKey="1" title="Program" id="nav-dropdown">
          <LinkContainer to="/program/ct">
            <MenuItem eventKey="1.2">CT</MenuItem>
          </LinkContainer>
          <LinkContainer to="/program/ultrasound">
            <MenuItem eventKey="1.3">Ultrasound</MenuItem>
          </LinkContainer>
          <LinkContainer to="/program/microwave">
            <MenuItem eventKey="1.4">Microwave</MenuItem>
          </LinkContainer>
          <LinkContainer to="/program/imaging">
            <MenuItem eventKey="1.5">Imaging</MenuItem>
          </LinkContainer>
          <LinkContainer to="/program/NIMS">
            <MenuItem eventKey="1.6">NIMS</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/schedule">
          <NavItem title="Schedule" eventKey="2">Schedule</NavItem>
        </LinkContainer>
        <LinkContainer to="/venue">
          <NavItem title="Venue" eventKey="3">Venue</NavItem>
        </LinkContainer>
        <LinkContainer to="/register">
          <NavItem title="Register" eventKey="4">Register</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

)
