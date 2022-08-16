import Image from "next/image";
import { useState } from "react";
import styles from "../styles/utils.module.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="container mx-auto p-6">
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
        <button
          className={`block ${styles.hamburger} ${
            isOpen && styles.open
          } md:hidden focus:outline-none`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={styles.hamburgerTop}></span>
          <span className={styles.hamburgerMiddle}></span>
          <span className={styles.hamburgerBottom}></span>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "mr-0" : "-mr-64"
        } md:hidden right-6 rounded-md top-0 space-y-6 flex flex-col items-center mt-14 fixed  bg-gray-200 max-w-md font-bold p-5 px-8 z-10 transition-all duration-500 drop-shadow-lg`}
      >
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </div>
    </nav>
  );
};

export default Navbar;
