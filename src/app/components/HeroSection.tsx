"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom Arrow Components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer z-10 text-white bg-black bg-opacity-50 p-3 rounded-full"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer z-10 text-white bg-black bg-opacity-50 p-3 rounded-full"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

// Slider Images
const slides = [
  { image: "/images/th1.jpg", text: "MICBAM IS COMMITTED TO POWER INDUSTRY" },
  { image: "/images/th2.jpg", text: "CNG SOLUTIONS FOR A GREENER FUTURE" },
  { image: "/images/th3.jpg", text: "INNOVATIVE ENERGY SOLUTIONS" },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true, // Enable arrows
    nextArrow: <NextArrow />, // Custom right arrow
    prevArrow: <PrevArrow />, // Custom left arrow
    fade: true,
    adaptiveHeight: true,
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Navbar />
      <Slider {...settings} className="w-full h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-screen">
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white">{slide.text}</h1>
                <p className="mt-3 text-lg md:text-xl text-gray-200">
                  Delivering CNG directly to industries & businesses
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
