import Image from "next/image";
import React from "react";
import Card from "../../../component/Card";
import { BRAND_COLOR } from "../constants";

const page = () => {
  return (
    <div>
      <div className="relative w-full h-[400px] overflow-hidden">
        {" "}
        {/* Adjust height as needed */}
        <Image
          src="/img3.jpg" // Replace with your actual image URL or path (e.g., /about-bg.jpg in public folder)
          alt="Services background"
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
            <h1 className="text-white text-5xl font-bold">Services</h1>
            <div
              className={`mt-2 h-1 w-24 bg-${BRAND_COLOR}-400 mx-auto`}
            ></div>{" "}
            {/* mx-auto centers the underline */}
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-${BRAND_COLOR}-500 uppercase font-semibold tracking-wide`}
          >
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Let&apos;s Blend Our Expertise With Your Expectations
          </h3>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="w-2xs"
              img="/kitchen.jpg"
              tag="Kitchen"
              title="Modern Kitchen Design"
              description="Elegant and functional kitchen interiors designed to blend style and practicality."
            />
            <Card
              img="/bedroom.webp"
              tag="Bedroom"
              title="Cozy Bedroom Interiors"
              description="Create a peaceful retreat with our customized bedroom interior designs."
            />
            <Card
              img="/living.jpg"
              tag="Living Room"
              title="Luxury Living Spaces"
              description="Enhance your living experience with thoughtfully designed living rooms."
            />

            <Card
              img="/living.jpg"
              tag="Living Room"
              title="Luxury Living Spaces"
              description="Enhance your living experience with thoughtfully designed living rooms."
            />
            <Card
              className="w-2xs"
              img="/kitchen.jpg"
              tag="Kitchen"
              title="Modern Kitchen Design"
              description="Elegant and functional kitchen interiors designed to blend style and practicality."
            />
            <Card
              img="/bedroom.webp"
              tag="Study Room"
              title="Cozy Bedroom Interiors"
              description="Create a peaceful retreat with our customized bedroom interior designs."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
