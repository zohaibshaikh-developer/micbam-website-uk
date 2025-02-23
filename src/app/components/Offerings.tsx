"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const offerings = [
  {
    title: "CNG Decompressed to Natural Gas",
    description: "Providing efficient decompressed CNG solutions for industries and businesses.",
    image: "/images/offering1.jpeg",
  },
  {
    title: "Back-Up Storage on Site",
    description: "Ensuring continuous energy supply with on-site backup storage solutions.",
    image: "/images/offering2.jpg",
  },
  {
    title: "Power & Industrial Gas",
    description: "Natural gas solutions designed for power plants and industrial applications.",
    image: "/images/offering3.jpg",
  },
  {
    title: "CNG delivery to customer site",
    description: "Efficient transportation of compressed natural gas directly to customers.",
    image: "/images/offering4.jpeg",
  },
  {
    title: "Technical Study",
    description: "Providing technical consultation and solutions for industrial gas applications.",
    image: "/images/offering5.jpg",
  },
  {
    title: "Natural gas for power & industry",
    description: "Delivering natural gas solutions for sustainable energy production.",
    image: "/images/offering6.jpg",
  },
];

const Offerings = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Offerings</h2>
        <p className="text-lg text-gray-600 mt-2">Explore our range of innovative CNG solutions.</p>
      </div>

      <div className="container mx-auto mt-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={1200}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {offerings.map((offering, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={offering.image}
                  alt={offering.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{offering.title}</h3>
                  <p className="text-gray-600 mt-2">{offering.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Offerings;
