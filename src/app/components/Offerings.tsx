"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const offerings = [
  {
    title: "CNG Decompressed to Natural Gas",
    description:
      "Providing efficient decompressed CNG solutions for industries and businesses.",
    image: "/images/offering1.jpeg",
  },
  {
    title: "Power & Industrial Gas",
    description:
      "Natural gas solutions designed for power plants and industrial applications.",
    image: "/images/offering3.jpg",
  },
  {
    title: "Technical Study",
    description:
      "Providing technical consultation and solutions for industrial gas applications.",
    image: "/images/offering5.jpg",
  },
  {
    title: "Natural Gas for Power & Industry",
    description:
      "Delivering natural gas solutions for sustainable energy production.",
    image: "/images/offering6.jpg",
  },
  {
    title: "Fabrication & Erection of Steel Structures",
    description:
      "Expert fabrication and erection of structural steel for heavy industries and infrastructure projects.",
    image: "/images/fabrication.jpg",
  },
  {
    title: "Installation in Cement & Sugar Refineries",
    description:
      "Specialized installation of key process equipment in cement and sugar refining plants.",
    image: "/images/installation.jpg",
  },
];

const Offerings = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="mb-6"
        >
          <div className="w-fit mx-auto text-center group">
            <motion.h2
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight"
            >
              Our Offerings
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

          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Explore our range of innovative engineering and CNG solutions
            tailored to power, infrastructure, and industrial applications.
          </p>
        </motion.div>
      </div>

      <div className="max-w-full mx-auto mt-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={1000}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full offerings-slider"
        >
          {offerings.map((offering, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
                <Image
                  src={offering.image}
                  alt={offering.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900">
                    {offering.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {offering.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination styling */}
        <style jsx global>{`
          .offerings-slider .swiper-pagination {
            margin-top: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative !important;
            bottom: auto !important;
          }

          .offerings-slider .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #9ca3af;
            opacity: 1;
            margin: 0 6px;
            border-radius: 9999px;
            transition: background 0.3s ease;
          }

          .offerings-slider .swiper-pagination-bullet-active {
            background: #15803d;
            width: 12px;
            height: 12px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Offerings;
