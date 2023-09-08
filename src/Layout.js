import React from 'react';
import Navbar from './components/Navbar'; // Assuming Navbar is in a components directory
import './Layout.css';  // CSS for the layout

const Layout = ({ children, setCurrentPage }) => (
  <div className="app-layout">
    <Navbar setCurrentPage={setCurrentPage}/>
    <main className="app-content">
      {children}
    </main>
  </div>
);

export default Layout;
