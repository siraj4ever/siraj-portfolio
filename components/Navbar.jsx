"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "@/app/about/components/ThemeToggle";

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleItemClick = () => {
    setIsNavOpen(false);
  };
  const navVariant = {
    open: {
      clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(0px at calc(100% - 120px) 35px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };
  useEffect(() => {
    const updateScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check and event listener
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  // Check screen width and adjust clipPath for smaller screens
  if (isMobile) {
    (navVariant.open = {
      clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
      transition: {
        type: "tween",
      },
    }),
      (navVariant.closed = {
        clipPath: "circle(0px at calc(100% - 35px) 35px)",
        transition: {
          delay: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 40,
        },
      });
  } else {
    (navVariant.open = {
      clipPath: `circle(2444px at calc(100% - 40px) 40px)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    }),
      (navVariant.closed = {
        clipPath: "circle(0px at calc(100% - 120px) 35px)",
        transition: {
          delay: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 40,
        },
      });
  }
  const itemVariants = {
    open: (custom) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        delay: custom,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    }),
    closed: {
      opacity: 0,
      x: -80,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <motion.div
        className={`fixed z-[45] right-0 flex items-center justify-center backdrop-blur-sm transition-all ease duration-700 overflow-hidden`}
        variants={navVariant}
        animate={isNavOpen ? "open" : "closed"}
        initial={false}
      >
        <div className="relative backdrop-blur-sm opacity-95 flex flex-col items-center space-x-8 min-h-[100vh] bg-gray-700 min-w-[100vw] ">
          <div className="flex flex-col items-center space-y-8 my-auto mx-0">
            {/* title */}
            <motion.h1
              variants={itemVariants}
              animate={isNavOpen ? "open" : "closed"}
              className="text-6xl font-bold text-white "
            >
              Menu
            </motion.h1>
            <a href="/#home">
              <div
                className="text-2xl font-bold text-white"
                onClick={handleItemClick}
              >
                <motion.h2
                  className="text-white hover:text-red-900 transition-colors duration-300"
                  variants={itemVariants}
                  animate={isNavOpen ? "open" : "closed"}
                  custom={0.1}
                >
                  Home
                </motion.h2>
              </div>
            </a>
            <Link href="/about">
              <div
                onClick={handleItemClick}
                className="text-2xl font-bold text-white"
              >
                <motion.h2
                  className="text-white hover:text-red-900 transition-colors duration-300"
                  variants={itemVariants}
                  animate={isNavOpen ? "open" : "closed"}
                  custom={0.2}
                >
                  About
                </motion.h2>
              </div>
            </Link>
            <Link href="/projects">
              <div
                onClick={handleItemClick}
                className="text-2xl font-bold text-white"
              >
                <motion.h2
                  className="text-white hover:text-red-900 transition-colors duration-300"
                  variants={itemVariants}
                  animate={isNavOpen ? "open" : "closed"}
                  custom={0.3}
                >
                  Projects
                </motion.h2>
              </div>
            </Link>
            <a href="/#contact">
              <div
                onClick={handleItemClick}
                className="text-2xl font-bold text-white"
              >
                <motion.h2
                  className="text-white hover:text-red-900 transition-colors duration-300"
                  variants={itemVariants}
                  animate={isNavOpen ? "open" : "closed"}
                  custom={0.4}
                >
                  Contact
                </motion.h2>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Navbar = () => {
  const navRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar px-5 md:px-24 w-screen fixed transition-colors ease duration-500 ${
          isNavOpen
            ? "backdrop-filter backdrop-blur-md bg-gray-700 bg-opacity-50"
            : "backdrop-filter backdrop-blur-md"
        } inset-0  bg-opacity-50 flex flex-row justify-between items-center h-16 z-50 `}
      >
        <div>
          <h1
            className={`text-2xl ml-2 md:ml-0 transition-colors ease duration-500 ${
              isNavOpen ? "text-white" : ""
            }`}
          >
            Siraj Aalam
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <button
            className="block md:hidden burger button flex flex-col justify-center items-center space-y-1.5 "
            onClick={toggleNav}
          >
            <div
              className={`w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${
                isNavOpen ? "rotate-45   bg-white translate-y-[2px]" : ""
              }`}
            ></div>
            <div
              className={`w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${
                isNavOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
              }`}
            ></div>
          </button>
          <ThemeToggle />
        </div>
      </nav>
      {/* items */}
      <NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  );
};
export default Navbar;

// "use client";
// import { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const PersonalDetails = ({ isNavOpen, setIsNavOpen }) => {
//   const detailsVariant = {
//     open: {
//       clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     },
//     closed: {
//       clipPath: "circle(0px at calc(100% - 120px) 35px)",
//       transition: {
//         delay: 0.5,
//         type: "spring",
//         stiffness: 400,
//         damping: 30,
//       },
//     },
//   };

//   return (
//     <>
//       <motion.div
//         className="fixed z-[45] right-0 flex items-center justify-center backdrop-blur-sm transition-all ease-in-out duration-700 overflow-hidden"
//         variants={detailsVariant}
//         animate={isNavOpen ? "open" : "closed"}
//         initial={false}
//       >
//         <div className="relative backdrop-blur-lg bg-gray-800 text-white opacity-95 flex flex-col items-center space-y-6 min-h-screen w-full p-8 md:p-16">
//           {/* Title */}
//           <motion.h1
//             className="text-4xl font-extrabold tracking-widest text-gray-100"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             Personal Details
//           </motion.h1>

//           {/* Personal Information */}
//           <motion.div
//             className="bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg w-full max-w-md text-center"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             <p className="text-lg font-semibold">👤 Name: <span className="font-normal">Siraj Aalam</span></p>
//             <p className="text-lg font-semibold">📧 Email: <span className="font-normal">siraj@example.com</span></p>
//             <p className="text-lg font-semibold">📍 Location: <span className="font-normal">India</span></p>
//             <p className="text-lg font-semibold">💼 Profession: <span className="font-normal">Web Developer</span></p>
//             <p className="text-lg font-semibold">📅 Experience: <span className="font-normal">5+ Years</span></p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// const Navbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <>
//       <nav
//         className={`navbar px-6 md:px-24 fixed w-full transition-colors ease-in-out duration-500 ${
//           isNavOpen
//             ? "backdrop-filter backdrop-blur-lg bg-gray-900 bg-opacity-80"
//             : "backdrop-filter backdrop-blur-lg"
//         } inset-0 flex justify-between items-center h-16 z-50`}
//       >
//         {/* Logo / Name */}
//         <h1 className="text-2xl font-bold text-gray-100">Siraj Aalam</h1>

//         {/* Menu Button */}
//         <button
//           className="flex flex-col justify-center items-center space-y-1.5"
//           onClick={toggleNav}
//         >
//           <div
//             className={`w-10 h-1 bg-white rounded-full transition-all ease-in-out duration-300 ${
//               isNavOpen ? "rotate-45 translate-y-[6px] bg-red-500" : ""
//             }`}
//           ></div>
//           <div
//             className={`w-10 h-1 bg-white rounded-full transition-all ease-in-out duration-300 ${
//               isNavOpen ? "-rotate-45 -translate-y-[6px] bg-red-500" : ""
//             }`}
//           ></div>
//         </button>
//       </nav>

//       {/* Personal Details Component */}
//       <PersonalDetails isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
//     </>
//   );
// };

// export default Navbar;
