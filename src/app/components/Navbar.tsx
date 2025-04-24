"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define styling logic
  const isLight = isHome || scrolled;
  const brandColor = isLight ? "text-gray-900" : "text-white";
  const linkColor = isLight ? "text-gray-800" : "text-white";
  const bgColor =
    isHome || scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.15)";
  const boxShadow = isHome || scrolled ? "0 2px 10px rgba(0,0,0,0.06)" : "none";

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: bgColor,
        backdropFilter: "blur(10px)",
        boxShadow: boxShadow,
        paddingTop: scrolled ? "0.5rem" : "1rem",
        paddingBottom: scrolled ? "0.5rem" : "1rem",
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 z-50 transition-all"
    >
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand (Logo + Text) */}
        <Link href="/" className="flex items-center gap-2">
  <img
    src="/icons/logo.jpg"
    alt="MNL Logo"
    className="h-[32px] w-auto object-cover rounded-md shadow-sm"
  />
  <span
    className={`text-2xl font-extrabold tracking-wide uppercase transition duration-300 ${brandColor}`}
  >
    MICBAM
  </span>
</Link>


        {/* Desktop Links */}
        <div
          className={`hidden md:flex space-x-10 text-sm font-semibold tracking-wide uppercase ${linkColor}`}
        >
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="transition-all group-hover:text-green-500">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-all ${linkColor}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 px-4 py-5 space-y-4 text-sm font-semibold tracking-wide text-gray-800 uppercase"
          >
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
