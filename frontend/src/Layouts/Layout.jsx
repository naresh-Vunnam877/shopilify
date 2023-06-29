import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto bg-black text-white min-h-screen">
      <header className="bg-gray-800 ">
        <Header />
      </header>
      <main className="container mx-auto">{children}</main>
      <footer className="bg-gray-800 ">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
