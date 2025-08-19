"use client";
import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          At{" "}
          <span className="font-semibold text-gray-800">
            DesignSphere Architects
          </span>
          , we believe architecture is more than just creating structures—it’s
          about crafting spaces that inspire, connect, and endure. With a blend
          of creativity, functionality, and sustainability, we bring visions to
          life through innovative designs.
          <br />
          <br />
          From modern residences to commercial landmarks, our mission is to
          shape environments that reflect individuality and purpose, while
          maintaining harmony with nature and surroundings.
        </p>
      </div>
    </section>
  );
};

export default About;
