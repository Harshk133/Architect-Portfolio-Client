"use client";
import { useEffect, useState } from "react";
import { AR_One_Sans } from "next/font/google";
import Image from "next/image";
import Card from "../../component/Card";
import SplitText from "../../component/SplitText";
import CircularText from "../../component/CircularText";
import { BRAND_COLOR, BRAND_NAME } from "./constants";

const arOneSans = AR_One_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you need
});

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <main className="">
      {/* <ImageSlider /> */}
      <div className="relative w-full h-[500px]">
        <div className="relative w-full h-full">
          <Image
            src="/img3.jpg"
            alt="Luxury Interiors"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 text-white">
          <p
            className={`text-sm md:text-2xl font-bold tracking-widest mb-4 text-shadow-lg/20`}
          >
            LET’S RECREATE YOUR WAY OF LIVING
          </p>
          {/* <h1
            className={`text-3xl md:text-7xl font-bold leading-tight mb-6  ${arOneSans.className}`}
          >
            Luxury Interior Designers <br /> In Bangalore
          </h1> */}
          <SplitText
            text="Luxury Interior Designers"
            className={`[text-shadow:2px_2px_0_${BRAND_COLOR}] text-3xl md:text-7xl font-bold leading-tight mb-5  ${arOneSans.className} text-wrap`}
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => {
              console.log("all animated!");
            }}
          />
          <SplitText
            text="In Maharashtra"
            className={`break-words [text-shadow:2px_2px_0_${BRAND_COLOR}] text-3xl md:text-7xl font-bold leading-tight mb-6  ${arOneSans.className} text-wrap`}
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => {
              console.log("all animated!");
            }}
          />
          <button
            className={`bg-white text-${BRAND_COLOR}-500 font-semibold px-6 py-3 rounded shadow hover:bg-${BRAND_COLOR}-500 hover:text-white transition`}
          >
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* <div class="bg-gray-100 py-12 px-6 md:px-16 lg:px-32">
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
      </div> */}

      {/* section 1 */}
      <section className="bg-white max-w-7xl mx-auto px-4 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h4
              className={`text-${BRAND_COLOR}-500 font-semibold uppercase tracking-wide`}
            >
              What We Give
            </h4>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mt-2 leading-snug">
              Our premium services to transform your spaces
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {BRAND_NAME} is one of the renowned best interior decorators in
              Bangalore. With our incredible team of interior designers with
              amazing craftsmanship talent, we brought the dream of luxury
              interior design to reality all over Bangalore, with astonishing
              modern interior decor ideas for your home and corporate spaces.
            </p>
            <button
              className={`mt-6 border border-${BRAND_COLOR}-500 text-${BRAND_COLOR}-500 hover:bg-${BRAND_COLOR}-500 hover:text-white px-6 py-3 rounded-md font-medium transition duration-300`}
            >
              Explore Now
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card
              img="/img3.jpg"
              tag="New"
              title="Commercial Interior Design"
              description="Highlight your company with our amazing interior designs"
              button={{
                text: "Explore",
                onClick: () => (window.location.href = "/services"),
              }}
            />

            <Card
              img="/img3.jpg"
              tag="New"
              title="Home Interior Design"
              description="Renovate your house with our exclusive interior designs"
              button={{
                text: "Explore",
                onClick: () => (window.location.href = "/services"),
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Title */}
          <h2
            className={`text-${BRAND_COLOR}-500 uppercase font-semibold tracking-wide`}
          >
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Let&apos;s Blend Our Expertise With Your Expectations
          </h3>

          {/* Cards Grid */}
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
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-center text-${BRAND_COLOR}-500 uppercase font-semibold tracking-wide`}
          >
            Our Work
          </h2>
          <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Let&apos;s Blend Our Expertise With Your Expectations
          </h3>
          <br />
          {/* <h2 className="text-black text-center text-3xl font-bold mb-10"></h2> */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Kitchen - Large Image */}
            <div className="relative md:col-span-2 h-64 md:h-80 lg:h-96">
              <Image
                src="/kitchen.jpg"
                alt="Kitchen"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="[text-shadow:2px_2px_0_#000] text-white text-6xl font-extrabold">
                  KITCHEN
                </h3>
              </div>
            </div>

            {/* Dining - Large Image */}
            <div className="relative md:col-span-2 h-64 md:h-80 lg:h-96">
              <Image
                src="/dining.jpg"
                alt="Dining"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="[text-shadow:2px_2px_0_#000] text-white text-6xl font-extrabold">
                  DINING
                </h3>
              </div>
            </div>

            {/* Bedroom - Small Image */}
            <div className="relative h-48 md:h-60 lg:h-72">
              <Image
                src="/bedroom.webp"
                alt="Bedroom"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="[text-shadow:2px_2px_0_#000] text-white text-6xl font-extrabold">
                  BEDROOM
                </h3>
              </div>
            </div>

            {/* Living - Small Image */}
            <div className="relative md:col-span-3 h-48 md:h-60 lg:h-72">
              <Image
                src="/living.jpg"
                alt="Living"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="[text-shadow:2px_2px_0_#000] text-white text-6xl font-extrabold">
                  LIVING
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side Image */}
          <div className="relative group">
            <div className="rounded-2xl shadow-lg overflow-hidden relative w-full max-w-[700px] mx-auto">
              <Image
                src="/living.jpg" // Replace with your image
                alt="Luxury Interior Design"
                width={1200}
                height={800}
                className="rounded-2xl object-cover transform transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            {/* Circular Text Positioned at Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="backdrop-blur-md bg-black/30 p-2 sm:p-4 rounded-full shadow-lg">
                <CircularText
                  text={`${BRAND_NAME}#1*Interior*Design*`}
                  onHover="speedUp"
                  spinDuration={20}
                  className="uppercase w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
                />
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div>
            <p
              className={`text-${BRAND_COLOR}-500 font-semibold uppercase tracking-wider mb-2`}
            >
              Why Choose Bana Interiors
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Transform Your Space with{" "}
              <span className={`text-${BRAND_COLOR}-500`}>Elegant Designs</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since our inception, we’ve been delivering stunning interiors for
              homes and offices. Our expert designers bring innovation, quality,
              and elegance to every project, ensuring your space reflects your
              lifestyle and personality.
            </p>

            {/* Feature List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Custom Interior Solutions",
                "Premium End-to-End Service",
                "No Hidden Charges",
                "One-Time Completion",
                "High-End Materials",
                "Post-Installation Support",
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg
                    className={`w-5 h-5 text-${BRAND_COLOR}-500 mr-3`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#contact"
              className={`inline-block bg-${BRAND_COLOR}-500 hover:bg-${BRAND_COLOR}-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300`}
            >
              Explore Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
