"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Tagline */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Archi<span className="text-blue-500">Design</span>
          </h1>
          <p className="mt-2 text-sm">
            Bringing your architectural vision to life with creativity and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Connect With Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Facebook size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <Instagram size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin size={22} />
            </a>
            <a href="https://wa.me/<ARCHITECT_PHONE>" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <Phone size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ArchiDesign. All rights reserved.
      </div>
    </footer>
  );
}
