import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavbarInstance from  './Navbar.jsx';
import ContentsInstance from  './MainContents.jsx';
import FooterInstance from  './Footer.jsx';

// import styles
import './styles/winterschool2017.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavbarInstance />
        </header>
        <div>
          <ContentsInstance />
        </div>
        <footer>
          <FooterInstance />
        </footer>
      </div>
    )
  }
}
