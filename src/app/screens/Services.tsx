"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { useSearchParams } from "next/navigation";

import {
  Factory,
  Bolt,
  Building2,
  ClipboardList,
  GaugeCircle,
} from "lucide-react";

const services = [
  {
    title: "Mechanical, Production and Industrial Engineering",
    icon: <Factory size={28} />,
    description:
      "End-to-end industrial engineering and mechanical fabrication.",
    intro:
      "Our multidisciplinary engineering team delivers mechanical, production, and industrial solutions tailored for large-scale and high-efficiency environments.",
    sections: [
      {
        title: "Mechanical Engineering",
        image:
          "/images/services/Mechanical, Production and Industrial Engineering/mechanical-section.jpg",
        content: [
          "Design & analysis of pressure vessels and piping systems",
          "Boiler installation, ducting, HVAC ventilation integration",
          "Rotary/static equipment maintenance & diagnostics",
          "CAD-based mechanical part design & prototyping",
        ],
      },
      {
        title: "Production Engineering",
        image:
          "/images/services/Mechanical, Production and Industrial Engineering/production-section.jpg",
        content: [
          "Assembly line design, layout & optimization",
          "Time-motion studies for factory operations",
          "Lean Six Sigma methodology & OEE monitoring",
          "Industrial automation system integration",
        ],
      },
      {
        title: "Industrial Engineering",
        image:
          "/images/services/Mechanical, Production and Industrial Engineering/industrial-section.jpg",
        content: [
          "Facility layout planning and logistics workflow",
          "Cost-benefit analysis for industrial upgrades",
          "Supply chain efficiency audits",
          "Workforce optimization and safety planning",
        ],
      },
    ],
  },
  {
    title: "Electrical, Electronics, Component Development and ICT",
    icon: <Bolt size={28} />,
    description:
      "Power distribution, automation, smart systems & Artificial Intelligence.",
    intro:
      "We design and deliver advanced electrical infrastructures, embedded systems, and ICT solutions for modern industry automation and connectivity.",
    sections: [
      {
        title: "Electrical Systems",
        image:
          "/images/services/Electrical, Electronics, Component Development and ICT/electrical-section.jpg",
        content: [
          "LV panel design, MCCs, switchgear & automation",
          "Energy audits, surge/lightning protection",
          "UPS & centralized battery systems",
        ],
      },
      {
        title: "Electronics",
        image:
          "/images/services/Electrical, Electronics, Component Development and ICT/electronics-section.jpg",
        content: [
          "Embedded systems, circuit prototyping",
          "Smart sensors and control interfaces",
          "Real-time automation integration",
        ],
      },
      {
        title: "ICT & Artificial Intelligence",
        image:
          "/images/services/Electrical, Electronics, Component Development and ICT/ict-section.jpg",
        content: [
          "Structured cabling, Cloud Security Architecture/Engineering, Digital Transformation",
          "Data Protection, Data Analysis, Machine Learning, Natural Language Processing",
        ],
      },
    ],
  },
  {
    title: "Civil Works",
    icon: <Building2 size={28} />,
    description: "Structural, earthworks & industrial plant foundations.",
    intro:
      "We execute high-end civil and structural works to support industrial zones, facilities, and manufacturing plants with compliance to international codes.",
    sections: [
      {
        title: "Civil Construction Services",
        image: "/images/services/Civil Works/civil-section.jpg",
        content: [
          "Earthworks, grading, drainage, and soil stabilization",
          "Reinforced concrete: columns, slabs, and machinery pads",
          "Steel structure fabrication and site erection",
          "Perimeter fencing, culverts, and road access projects",
          "Compliance with ISO and industrial civil codes",
        ],
      },
    ],
  },
  {
    title: "Consultancy and Project Management",
    icon: <ClipboardList size={28} />,
    description: "Guiding mission-critical projects from idea to reality.",
    intro:
      "Our consultants bring decades of experience in managing infrastructure lifecycles from initial feasibility to handover, ensuring ROI and performance.",
    sections: [
      {
        title: "Technical Consultancy",
        image:
          "/images/services/Consultancy and Project Management/consulting-section.jpg",
        content: [
          "Feasibility reports and energy modeling",
          "Digital twin simulations and AI-assisted risk analysis",
          "Design validation and process improvement",
        ],
      },
      {
        title: "Project Management",
        image:
          "/images/services/Consultancy and Project Management/project-management-section.jpg",
        content: [
          "Turnkey management: planning to delivery",
          "Stakeholder engagement and reporting",
          "Earned value & performance tracking (EVM)",
        ],
      },
    ],
  },
  {
    title: "Instrumentations",
    icon: <GaugeCircle size={28} />,
    description: "Precision control, sensors, calibration and analytics.",
    intro:
      "We implement high-accuracy instrumentation frameworks supporting industrial automation, monitoring, and smart decision-making.",
    sections: [
      {
        title: "Instrumentation & Control Systems",
        lottie:
          "https://lottie.host/6c43f10c-0b82-4fed-9304-9a2bc59bf36c/N1qngua9Jj.json",
        content: [
          "Multivariable sensors (pressure, temp, vibration)",
          "PLC, SCADA, and HMI logic configuration",
          "Real-time analytics, alerting, diagnostics",
          "Calibration, loop checking, signal conditioning",
        ],
      },
    ],
  },
];

const Services = () => {
  // const [activeIndex, setActiveIndex] = useState(0);

  const searchParams = useSearchParams();
  const initialTab = parseInt(searchParams.get("tab") || "0", 10);
  const [activeIndex, setActiveIndex] = useState(initialTab);

  // inside Services component:
  const [showHero, setShowHero] = useState(false);
  const heroRef = useRef(null);

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
      {/* HERO */}
      {/* HERO */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="/images/services/servicesBanner.jpg"
          alt="Micbam Services"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-green-400 mb-4 drop-shadow-md">
              Our Services
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto drop-shadow">
              From engineering to automation, we power Africa’s industries with
              precision, innovation, and trust.
            </p>
          </motion.div>
        </div>
      </div>

      {/* TABS */}
      <div className="sticky top-0 z-10 bg-gray-100 shadow-sm">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="max-w-7xl mx-auto flex gap-4 px-4 py-6 sm:grid sm:grid-cols-3 lg:grid-cols-5">
            {services.map((service, idx) => (
              <motion.button
                key={service.title}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-xl min-w-[220px] sm:w-auto p-5 border-2 transition-all duration-300 ease-in-out
                    ${
                      activeIndex === idx
                        ? "bg-green-600 text-white border-green-600 shadow-md"
                        : "bg-white text-gray-700 border-gray-300 hover:border-green-400"
                    }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  {service.icon}
                  <h4 className="text-xs font-semibold leading-snug text-center">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-700 text-center">
                    {service.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h3 className="text-3xl font-bold text-green-700 mb-2">
            {services[activeIndex].title}
          </h3>
          <motion.p
            className="text-base text-gray-700 leading-relaxed mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {services[activeIndex].intro}
          </motion.p>
        </div>

        {services[activeIndex].sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1
                ? "md:flex-row-reverse md:[&>*:first-child]:order-2"
                : ""
            }`}
          >
            {/* IMAGE or LOTTIE */}
            {section.lottie ? (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md mx-auto"
              >
                {section.lottie.endsWith(".json") ? (
                  <Player
                    src={section.lottie}
                    autoplay
                    loop
                    style={{
                      width: "100%",
                      height: "400px",
                      background: "transparent",
                    }}
                  />
                ) : (
                  <DotLottieReact
                    src={section.lottie}
                    autoplay
                    loop
                    style={{
                      width: "100%",
                      height: "400px",
                      background: "transparent",
                    }}
                  />
                )}
              </motion.div>
            ) : (
              <div className="bg-transparent overflow-hidden rounded-lg shadow-lg border">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition duration-300 hover:scale-105"
                  priority={activeIndex === 0} // ✅ Only preload for visible section
                  loading={activeIndex === 0 ? "eager" : "lazy"} // 👌 Optional: be explicit
                />
              </div>
            )}

            {/* TEXT */}
            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-4">
                {section.title}
              </h4>
              <motion.ul
                className="list-disc list-inside text-gray-700 space-y-2 text-[15px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                {section.content.map((point, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
