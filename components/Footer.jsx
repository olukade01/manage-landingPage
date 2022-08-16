/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/utils.module.css";

const Footer = () => {
  return (
    <div>
      <div id={styles.cta} className="bg-brightRed">
        <div className="container flex flex-col   items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h2 className="text-5xl font-bold leading-tight   text-center text-white md:text-4xl md:text-left   md:max-w-xl">
            Simplify how your team works today
          </h2>
          <a
            href="#"
            className="p-3 px-6 pt-2 text-brightRed bg-white shadow-2xl rounded-full hover:bg-gray-900"
          >
            Get Started
          </a>
        </div>
      </div>
      <footer className="bg-veryDarkBlue">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-white text-center md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            <div>
              <img src="/logo-white.svg" alt="logo" className="h-8" />
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#">
                <img src="/icon-facebook.svg" alt="facebook" className="h-8" />
              </a>
              <a href="#">
                <img src="/icon-youtube.svg" alt="youtube" className="h-8" />
              </a>
              <a href="#">
                <img src="/icon-twitter.svg" alt="twitter" className="h-8" />
              </a>
              <a href="#">
                <img
                  src="/icon-pinterest.svg"
                  alt="pinterest"
                  className="h-8"
                />
              </a>
              <a href="#">
                <img
                  src="/icon-instagram.svg"
                  alt="instagram"
                  className="h-8"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="updated in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
