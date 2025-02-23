"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { motion } from "framer-motion";

export default function MaintenancePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-xl shadow-lg p-10 max-w-xl text-center border border-gray-300"
      >
        {/* Company Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-3 tracking-wide"
        >
          Micbam
        </motion.h1>

        {/* Under Construction Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl font-semibold text-gray-700 flex items-center justify-center gap-2"
        >
          <MdConstruction className="text-yellow-500 text-3xl" /> Website Is
          Under Construction
        </motion.h2>

        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.6 }}
  className="text-gray-600 mt-3 text-lg"
>
  We&apos;re making improvements to provide you with the best experience.
  Stay tuned!
</motion.p>


        {/* Contact Info */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg font-medium text-gray-700 mt-6"
        >
          For inquiries, contact us at:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-lg font-semibold text-gray-900"
        >
          support@micbam.com
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center gap-6 mt-5 text-gray-500"
        >
          <a href="#" className="hover:text-gray-700 text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-700 text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-700 text-2xl">
            <FaTwitter />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
