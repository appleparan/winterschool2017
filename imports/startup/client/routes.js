import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// import styles
import '/imports/ui/styles/winterschool2017.scss';

// Layouts
import { MainLayout } from '../../ui/layouts/MainLayout.jsx';
import { NavbarLayout } from  '../../ui/layouts/Navbar.jsx';
import { FooterLayout } from  '../../ui/layouts/Footer.jsx';

// Pages
import { MainContents } from  '../../ui/contents/MainContents.jsx';

FlowRouter.route('/', {
  name: 'Home',
  action() {
    mount(MainLayout, {
      navbar: () => (<NavbarLayout name="NavContents" />),
      content: () => (<MainContents name="MainContents" />),
      footer: () => (<FooterLayout name="FooterContents" />)
    });
  }
})
