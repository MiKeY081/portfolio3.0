import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div  className="overflow-x-hidden">
      <Header />
      <div className='min-h-screen scroll-smooth bg-black text-white text-2xl'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
