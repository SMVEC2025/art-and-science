// src/components/layout/MainLayout.jsx
import React from 'react';
import Navbar from './components/header/Navbar';
import TopHeader from './components/header/TopHeader';
import Footer from './components/footer/Footer';
import InstantForm from './components/form/InstantForm';
import MobileSidebarMenu from './components/header/MobileSidebarMenu';
import ScrollToTop from './components/scrolltotop/ScrollToTop';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <InstantForm/>
      <MobileSidebarMenu/>
      <ScrollToTop/>
      <TopHeader/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
