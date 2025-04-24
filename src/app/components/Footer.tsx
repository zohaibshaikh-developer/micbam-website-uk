"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { label: "Mechanical & Industrial Engineering", tab: 0 },
  { label: "Electrical & ICT Solutions", tab: 1 },
  { label: "Civil Works", tab: 2 },
  { label: "Consultancy", tab: 3 },
  { label: "Instrumentation", tab: 4 },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className="bg-gradient-to-br from-[#0c0c0c] via-[#121212] to-[#0f0f0f] text-gray-300 font-inter"
      role="contentinfo"
      aria-label="Site Footer"
    >
      {/* Main Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 border-b border-[#2a2a2a]"
      >
        {/* MICBAM & Address */}
        <div>
        <div className="flex items-center gap-3 mb-6">
  <img
    src="/icons/logo.jpg"
    alt="MNL Logo"
    className="h-[34px] w-auto object-cover rounded-md shadow-sm ring-1 ring-white/10"
  />
  <h3 className="text-2xl font-extrabold text-white tracking-tight font-sans">
    MICBAM
  </h3>
</div>


          <div className="space-y-4 text-[15px] leading-relaxed text-gray-400">
            <p className="flex items-start gap-2">
              <MapPin size={18} className="mt-1 text-green-500" />
              37 Lagos-Abeokuta Expressway,
              <br />
              Ota 100011, Ogun State, Nigeria
            </p>
            <p className="flex items-start gap-2">
              <MapPin size={18} className="mt-1 text-green-500" />
              27 Canal Road Strood, Kent ME2 4DR,
              <br />
              United Kingdom
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-green-500" />
              <a
                href="mailto:info@micbam.com"
                className="hover:text-green-400 transition"
              >
                info@micbam.com
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/company/micbam-nigeria-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Navigation - Company */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-5 tracking-wide">
            Company
          </h4>
          <ul className="space-y-3 text-[15px]">
            {["Home", "About", "Services", "Contact"].map((page) => (
              <li key={page}>
                <Link
                  href={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  className={`relative group inline-block transition duration-200 ${
                    pathname ===
                    (page === "Home" ? "/" : `/${page.toLowerCase()}`)
                      ? "text-green-400"
                      : "hover:text-green-400"
                  }`}
                >
                  <span>{page}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-green-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation - Services */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-5 tracking-wide">
            Our Services
          </h4>
          <ul className="space-y-3 text-[15px]">
            {services.map((service, i) => (
              <li key={i}>
                <Link
                  href={`/services?tab=${service.tab}`}
                  className="group relative inline-block hover:text-green-400 transition"
                >
                  <span>{service.label}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-green-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Micbam */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-5 tracking-wide">
            Why Micbam?
          </h4>
          <p className="text-[15px] text-gray-400 leading-relaxed">
            We deliver precision-engineered, scalable industrial solutions
            across Africa & the UK - trusted by global industry leaders for
            quality, innovation, and reliability.
          </p>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="py-5 text-center text-xs text-gray-500 bg-[#0a0a0a]">
        © {new Date().getFullYear()} Micbam Nigeria Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
