"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const contacts = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "sirajaalam.work@gmail.com",
    href: "mailto:sirajaalam.work@gmail.com?subject=Hello&body=I%20wanted%20to%20contact%20you.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: faGithub,
    label: "GitHub",
    value: "github.com/siraj4ever",
    href: "https://github.com/siraj4ever",
    color: "from-gray-600 to-gray-800",
    external: true,
  },
  {
    icon: faLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/siraj-aalam",
    href: "https://www.linkedin.com/in/siraj-aalam/",
    color: "from-blue-600 to-blue-800",
    external: true,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 22 } },
};

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="relative min-h-screen overflow-hidden" style={{ zIndex: 1 }}>
      {/* Hero section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-24 pb-16">
        <motion.p
          className="uppercase text-xs tracking-[0.4em] text-blue-500 dark:text-blue-400 mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Get in touch
        </motion.p>

        <motion.h1
          className="text-5xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-none"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 25 }}
        >
          Let&apos;s<br />Connect
        </motion.h1>

        <motion.p
          className="text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed mb-14"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          Have a project in mind, a question, or just want to say hello?
          I&apos;m always open to new opportunities and conversations.
        </motion.p>

        {/* Contact cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {contacts.map(({ icon, label, value, href, color, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex items-start gap-4 p-5 rounded-2xl
                bg-white dark:bg-gray-800/60
                border border-gray-200 dark:border-gray-700/50
                shadow-sm hover:shadow-xl
                transition-all duration-300 cursor-pointer"
            >
              {/* Icon circle */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
                <FontAwesomeIcon icon={icon} className="text-white text-lg" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-0.5">{label}</p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {value}
                </p>
              </div>

              {/* Arrow */}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors duration-200 mt-1 text-xs flex-shrink-0"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Availability badge */}
        <motion.div
          className="flex items-center gap-2 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Available for freelance & full-time opportunities
          </p>
        </motion.div>
      </section>
    </main>
  );
}
