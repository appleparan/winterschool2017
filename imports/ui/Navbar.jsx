import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
            <NavItem eventKey={2} href="#organizers">Organizers</NavItem>
            <NavItem eventKey={3} href="#speakers">Session Chair</NavItem>
            <NavItem eventKey={4} href="#schedule">Schedule</NavItem>
            <NavItem eventKey={5} href="#registration">Registration</NavItem>
            <NavItem eventKey={6} href="#venue">Venue</NavItem>
            <NavItem eventKey={7} href="#accommodation">Accommodation</NavItem>
            <NavItem eventKey={8} href="#transportation">Travel &amp; Transportation </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
