import Image from "next/image";
import React from "react";
import { BRAND_COLOR } from "../constants";

const page = () => {
  const images = [
    "/img1.jpg",
    "/img3.jpg",
    "/img3.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img3.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img3.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img3.jpg",
    "/img2.jpg",
    "/img2.jpg",
    // Add more images here for additional rows
  ];

  return (
    <div>
      <div className="relative w-full h-[400px] overflow-hidden">
        {" "}
        {/* Adjust height as needed */}
        <Image
          src="/img3.jpg" // Replace with your actual image URL or path (e.g., /about-bg.jpg in public folder)
          alt="Gallery background"
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
            <h1 className="text-white text-5xl font-bold">Gallery</h1>
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
            Interior Gallery
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            ACTUAL PROJECT PHOTOGRAPHS
          </h3>
        </div>

        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Image Gallery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {" "}
            {/* Responsive grid: 1 col mobile, 2 sm, 3 md, 4 lg+ */}
            {images.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                {" "}
                {/* Enforces 4:3 aspect ratio for uniform size */}
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover" // Covers the container, cropping if needed to maintain uniformity
                  priority={index < 4} // Optional: Prioritize loading for first row
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
