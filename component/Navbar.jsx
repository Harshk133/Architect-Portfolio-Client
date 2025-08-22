"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { BRAND_COLOR, BRAND_LOGO } from "@/app/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src={BRAND_LOGO}
              alt="BRAND LOGO"
              width={160} // You can adjust this for better scaling
              height={50}
              className="w-32 sm:w-40 md:w-48 h-auto"
              priority // loads faster for logo
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-bold items-center">
            <Link
              href="/"
              className={`hover:text-${BRAND_COLOR}-600 transition uppercase cursor-pointer`}
            >
              home
            </Link>
            <Link
              href="/about"
              className={`hover:text-${BRAND_COLOR}-600 transition uppercase cursor-pointer`}
            >
              about
            </Link>
            <Link
              href="/services"
              className={`hover:text-${BRAND_COLOR}-600 transition uppercase cursor-pointer`}
            >
              services
            </Link>
            <Link
              href="/gallery"
              className={`hover:text-${BRAND_COLOR}-600 transition uppercase cursor-pointer`}
            >
              gallery
            </Link>
            <Link
              href="/contact"
              className={`hover:text-${BRAND_COLOR}-600 transition uppercase cursor-pointer`}
            >
              contact
            </Link>
            <button
              className={`bg-${BRAND_COLOR}-500 hover:bg-${BRAND_COLOR}-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 capitalize cursor-pointer`}
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Reach out to us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-700">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`hover:text-${BRAND_COLOR}-600 transition uppercase cursor-pointer`}
          >
            home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`hover:text-${BRAND_COLOR}-600 transition uppercase cursor-pointer`}
          >
            about
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className={`hover:text-${BRAND_COLOR}-600 transition uppercase cursor-pointer`}
          >
            services
          </Link>
          <Link
            href="/gallery"
            onClick={() => setIsOpen(false)}
            className={`hover:text-${BRAND_COLOR}-600 transition uppercase cursor-pointer`}
          >
            gallery
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`hover:text-${BRAND_COLOR}-600 transition uppercase cursor-pointer`}
          >
            contact
          </Link>
          <button
            className={`bg-${BRAND_COLOR}-500 hover:bg-${BRAND_COLOR}-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 capitalize cursor-pointer`}
          >
            Reach out to us
          </button>
        </div>
      </div>
    </nav>
  );
}
