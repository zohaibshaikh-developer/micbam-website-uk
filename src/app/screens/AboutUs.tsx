"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

import { useEffect, useRef, useState } from "react";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const milestones = [
  {
    year: "1986",
    title: "FOUNDING",
    desc: "Micbam was founded with a vision to be a key player in Nigeria’s industrial future - setting the tone for excellence in engineering and infrastructure projects.",
  },
  {
    year: "1989",
    title: "PROCUREMENT",
    desc: "Began large-scale sourcing and delivery of industrial equipment for power plants, factories, and refineries - building trust across multiple sectors.",
  },
  {
    year: "1991",
    title: "INDUSTRIAL ENGINEERING",
    desc: "Took on massive turnkey construction projects: sugar and cement refineries, power plant installations, and machinery commissioning across West Africa.",
  },
  {
    year: "2021",
    title: "CNG VEHICLE CONVERSION",
    desc: "Pioneered green energy mobility in Nigeria - converting trucks and cars to CNG, supporting a sustainable future and energy cost savings.",
  },
];

const AboutUs = () => {
  const [showHero, setShowHero] = useState(false);
  const heroRef = useRef(null);

  const imageControls = useAnimation();
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible");
    }
  }, [imageInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHero(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="/images/about/hero-team.jpg"
          alt="About Micbam Team"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-16">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white px-4"
          >
            <h2 className="text-4xl font-bold mb-3 text-green-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              Building Africa’s Future with Integrity
            </h2>
            <p className="text-xl font-medium max-w-3xl mx-auto drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
              We’re more than engineers-we’re trusted partners powering
              industrial growth through precision, reliability, and innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* COMPANY OVERVIEW */}
      <div className="max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-green-600 font-semibold text-xl mb-4">
            Empowering Africa’s Growth Through Trusted Engineering, Procurement
            & Industrial Services.
          </h3>
          <p>
            At Micbam, we are more than just a procurement and service provider
            - we are a dedicated partner driving industrial excellence across
            Africa. Since inception, we've built trusted partnerships with OEMs
            to deliver tailored engineering solutions.
          </p>
          <p>
            Our skilled team operates 24/7 to reduce downtime and enhance
            infrastructure performance for our clients.
          </p>
          <p>
            From sugar and cement refineries to telecommunications and renewable
            energy - we are fueling industrial progress across the continent.
          </p>
        </motion.div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 1, x: 0 }} // Always render
          animate={imageControls}
          variants={{
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/about/worker.jpg"
            alt="Micbam industrial engineer"
            width={600}
            height={400}
            priority
            className="rounded-lg shadow-md w-full object-cover"
          />
        </motion.div>
      </div>

      {/* FEATURES */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-20">
          {[
            {
              image: "/icons/equipment.jpg",
              title: "Advanced Equipment",
              text: "Equipped with cutting-edge machinery and tools to handle complex turnkey industrial installations across Africa.",
              style: "object-cover",
            },
            {
              image: "/icons/clients.png",
              title: "Trusted by Giants",
              text: "Proud partners of Dangote, BUA, and Cadbury-delivering consistent engineering value to industry giants.",
              style: "object-cover",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="w-full max-w-[280px] flex flex-col items-center text-center space-y-4"
            >
              <div className="w-full h-[120px] bg-white rounded-md overflow-hidden shadow-md border border-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={280}
                  height={120}
                  className={`${item.style} w-full h-full`}
                />
              </div>
              <h4 className="text-lg font-semibold text-green-700">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* VALUES */}
      <div className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            {[
              {
                label: "Our Vision",
                text: "To be the most trusted African industrial solutions provider.",
              },
              {
                label: "Our Mission",
                text: "We empower our customers to operate efficiently through innovative and optimal solutions.",
              },
              {
                label: "Our Strength",
                text: "We stay ahead by selecting the right OEMs, adapting to market trends, and delivering customer-centric long-term solutions.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h4 className="text-green-400 text-xl font-bold">
                  {item.label}
                </h4>
                <p className="text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-green-400 text-xl font-bold mb-4">
              Core Values:
            </h4>
            <ul className="text-gray-300 space-y-3 text-base list-disc list-inside leading-relaxed">
              <li>Excellence</li>
              <li>Innovation</li>
              <li>Customer Focused</li>
              <li>Integrity</li>
              <li>Empowered Workforce</li>
              <li>Safety</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* OUR JOURNEY */}
      <div className="bg-white py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight">
              Powering Africa’s Progress
              <span className="block text-green-600">
                Through Engineering Excellence
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At Micbam, our legacy is one of practical innovation and trusted
              execution. Our milestones mark decades of bold industrial
              progress-delivering tailored solutions from procurement to
              sustainable mobility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Player
              src="https://lottie.host/da7527ab-1843-49eb-9ad1-50ed590de9db/ah7Q5sGe6Y.json"
              autoplay
              loop
              style={{ height: "320px", width: "100%" }}
            />
          </motion.div>
        </div>

        {/* Timeline (Mobile) */}
        <div className="mt-20 max-w-7xl mx-auto md:hidden space-y-12">
          {Array.from({ length: Math.ceil(milestones.length / 2) }, (_, i) =>
            milestones.slice(i * 2, i * 2 + 2)
          ).map((row, rowIndex) => (
            <div key={rowIndex} className="relative z-0">
              <div className="absolute left-0 right-0 top-2 h-1 bg-gray-200 z-0" />
              <div className="grid grid-cols-2 gap-10 text-center relative z-10">
                {row.map((milestone, idx) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="relative group text-center space-y-2"
                  >
                    <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-4 border-4 border-white shadow" />
                    <h4 className="text-xl font-bold text-gray-900">
                      {milestone.year}
                    </h4>
                    <p className="text-green-600 font-semibold mb-1 uppercase">
                      {milestone.title}
                    </p>
                    <p className="text-sm text-gray-600">{milestone.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline (Desktop) */}
        <div className="hidden md:block relative z-0 mt-20">
          <div className="absolute left-0 right-0 top-2 h-1 bg-gray-200 z-0" />
          <div className="grid grid-cols-4 gap-10 text-center relative z-10">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative group text-center space-y-2"
              >
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-4 border-4 border-white shadow" />
                <h4 className="text-xl font-bold text-gray-900">
                  {milestone.year}
                </h4>
                <p className="text-green-600 font-semibold mb-1 uppercase">
                  {milestone.title}
                </p>
                <p className="text-sm text-gray-600">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
