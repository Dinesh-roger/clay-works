import React from 'react';
import { Outlet } from 'react-router-dom';
import TopRibbon from '../components/TopRibbon/TopRibbon';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CartSidebar from '../components/CartSidebar/CartSidebar';
import WhatsAppFloat from '../components/WhatsAppFloat/WhatsAppFloat';
import BackToTop from '../components/BackToTop/BackToTop';
import Toast from '../components/Toast/Toast';

const Layout: React.FC = () => {
  return (
    <>
      <TopRibbon />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartSidebar />
      <Toast />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
};

export default Layout;
