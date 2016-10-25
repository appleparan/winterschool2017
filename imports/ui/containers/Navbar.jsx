import React, { Component } from 'react';
import { render } from 'react-dom';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

// For IndexLink & LinkContainer
// https://themeteorchef.com/snippets/react-router-basics/#tmc-setting-up-our-routes
export const NavbarLayout = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <LinkContainer to="/">
        <Navbar.Brand>
          2017 Winter School
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavDropdown title="Program" id="navbar-drop-speaker">
          <LinkContainer to="/program#organizers"><MenuItem>Organizers</MenuItem></LinkContainer>
          <LinkContainer to="/program#speakers"><MenuItem>Speakers</MenuItem></LinkContainer>
        </NavDropdown>
        <LinkContainer to="/schedule"><NavItem>Schedule</NavItem></LinkContainer>
        <NavDropdown title="Venue" id="navbar-drop-accomm">
          <LinkContainer to="/venue#room"><MenuItem>Venue</MenuItem></LinkContainer>
          <LinkContainer to="/venue#accommodation"><MenuItem>Accommodation</MenuItem></LinkContainer>
          <LinkContainer to="/venue#travel"><MenuItem>Travel</MenuItem></LinkContainer>
        </NavDropdown>
        <Navbar.Form pullLeft>
          <LinkContainer to="/login">
            <Button bsStyle="primary">Register Now </Button>
          </LinkContainer>
        </Navbar.Form>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

)
