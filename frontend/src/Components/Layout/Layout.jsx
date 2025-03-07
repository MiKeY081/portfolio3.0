import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div  className="overflow-x-hidden flex flex-col min-h-screen">
      <Header />
      <div className=' scroll-smooth bg-gray-900 flex-1 overflow-hidden'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
