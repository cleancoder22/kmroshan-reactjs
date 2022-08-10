import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Layout = ({ children }: any) => {
  return (
    <div className="px-16 py-8 bg-zinc-300 min-h-screen">
      <Header />
      <div className="min-h-[calc(100vh-128px)] flex justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
