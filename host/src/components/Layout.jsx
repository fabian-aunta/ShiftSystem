import React from 'react';
import NavbarComponent from 'navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css'

const Layout = () => {
  return (
    <div className="layout-container">
      <NavbarComponent />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
