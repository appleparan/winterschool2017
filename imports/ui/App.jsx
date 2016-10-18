import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavbarInstance from  './Navbar.jsx';
import HeroInstance from  './Hero.jsx';
import ContentsInstance from  './Contents.jsx';
import FooterInstance from  './Footer.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarInstance />
        <HeroInstance />
        <ContentsInstance />
        <FooterInstance />
      </div>
    )
  }
}
