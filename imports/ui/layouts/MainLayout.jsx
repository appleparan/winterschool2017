import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// export class AppLayout extends Component {
export const MainLayout = ({ navbar, content, footer }) =>
  <div>
    { navbar() }
    { content() }
    { footer() }
  </div>
