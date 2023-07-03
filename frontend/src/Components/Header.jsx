import React from "react";
import AnchorLink from "./common/Link";
import { FaLockOpen, FaCartArrowDown, FaBell } from 'react-icons/fa'
import { LiaTshirtSolid } from 'react-icons/lia'
const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap px-5 py-3  flex-col md:flex-row items-center">
        <AnchorLink
          path=""
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <LiaTshirtSolid color="white" className="w-10 h-10 text-white p-2  rounded-full  "  />

          <span className="ml-3 text-xl">JersyLand</span>
        </AnchorLink>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <AnchorLink path="products" className="hover:text-white my-2" name='Products'></AnchorLink>
          <AnchorLink path="contact" className="hover:text-white my-2" name="Contact">
          </AnchorLink>
          <AnchorLink path="about" className="my-2 hover:text-white" name="About">
          </AnchorLink>
        </nav>
        <AnchorLink
          path="notify"
          className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          name =""
        >
        <FaBell/>
        </AnchorLink>
        <AnchorLink
          path="cart"
          className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          name ="Cart"
        >
        <FaCartArrowDown/>
        </AnchorLink>
        <AnchorLink
          path="login"
          className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          name ="Logout"
        >
          <FaLockOpen/>
        </AnchorLink>

      </div>
    </header>
  );
};

export default Header;
