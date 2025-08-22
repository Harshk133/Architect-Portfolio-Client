"use client";
import { useEffect, useState } from "react";



export default function ImageSlider({ projects = [] }) {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    if (projects.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow">
      {/* Images */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {/* {projects.map((p) => (
          <div key={p._id} className="w-full flex-shrink-0 relative">
            <img
              src={p.imageUrl}
              alt={p.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white px-4 py-2 text-lg font-semibold">
              {p.title}
            </div>
          </div>
        ))} */}

          <div className="w-full flex-shrink-0 relative">
            <img
              src={"/img1.jpg"}
              alt={"this is an image!"}
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white px-4 py-2 text-lg font-semibold">
              Home Interiors
            </div>
          </div>

      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
