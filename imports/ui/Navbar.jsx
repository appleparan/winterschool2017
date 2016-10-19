import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

export default class NavbarInstance extends React.Component {
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
            <NavDropdown eventKey={1} title="Program" id="navbar-drop-speaker">
              <MenuItem eventKey={1.1} href="#organizers">Organizers</MenuItem>
              <MenuItem eventKey={1.2} href="#speakers">Speakers</MenuItem>
              <MenuItem eventKey={1.2} href="#venue">Venue</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#schedule">Schedule</NavItem>
            <NavDropdown eventKey={3} title="Info" id="navbar-drop-accomm">
              <MenuItem eventKey={3.1} href="#accommodation">Accommodation</MenuItem>
              <MenuItem eventKey={3.2} href="#travel">Travel</MenuItem>
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
