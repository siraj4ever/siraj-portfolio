import Hr from "@/components/Hr";
import { motion } from "framer-motion";

function Title() {
  return (
    <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start">
        <Hr />
        <motion.h1
          className="text-3xl font-bold mt-3"
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.7,

            type: "spring",
          }}
        >
          Experience
        </motion.h1>
      </div>
    </div>
  );
}

function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
      <motion.div
        className="flex justify-center items-start flex-col mb-5 "
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.5,

          type: "spring",
        }}
      >
        <section className="grid gap-8 md:gap-12">
          <div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
            {children}
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <Title />
      <Wrapper>
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg text-black dark:text-white">
            Dec 2022 - Present
          </div>
          <div>
            <h3 className="font-semibold text-xl text-black dark:text-white">
              Techbit Solutions Pvt Ltd
            </h3>
            <h4 className="font-light text-md mb-4">Web Developer</h4>
            <p className="text-justify text-gray-800 dark:text-gray-200">
              Collaborate with teams to design, develop, and maintain web
              applications. Develop frontend and backend. Deploy applications on
              AWS, ensuring secure, scalable, and efficient operations. Provide
              ReactJS training and guidance to junior developers. and issuing
              completion certificates.
            </p>

            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded-2xl">
                ReactJS
              </div>
              <div className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded-2xl">
                Redux
              </div>
              <div className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded-2xl">
                NextJS
              </div>
              <div className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded-2xl">
                NodeJS
              </div>
              <div className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded-2xl">
                PostgreSQL
              </div>
              <div className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded-2xl">
                MongoDB
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
