import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="font-bold max-w-md text-4xl text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center md:text-left text-darkGrayishBlue">
            Manage makes it simple for software team to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            alt="illustration"
            src="/illustration-intro.svg"
            width={500}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
