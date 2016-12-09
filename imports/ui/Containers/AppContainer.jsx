import React, { Component } from 'react';
import { render } from 'react-dom';

import { NavbarLayout } from  './Navbar.jsx';
import { FooterLayout } from  './Footer.jsx';

// export class AppLayout extends Component {
export const AppContainer = ({ children }) => (
  <div>
    <div className="wrapper">
      <NavbarLayout />
      { children }
    </div>
    <FooterLayout />
  </div>
)
