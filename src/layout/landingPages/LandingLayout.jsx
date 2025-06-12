import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import BackToTop from '@/components/common/BackToTop';

const LandingLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
};

export default LandingLayout; 