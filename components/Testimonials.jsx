/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto mt-32 px-5 text-center">
      <h2 className="text-center font-bold text-4xl">
        What&apos;s different about Manage?
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-6 mt-24">
        <div className="flex flex-col p-6 space-y-6 items-center rounded-lg bg-veryLightGray md:w-1/3">
          <img src="/avatar-anisha.png" alt="avatar1" className="w-16 -mt-14" />
          <h5 className="text-lg font-bold">Anisha Li</h5>
          <p className="text-sm text-darkGrayishBlue">
            &quot;Manage has supercharged our team&apos;s workflow. The ability
            to maintain visibility on larger milestones at all times keeps
            everyone motivated.&quot;
          </p>
        </div>
        <div className="hidden flex-col p-6 space-y-6 items-center rounded-lg bg-veryLightGray md:flex md:w-1/3">
          <img src="/avatar-ali.png" alt="avatar1" className="w-16 -mt-14" />
          <h5 className="text-lg font-bold">Ali Bravo</h5>
          <p className="text-sm text-darkGrayishBlue">
            &quot;We have been able to cancel so many other subscriptions since
            using Manage. There is no more cross-channel confusion and everyone
            is much more focused.&quot;
          </p>
        </div>
        <div className="hidden flex-col p-6 space-y-6 items-center rounded-lg bg-veryLightGray md:flex md:w-1/3">
          <img
            src="/avatar-richard.png"
            alt="avatar1"
            className="w-16 -mt-14"
          />
          <h5 className="text-lg font-bold">Richard Watts</h5>
          <p className="text-sm text-darkGrayishBlue">
            &quot;Manage has supercharged our team&apos;s workflow. The ability
            to maintain visibility on larger milestones at all times keeps
            everyone motivated.&quot;
          </p>
        </div>
      </div>
      <div className="my-16">
        <a
          href="#"
          className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
