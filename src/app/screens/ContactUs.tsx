"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  Building2,
  User,
  MailCheck,
  Smartphone,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import dynamic from "next/dynamic";
const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
});
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { FC } from "react";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Animate content on scroll
  const contentControls = useAnimation();
  const [contentRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) contentControls.start("visible");
  }, [inView]);

  // Animate Hero
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
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Email Submit
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_4d33ehe",
        "template_lfdeyhm",
        form.current!,
        "wA0KsWlJCand1JnEa"
      )
      .then(() => {
        setSuccess(true);
        form.current?.reset();
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  return (
    <section className="bg-white text-gray-800">
      {/* HERO */}
      <div className="relative w-full min-h-[75vh] lg:min-h-[85vh] xl:min-h-[80vh] 2xl:min-h-[87vh]">
        <Image
          src="/images/contact/contactBanner.jpg"
          alt="Contact Micbam"
          fill
          priority
          className="object-cover [object-position:center_47%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex items-center justify-center text-center px-4">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold tracking-tight text-green-500 mb-4 drop-shadow">
              Contact Us
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Do you have any questions, tips, or thoughts? Send us a message
              and we&apos;ll be in touch.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FORM + INFO */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        {/* LEFT: LOTTIE + FORM */}
        <div>
          <div className="mb-10">
            <Player
              autoplay
              loop
              src="https://lottie.host/f33ff742-08b0-4edf-bbcb-7f08cdb2a29f/Tf7YJTw4tO.json"
              style={{ height: "300px", width: "100%" }}
            />
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-6">
            Send a Message
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-white/50 backdrop-blur-md border border-gray-200 p-8 rounded-2xl shadow-sm transition-all"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputWithIcon Icon={User} name="user_name" placeholder="Full Name*" required />
              <InputWithIcon Icon={MailCheck} name="user_email" placeholder="Email Address*" type="email" required />
              <InputWithIcon Icon={Smartphone} name="user_phone" placeholder="Phone Number" />
              <InputWithIcon Icon={Briefcase} name="user_org" placeholder="Organisation" />
            </div>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-[14px] text-green-600" size={18} />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message*"
                className="pl-10 p-3 border border-gray-300 rounded-md w-full bg-white/80 focus:ring-2 focus:ring-green-500 outline-none transition-all"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition-all shadow"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
            {success && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-medium mt-2">
                ✅ Message sent successfully!
              </motion.p>
            )}
          </form>
        </div>

        {/* RIGHT: CONTACT INFO + MAPS */}
        <div className="space-y-10">
          <ContactBlock />
          <LocationBlock
            title="Headquarters – Nigeria"
            mapLink="https://maps.app.goo.gl/jQEmFjnA8FEUFnnA8"
            address={["37 Lagos-Abeokuta Expy, Ota 100011", "Ogun State, Nigeria"]}
            iframeSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6319490970454!2d3.246390174145773!3d6.316276725730017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e6b29e917d%3A0x47e10942e02a3121!2s37%20Lagos-Abeokuta%20Expy%2C%20Ota%20100011%2C%20Ogun%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1713809600416!5m2!1sen!2sng"
          />
          <LocationBlock
            title="United Kingdom Office"
            mapLink="https://maps.app.goo.gl/AyVhysrfWvB6Aq7D7"
            address={["27 Canal Road Strood,", "Kent, ME2 4DR", "United Kingdom"]}
            iframeSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.3387257572226!2d0.47003231574770324!3d51.39608147961771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b144460eaf3b%3A0xbfa87fc1a2c3dbb2!2s27%20Canal%20Rd%2C%20Rochester%20ME2%204DR%2C%20UK!5e0!3m2!1sen!2sng!4v1713816005436!5m2!1sen!2sng"
          />
        </div>
      </div>
    </section>
  );
};



type InputWithIconProps = {
  Icon: FC<{ size?: number; className?: string }>;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
};

const InputWithIcon = ({
  Icon,
  name,
  placeholder,
  type = "text",
  required = false,
}: InputWithIconProps) => (
  <div className="relative">
    <Icon className="absolute left-3 top-[14px] text-green-600" size={18} />
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="pl-10 p-3 border border-gray-300 rounded-md w-full bg-white/80 focus:ring-2 focus:ring-green-500 outline-none transition-all"
    />
  </div>
);


const ContactBlock = () => (
  <div className="space-y-5">
    <div>
      <h4 className="text-lg font-semibold text-green-700 flex items-center gap-2">
        <Mail size={18} /> Email
      </h4>
      <a href="mailto:info@micbam.com" className="text-gray-600 hover:underline">
        info@micbam.com
      </a>
    </div>
    <div>
      <h4 className="text-lg font-semibold text-green-700 flex items-center gap-2">
        <Phone size={18} /> Phone
      </h4>
      <div className="space-y-1 mt-1">
        <a href="tel:+2348104912513" className="text-gray-600 hover:underline block">
          +234 810 491 2513
        </a>
        <a href="tel:+2348033297723" className="text-gray-600 hover:underline block">
          +234 803 329 7723
        </a>
        <a href="tel:+447513367215" className="text-gray-600 hover:underline block">
          +44 7513 367215
        </a>
      </div>
    </div>
  </div>
);

type LocationBlockProps = {
  title: string;
  mapLink: string;
  address: string[];
  iframeSrc: string;
};

const LocationBlock = ({ title, mapLink, address, iframeSrc }: LocationBlockProps) => (
  <div>
    <h4 className="text-lg font-bold text-green-700 flex items-center gap-2">
      <Building2 size={18} /> {title}
    </h4>
    <a href={mapLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline block mt-1">
      {address.map((line, idx) => (
        <span key={idx}>
          {line}
          <br />
        </span>
      ))}
    </a>
    <div className="mt-3 rounded-xl overflow-hidden border shadow-md hover:shadow-lg transition-all">
      <iframe
        title={title}
        src={iframeSrc}
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

export default ContactUs;
