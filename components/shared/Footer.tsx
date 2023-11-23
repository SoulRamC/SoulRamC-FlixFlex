import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:text-gray-500">
            Home
          </Link>
          <Link href="/movie" className="hover:text-gray-500">
            Movies
          </Link>
          <Link href="tv" className="hover:text-gray-500">
            Tv-Series
          </Link>
          <Link href="favorite" className="hover:text-gray-500">
            Favorites
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-500">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-500">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-500">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-500">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>
          &copy; 2023 <span className="font-bold text-red-600">FlixFlex</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
