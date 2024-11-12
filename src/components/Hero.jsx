import React from "react";
import solar from "../video/solar.mp4";

const Hero = () => {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src={solar} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 -z-10"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Powering Your Future with Solar Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover sustainable energy solutions for your home and business. Go
            green, save costs, and rely on solar power to brighten your future.
          </p>
          <a
            href="#services"
            className="inline-block bg-yellow-500 text-black py-3 px-6 rounded-md font-semibold hover:bg-yellow-600 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

    </div>
  );
};

export default Hero;
