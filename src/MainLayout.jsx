// src/components/layout/MainLayout.jsx
import React from 'react';
import Navbar from './components/header/Navbar';
import TopHeader from './components/header/TopHeader';
import Footer from './components/footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <TopHeader/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
