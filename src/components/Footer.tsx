"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs"; // Correct X icon import

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 w-full mt-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-between mb-12">
          {" "}
          {/* Increased space */}
          {/* Logo (Centered for mobile) */}
          <div className="flex-shrink-0 mb-4 lg:mb-0">
            <Image
              src="/logo.png"
              alt="Dhamaal Logo"
              width={100} // Adjust as needed
              height={40}
              priority
            />
          </div>
          {/* Links with more spacing for mobile */}
          <div className="flex flex-col items-center lg:flex-row lg:space-x-6 text-sm space-y-4 lg:space-y-0">
            {" "}
            {/* Added space-y-4 for mobile */}
            <Link href="/search" className="hover:text-black font-medium">
              Workshop
            </Link>
            <Link href="/artists" className="hover:text-black font-medium">
              Explore Artists
            </Link>
            <Link href="/rent-studio" className="hover:text-black font-medium">
              Rent a Studio
            </Link>
            <Link href="/login" className="hover:text-black font-medium">
              Login
            </Link>
            <Link href="/sign-up" className="hover:text-black font-medium">
              Register
            </Link>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-4 lg:mt-0 lg:ml-8">
            {" "}
            {/* Added lg:ml-8 for spacing */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:text-black" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-black" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <BsTwitterX className="text-2xl hover:text-black" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-black" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-2xl hover:text-black" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-8 border-t border-black mx-auto w-full"></div>

        {/* Bottom Section */}
        <div className="flex justify-center mb-4">
          {" "}
          {/* Ensuring bottom section is centered */}
          <span className="font-medium text-xs lg:text-sm">
            © 2024 Relume. All Rights Reserved.
          </span>{" "}
          {/* Reduced font */}
        </div>

        {/* Bottom Links with Underline */}
        <div className="flex justify-center space-x-6 mt-4 text-xs lg:text-sm">
          <Link
            href="/privacy-policy"
            className="hover:text-black font-medium border-b border-black pb-1"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-black font-medium border-b border-black pb-1"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="hover:text-black font-medium border-b border-black pb-1"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
