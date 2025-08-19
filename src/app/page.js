"use client";
import { useEffect, useState } from "react";
import ImageSlider from "../../component/ImageSlider";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <main className="p-6">
      <ImageSlider />
      <div class="bg-gray-100 py-12 px-6 md:px-16 lg:px-32">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h2>
          <p class="text-gray-600 text-base md:text-lg leading-relaxed">
            At{" "}
            <span class="font-semibold text-gray-800">
              DesignSphere Architects
            </span>
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
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {projects.map((p) => (
          <div key={p._id} className="border p-2 rounded shadow">
            <img src={p.imageUrl} alt={p.title} className="rounded" />
            <h2 className="text-lg font-semibold">{p.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
