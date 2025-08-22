"use client";
import React from "react";
import Image from "next/image";
import { BRAND_COLOR, BRAND_NAME } from "../constants";

const About = () => {
  console.log(BRAND_COLOR);
  return (
    <>
      <div className="relative w-full h-[400px] overflow-hidden">
        {" "}
        {/* Adjust height as needed */}
        <Image
          src="/img3.jpg" // Replace with your actual image URL or path (e.g., /about-bg.jpg in public folder)
          alt="About Us background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black/70 flex items-center justify-center">
          {" "}
          {/* Centered horizontally */}
          <div className="text-center">
            {" "}
            {/* Add text-center for better alignment */}
            <h1 className="text-white text-5xl font-bold">About Us</h1>
            <div
              className={`mt-2 h-1 w-24 bg-${BRAND_COLOR}-400 mx-auto`}
            ></div>{" "}
            {/* mx-auto centers the underline */}
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h2> */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At <span className="font-semibold text-gray-800">{BRAND_NAME}</span>
            , we believe architecture is more than just creating structures—it’s
            about crafting spaces that inspire, connect, and endure. With a
            blend of creativity, functionality, and sustainability, we bring
            visions to life through innovative designs.
            <br />
            <br />
            From modern residences to commercial landmarks, our mission is to
            shape environments that reflect individuality and purpose, while
            maintaining harmony with nature and surroundings.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
