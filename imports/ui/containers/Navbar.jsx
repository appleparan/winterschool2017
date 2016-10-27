import React, { Component } from 'react';
import { render } from 'react-dom';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { IndexLink, Link } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

// For IndexLink & LinkContainer
// https://themeteorchef.com/snippets/react-router-basics/#tmc-setting-up-our-routes
export const NavbarLayout = () => (
  <Navbar fixedTop>
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
        <LinkContainer to="/program">
          <NavItem title="Program" eventKey="1">Program</NavItem>
        </LinkContainer>
        <LinkContainer to="/schedule">
          <NavItem title="Schedule" eventKey="2">Schedule</NavItem>
        </LinkContainer>
        <LinkContainer to="/venue">
          <NavItem title="Venue" eventKey="3">Venue</NavItem>
        </LinkContainer>
        <LinkContainer to="/register">
          <Button  title="Register" eventKey="4" bsStyle="primary" className="navbar-btn"> Register Now </Button>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

)
