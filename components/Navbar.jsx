"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "@/app/about/components/ThemeToggle";

const navLinks = [
  { label: "Home",     href: "/#home",    num: "01" },
  { label: "About",    href: "/about",    num: "02" },
  { label: "Projects", href: "/projects", num: "03" },
  { label: "Contact",  href: "/contact",  num: "04" },
];

const menuVariants = {
  closed: { opacity: 0, x: "100%" },
  open:   { opacity: 1, x: 0, transition: { type: "tween", duration: 0.35, ease: [0.76, 0, 0.24, 1] } },
  exit:   { opacity: 0, x: "100%", transition: { type: "tween", duration: 0.28, ease: [0.76, 0, 0.24, 1] } },
};

const linkVariants = {
  closed: { opacity: 0, y: 30 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.07, type: "spring", stiffness: 300, damping: 28 },
  }),
};

const MobileMenu = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 z-[48] bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Slide-in panel */}
        <motion.div
          className="fixed top-0 right-0 z-[49] h-full w-[80vw] max-w-sm flex flex-col"
          style={{
            background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
            borderLeft: "1px solid rgba(99,179,237,0.15)",
          }}
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="exit"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #63b3ed 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #805ad5 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-all duration-200"
              aria-label="Close menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Brand */}
          <motion.div
            className="px-8 mb-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-blue-400/70 mb-1">Portfolio</p>
            <h2 className="text-2xl font-bold text-white">Siraj Aalam</h2>
          </motion.div>

          {/* Nav links */}
          <nav className="flex flex-col px-8 gap-1 flex-1">
            {navLinks.map(({ label, href, num }, i) => (
              <motion.div key={label} custom={i} variants={linkVariants} initial="closed" animate="open">
                <Link
                  href={href}
                  onClick={onClose}
                  className="group flex items-center gap-4 py-4 border-b border-white/5 hover:border-blue-400/30 transition-all duration-300"
                >
                  <span className="text-xs font-mono text-blue-400/50 group-hover:text-blue-400 transition-colors duration-300 w-6">
                    {num}
                  </span>
                  <span className="text-2xl font-bold text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    {label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer */}
          <motion.div
            className="px-8 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
          >
            <p className="text-xs text-white/30 tracking-wider">Full Stack Developer · 3+ yrs</p>
          </motion.div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

function getBackHref(pathname) {
  if (pathname === "/about") return "/#about";
  if (pathname === "/projects") return "/#projects";
  if (pathname.startsWith("/projects/")) return "/projects";
  if (pathname === "/contact") return "/#contact";
  return null;
}

const Navbar = () => {
  const navRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => setIsNavOpen((v) => !v);
  const closeNav = () => setIsNavOpen(false);

  // Close menu on route change
  useEffect(() => { closeNav(); }, [pathname]);

  const backHref = getBackHref(pathname);

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar px-5 md:px-24 w-screen fixed transition-all ease duration-300 inset-0 flex flex-row justify-between items-center h-16 z-50
          bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50`}
      >
        {/* Left: back button + brand */}
        <div className="flex flex-row items-center gap-3">
          {backHref && (
            <Link
              href={backHref}
              className="flex justify-center items-center w-8 h-8 rounded-full
                bg-gray-100 dark:bg-gray-800
                border border-gray-200 dark:border-gray-600
                shadow-sm hover:shadow-md
                text-gray-700 dark:text-gray-200
                hover:-translate-x-0.5 hover:scale-110
                transition-all duration-200 ease-in-out"
              title="Go back"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
            </Link>
          )}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Siraj Aalam
          </h1>
        </div>

        {/* Right: theme toggle + hamburger */}
        <div className="flex flex-row items-center gap-4">
          <ThemeToggle />

          {/* Hamburger — mobile only */}
          <button
            className="flex md:hidden flex-col justify-center items-center w-10 h-10 rounded-lg
              bg-gray-100 dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              gap-1.5 transition-all duration-200 hover:scale-105"
            onClick={toggleNav}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300
                bg-gray-800 dark:bg-gray-100
                ${isNavOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300
                bg-gray-800 dark:bg-gray-100
                ${isNavOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300
                bg-gray-800 dark:bg-gray-100
                ${isNavOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <MobileMenu isOpen={isNavOpen} onClose={closeNav} />
    </>
  );
};

export default Navbar;
