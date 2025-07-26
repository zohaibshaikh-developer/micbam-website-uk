"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { motion, useAnimation } from "framer-motion";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { useRouter } from "next/navigation";

const services = [
  {
    title: "Mechanical, Production and Industrial Engineering",
    image: "/images/service-mechanical.jpg",
  },
  {
    title: "Electrical, Electronics, Component Development and ICT",
    image: "/images/service-electrical.jpg",
  },
  {
    title: "Civil Works",
    image: "/images/service-civil.jpg",
  },
  {
    title: "Consultancy and Project Management",
    image: "/images/service-consulting.jpg",
  },
  {
    title: "Instrumentations",
    image: "/images/service-instrumentation.jpg",
  },
];

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const router = useRouter();

  return (
    <section className="bg-white w-full min-h-screen relative overflow-x-hidden">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-start pt-20 sm:pt-24 lg:pt-28 2xl:pt-36 px-4 sm:px-6 lg:px-12 relative">
        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-20 mb-6 lg:mb-0 mt-2 lg:mt-4 2xl:mt-16"
        >
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-blue-600 uppercase tracking-wide">
            A Trusted Partner in Engineering
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Micbam Nigeria Ltd
          </h1>
        </motion.div>

        {/* Blue Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="z-20 bg-[#074173] text-white p-6 sm:p-8 md:p-10 shadow-lg w-full xl:max-w-[720px] 2xl:max-w-[790px] lg:absolute lg:top-[17rem] 2xl:top-[23rem] lg:left-[0%]"
        >
          <p className="text-base sm:text-lg md:text-xl font-semibold mb-4 text-green-400">
            Engineering Excellence for a Sustainable Tomorrow
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-6">
            At Micbam, we engineer innovative, sustainable, and efficient
            solutions for industries, governments, and communities. Our decades
            of experience in engineering excellence empower us to deliver
            future-ready infrastructure and services that drive progress.
          </p>
          <button
            onClick={() => router.push(`/about`)}
            className="mt-2 bg-green-400 text-white font-semibold px-5 py-2 rounded hover:bg-green-500 transition-all"
          >
            Learn More
          </button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[60%] ml-auto mt-10 lg:mt-[-3rem] 2xl:mt-[-5rem] px-0 lg:px-0 lg:pr-0 relative"
        >
          <div className="w-full lg:w-[calc(100vw-75%)] 2xl:w-[calc(100vw-74%)] ml-auto">
            <Image
              src="/images/LandingPage2.jpg"
              alt="Micbam Hero"
              width={1200}
              height={800}
              className="object-cover rounded shadow-xl w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Our Services */}
      <div className="bg-white w-full mt-24 px-4 sm:px-6 lg:px-12 pb-20">
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
          className="mb-10"
        >
          <div className="w-fit mx-auto text-center group">
            <motion.h2
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight"
            >
              Our Services
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group w-full aspect-square max-w-[200px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] overflow-hidden rounded shadow-md"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#52c176] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex flex-col justify-center items-start p-4">
                <h3 className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-500 leading-snug">
                  {service.title}
                </h3>
                <button
                  onClick={() => router.push(`/services?tab=${index}`)}
                  className="mt-3 border border-white text-white text-xs px-4 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-500"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologically Driven */}
      <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[520px] mx-auto lg:mx-0 lg:w-[48%]"
          >
            <Image
              src="/images/Technology_Driven.png"
              alt="Technologically Driven"
              width={700}
              height={500}
              className="w-full h-auto object-cover rounded"
            />
          </motion.div>

          {/* Content Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[48%] text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007bff] mb-4 uppercase">
              Technologically Driven
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              As a leader in engineering and infrastructure technology,{" "}
              <span className="font-semibold">Micbam Nigeria Ltd</span>{" "}
              integrates cloud-based automation, smart systems, and AI-driven
              insights into every project. Our culture of innovation and
              technical excellence drives us to create efficient, sustainable
              solutions tailored to our clients’ evolving needs.
            </p>
            {/* <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-2 rounded shadow transition duration-300">
              Learn More
            </button> */}
            <span className="inline-block mt-2 text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full shadow-sm">
              Innovation at Our Core
            </span>
          </motion.div>
        </div>
      </section>

      {/* We Love What We Do */}
      <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-green-600 text-xl font-semibold mb-4">
              We Love What We Do
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              At Micbam Nigeria Ltd, we take pride in delivering end-to-end
              engineering solutions with professionalism, integrity, and a
              passion for excellence. With decades of industry experience, we’ve
              grown into a trusted partner for industries, governments, and
              institutions.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Our multidisciplinary services span mechanical, civil, electrical,
              and instrumentation engineering-including fabrication, plant
              installation, automation, and CNG systems. We serve a broad range
              of sectors including oil & gas, food & beverage, Manfacturing
              Sector [Cement,Sugar,etc], telecom, and renewable energy.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[520px] mx-auto md:mx-0"
          >
            <Image
              src="/images/we-love-what-we-do.png"
              alt="Engineers at Work"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
