import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

export class NavbarLayout extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">2017 Winter School</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown title="Program" id="navbar-drop-speaker">
              <MenuItem href="#organizers">Organizers</MenuItem>
              <MenuItem href="#speakers">Speakers</MenuItem>
              <MenuItem href="#venue">Venue</MenuItem>
            </NavDropdown>
            <NavItem href="#schedule">Schedule</NavItem>
            <NavDropdown title="Info" id="navbar-drop-accomm">
              <MenuItem href="#accommodation">Accommodation</MenuItem>
              <MenuItem href="#travel">Travel</MenuItem>
            </NavDropdown>
            <Navbar.Form pullLeft>
              <Button bsStyle="primary" href="#registration">Register Now </Button>
            </Navbar.Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
