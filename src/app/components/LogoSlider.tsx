"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const logos = [
  "/images/clients/dangote-sugar.jpg",
  "/images/clients/dangote-cement.jpg",
  "/images/clients/cadbury.jpg",
  "/images/clients/shell.png",
  "/images/clients/GUINNESS.png",
  "/images/clients/bua.png",
  "/images/clients/jof_nigeria_limited.jpg",
  "/images/clients/ayoola-foods.png",
];

const LogoSlider = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section className="w-full bg-gray-100 py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mb-8"
        >
          <div className="w-fit mx-auto text-center group">
            <motion.h2
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight"
            >
              Our Trusted Clients
            </motion.h2>

            <motion.div
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-2 h-[3px] w-24 bg-green-600 origin-left rounded-sm mx-auto group-hover:w-28 group-hover:bg-green-700 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Swiper Section */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <div className="swiper-button-prev-custom absolute left-0 z-10 cursor-pointer p-2 rounded-full bg-white shadow-md hover:bg-green-100 transition sm:-left-4 md:-left-6 lg:-left-10 2xl:-left-14">
            <ChevronLeft className="text-green-700 w-5 h-5" />
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            loop={true}
            className="pt-2 px-8"
          >
            {logos.map((logo, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <div className="w-24 sm:w-28 md:w-32 h-16 sm:h-20 flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    width={128}
                    height={80}
                    className="object-contain w-full h-full grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}
          <div className="swiper-button-next-custom absolute right-0 z-10 cursor-pointer p-2 rounded-full bg-white shadow-md hover:bg-green-100 transition sm:-right-4 md:-right-6 lg:-right-10 2xl:-right-14">
            <ChevronRight className="text-green-700 w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
