import React, { Component } from 'react';
import { render } from 'react-dom';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

// For IndexLink & LinkContainer
// https://themeteorchef.com/snippets/react-router-basics/#tmc-setting-up-our-routes
export const NavbarLayout = () => (
  <Navbar fixedTop>
    <IndexLinkContainer to="/">
      <Navbar.Header>
        <Navbar.Brand>
        <IndexLinkContainer to="/">
          <a>2017 Winter School</a>
        </IndexLinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </IndexLinkContainer>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/program">
          <NavItem title="Program" eventKey="1">Organizers</NavItem>
        </LinkContainer>
        <LinkContainer to="/schedule">
          <NavItem title="Schedule" eventKey="2">Schedule</NavItem>
        </LinkContainer>
        <LinkContainer to="/venue">
          <NavItem title="Venue" eventKey="3">Venue</NavItem>
        </LinkContainer>
        <Navbar.Form pullLeft>
          <LinkContainer to="/registernow">
            <Button  eventKey="4" bsStyle="primary"> Register Now </Button>
          </LinkContainer>
        </Navbar.Form>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

)
