import Image from "next/image";
import { useState } from "react";
import styles from "../styles/utils.module.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className={`md:hidden `}>
        <div
          className={`absolute ${
            isOpen ? "mr-0" : "-mr-96"
          } transition-all duration-500 flex-col flex items-center self-end py-8 px-12 mt-4 max-w-md space-y-6 font-bold right-0 bg-white sm:w-auto sm:self-center drop-shadow-md z-10`}
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// transition-all duration-500
// ${isOpen ? "flex" : "hidden"}
