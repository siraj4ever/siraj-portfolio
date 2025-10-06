"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/legacy/image";
// import "../globals.css";
import { motion } from "framer-motion";
import Link from "next/link";

// components
import Button from "@/components/Button";
import Me from "@/public/image/me.jpg";
import MeAbout from "@/public/image/me2.jpg";
import Setup from "@/public/image/setup.jpg";
import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
  const fullpageOptions = {
    anchors: ["home", "about", "projects", "contact"],
    scrollingSpeed: 1000,
    licenseKey: "gplv3-license",
    menu: "#sidebar",
    lockAnchors: false,
  };

  return (
    <div>
      <ReactFullpage
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20">
                <motion.div
                  className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                  }}
                >
                  <div className="block md:hidden col-span-1 mx-auto my-10">
                    {/* <div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease duration-300">
                      <Image
                        src={Me}
                        width={500}
                        height={500}
                        className="rounded-full w-full h-full object-cover "
                        alt="Siraj"
                        placeholder="blur"
                      />
                    </div> */}
                  </div>
                  <motion.h3
                    className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                    }}
                  >
                    Siraj
                  </motion.h3>
                  <motion.h1
                    className="text-black dark:text-white text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5 whitespace-nowrap"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                    }}
                  >
                    Full Stack Developer
                  </motion.h1>
                  <Hr />
                  <motion.p
                    className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.4,
                      type: "spring",
                    }}
                  >
                    Full Stack Developer with 3+ years of experience building
                    scalable web applications using React.js, Next.js, Node.js,
                    PostgreSQL, and MongoDB. Skilled in frontend-backend
                    integration.
                  </motion.p>
                  <motion.div
                    className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                    }}
                  >
                    <Link
                      href={"/docs/siraj-resume.pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                      locale={false}
                      download
                    >
                      <Button variation="primary">Download CV</Button>
                    </Link>
                    <a href="#contact">
                      <Button variation="secondary">Let’s Connect</Button>
                    </a>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="hidden md:flex col-span-1 mx-auto justify-center items-center "
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.7,
                    type: "spring",
                  }}
                ></motion.div>
              </div>
            </div>
            <div className="section">
              <div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden">
                <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
                  <motion.div
                    className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
                    initial={{
                      x: 300,
                      opacity: 0,
                      z: -100,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      z: 0,
                    }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={MeAbout}
                      layout="fill"
                      className="object-cover"
                      alt="Siraj"
                      placeholder="blur"
                    />
                  </motion.div>
                </div>
                <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
                  <motion.h1
                    className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black dark:text-white text-5xl md:text-8xl font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                    }}
                  >
                    About Me
                  </motion.h1>
                  <Hr />
                  <motion.p
                    className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                    }}
                  >
                    <p className="title text-xl mt-4 tracking-wider text-gray-900 dark:text-gray-100 leading-[1.7rem] mb-5 ">
                      A brief introduction about me and{" "}
                      <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
                        {" "}
                        my interest.
                      </span>
                    </p>
                  </motion.p>
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                    }}
                  >
                    <Link href="/about">
                      <Button variation="primary">Click Here</Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
                <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
                  <motion.div
                    className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 "
                    initial={{
                      x: 300,
                      opacity: 0,
                      z: -100,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      z: 0,
                    }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={ProjectAll}
                      layout="fill"
                      className="object-cover"
                      alt="Siraj Setup"
                      placeholder="blur"
                    />
                  </motion.div>
                </div>
                <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
                  <motion.h1
                    className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black dark:text-white text-5xl md:text-8xl font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                    }}
                  >
                    My Projects
                  </motion.h1>
                  <Hr />
                  <motion.p
                    className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5 w-3/4"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                    }}
                  >
                    A showcase of my recent work, including healthcare
                    platforms, client workflow applications.
                  </motion.p>
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                    }}
                  >
                    <Link href="/projects">
                      <Button variation="primary">Click Here</Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="relative md:h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
                <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
                  <motion.h1
                    className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black dark:text-white text-5xl md:text-6xl font-bold mb-3"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                    }}
                  >
                    Let’s Connect
                  </motion.h1>
                  <Hr />
                  <motion.p
                    className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                    }}
                  >
                    Feel free to contact me, Let&apos;s build something awesome
                    together!
                  </motion.p>
                  <motion.p
                    className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                    }}
                  ></motion.p>
                  {/* icons */}
                  <div className="flex justify-center items-center space-x-4">
                    <motion.a
                      href="mailto:itzsiraj143@gmail.com?subject=Hello&body=I%20wanted%20to%20contact%20you."
                      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        y: { delay: 0.1 },
                        opacity: { delay: 0.2 },
                      }}
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
                    </motion.a>

                    <motion.a
                      href="https://github.com/siraj4ever"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        y: { delay: 0.2 },
                        opacity: { delay: 0.3 },
                      }}
                    >
                      <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/siraj-aalam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        y: { delay: 0.4 },
                        opacity: { delay: 0.5 },
                      }}
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
        {...fullpageOptions}
      />
    </div>
  );
};

export default MyPage;
