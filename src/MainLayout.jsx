// src/components/layout/MainLayout.jsx
import React from 'react';
import Navbar from './components/header/Navbar';
import TopHeader from './components/header/TopHeader';
import Footer from './components/footer/Footer';
import InstantForm from './components/form/InstantForm';

const MainLayout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <InstantForm/>
      {/* <TopHeader/> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
