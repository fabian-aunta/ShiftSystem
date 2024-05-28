// src/components/Layout.jsx
import React from 'react';
import NavbarComponent from 'navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
