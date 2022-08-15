import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Image alt="logo" src="/logo.svg" width={100} height={20} />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <a
          href="#"
          className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight md:block"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
