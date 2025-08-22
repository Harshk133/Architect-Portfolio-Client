"use client";
import Link from "next/link";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import { BRAND_COLOR, BRAND_NAME } from "@/app/constants";

export default function Footer() {
  return (
    <footer className={`bg-${BRAND_COLOR}-900 text-black-300 py-10 mt-10`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Tagline */}
        <div>
          <h1 className="text-2xl font-bold text-white">{BRAND_NAME}</h1>
          <p className="mt-2 text-sm">
            Bringing your architectural vision to life with creativity and
            precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className={`hover:text-${BRAND_COLOR}-500 transition uppercase`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-${BRAND_COLOR}-500 transition uppercase`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`hover:text-${BRAND_COLOR}-500 transition uppercase`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={`hover:text-${BRAND_COLOR}-500 transition uppercase`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:text-${BRAND_COLOR}-500 transition uppercase`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Connect With Us
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              onClick={() =>
                (window.location.href =
                  "mailto:hello@banainteriors.com?subject=Inquiry&body=Hi BanaInteriors, I would like to discuss a project...")
              }
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <Mail size={22} />
            </a>
            <a
              href="https://wa.me/<ARCHITECT_PHONE>"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <Phone size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black-700 mt-8 pt-4 text-center text-sm text-black-500">
        © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
