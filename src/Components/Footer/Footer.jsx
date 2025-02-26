import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black py-10">
      <div className="sectionContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 px-4 md:px-8 lg:px-16 items-start">
        {/* 1st */}
        <div className="text-white">
          <h1 className="font-bold text-xl lg:text-2xl mb-4">Exclusive</h1>
          <div className="flex flex-col gap-2">
            <Link className="text-white font-light hover:underline">Subscribe</Link>
            <Link className="text-white hover:underline">
              Get 10% off your first order
            </Link>
          </div>
        </div>
        {/* 2nd */}
        <div className="text-white">
          <h1 className="font-bold text-xl lg:text-2xl mb-4">Support</h1>
          <div className="flex flex-col gap-2">
            <Link className="text-white font-light hover:underline">
              exclusive@gmail.com
            </Link>
            <Link className="text-white hover:underline">
              +88015-88888-9999
            </Link>
          </div>
        </div>
        {/* 3rd */}
        <div className="text-white">
          <h1 className="font-bold text-xl lg:text-2xl mb-4">Account</h1>
          <div className="flex flex-col gap-2">
            <Link className="text-white font-light hover:underline">My Account</Link>
            <Link className="text-white hover:underline">LogIn</Link>
            <Link className="text-white hover:underline">Register</Link>
            <Link className="text-white hover:underline">Cart</Link>
            <Link className="text-white hover:underline">Shop</Link>
          </div>
        </div>
        {/* 4th */}
        <div className="text-white">
          <h1 className="font-bold text-xl lg:text-2xl mb-4">Quick Link</h1>
          <div className="flex flex-col gap-2">
            <Link className="text-white font-light hover:underline">Privacy Policy</Link>
            <Link className="text-white hover:underline">Terms Of Use</Link>
            <Link className="text-white hover:underline">FAQ</Link>
            <Link className="text-white hover:underline">Contact</Link>
          </div>
        </div>
        {/* 5th */}
        <div className="text-white">
          <h1 className="font-bold text-xl lg:text-2xl mb-4">Social Media</h1>
          <div className="flex flex-col gap-2">
            <Link className="text-white font-light hover:underline">
              Follow my social Media
            </Link>
            <div className="flex gap-4 text-white text-2xl">
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaDribbble className="hover:text-pink-300 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-700 mt-10" />
    </div>
  );
};

export default Footer;
