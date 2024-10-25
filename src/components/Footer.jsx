import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex flex-col">
            <h4 className="text-xl font-bold mb-2">Contact Us</h4>
            <p>
              Email:{" "}
              <a href="mailto:info@example.com" className="underline">
                wilsonova@gmail.com
              </a>
            </p>
            <p>Phone: +234701234567</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-bold mb-2">Quick Links</h4>
            <a href="#about" className="hover:underline">
              About Us
            </a>
            <a href="#blog" className="hover:underline">
              Blog
            </a>
            <a href="#projects" className="hover:underline">
              Products
            </a>

            <Link className="hover:underline" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Wilsonova Dynamics Services. All
            rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100088184146741&mibextid=ZbWKwL"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://www.instagram.com/voice_ofnigeriansindiaspora?igsh=MTVyM3FvYWMzc3l0MQ=="
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
