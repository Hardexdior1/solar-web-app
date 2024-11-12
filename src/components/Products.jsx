import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import SL from "../images/SL.jpg";
import SMS from "../images/SMS.jpg";
import GL300W from "../images/GL 300W.jpg";
import EML2000W from "../images/2000w.jpg";
import CL150W from "../images/CL150w.jpg";
const Products = () => {
  const products = [
    {
      id: 1,
      title: "Emirate Power Lightening",
      description:
        "Emirate Power Lightening 2000W Solar street Lamp Rader Induction Automatic Sensor",
      imageUrl: EML2000W,
    },
    {
      id: 2,
      title: "Solar Light",
      description:
        "This is a private street lamp that works without electricity",
      imageUrl: SL,
    },
    {
      id: 3,
      title: "Galaxy Light 300W",
      description:
        "Solar Panel: 6V25W* 2pcs Battery capacity: 42AH Materials: Aluminum & ABS Application: Courtyards, parks, Roads, Farms, Schools, Factories",
      imageUrl: GL300W,
    },

    {
      id: 4,
      title: "Sunmate Solar 300AH",
      description: "Lithium Iron Phosphate 300AH 15kwh 48v",
      imageUrl: SMS,
    },
    {
      id: 5,
      title: "Cty Light 150W",
      description:
        "Solar panel of 6V25W with 24AH charging 5-7H has materials of Aluminum&ABs",
      imageUrl: CL150W,
    },
    {
      id: 5,
      title: "Cty Light 150W",
      description:
        "Solar panel of 6V25W with 24AH charging 5-7H has materials of Aluminum&ABs",
      imageUrl: CL150W,
    },
    {
      id: 5,
      title: "Cty Light 150W",
      description:
        "Solar panel of 6V25W with 24AH charging 5-7H has materials of Aluminum&ABs",
      imageUrl: CL150W,
    },
    {
      id: 5,
      title: "Cty Light 150W",
      description:
        "Solar panel of 6V25W with 24AH charging 5-7H has materials of Aluminum&ABs",
      imageUrl: CL150W,
    },
    {
      id: 5,
      title: "Cty Light 150W",
      description:
        "Solar panel of 6V25W with 24AH charging 5-7H has materials of Aluminum&ABs",
      imageUrl: CL150W,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once while scrolling
      easing: "ease-in-out", // Easing function for animations
    });
  }, []);
  return (
    <div className="py-10 px-6 bg-[#dae3f2] text-white md:px-10" id="projects">
      <h2 className="text-3xl font-bold text-center text-[#166efa] mb-8">
        Our Products
      </h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              data-aos="fade-down"
              key={product.id}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#1E1E2F] mb-2">
                  {product.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
