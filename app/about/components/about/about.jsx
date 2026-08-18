import Image from "next/image";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Hr from "@/components/Hr";

function Title() {
  return (
    <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start ">
        <Hr />
        <h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Title />
      <div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
        <div className="flex justify-center items-start flex-col mb-5 ">
          <div className="images relative w-full  aspect-square">
            <div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                className="w-full h-full"
              >
                <Image
                  src={Me1}
                  alt="Siraj"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="flex justify-center items-start flex-col mb-5 md:px-10"
          initial={{
            opacity: 0,
            x: 200,
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
          <h2 className="text-2xl font-bold tracking-wider mb-3">Siraj</h2>
          <p className="text-gray-600 dark:text-gray-200 text-justify title text-lg">
            Hi, I’m{" "}
            <span className="text-black dark:text-white font-medium">
              Siraj
            </span>
            , a
            <span className="text-black dark:text-white font-medium">
              {" "}
              tech enthusiast
            </span>{" "}
            and
            <span className="text-black dark:text-white font-medium">
              {" "}
              aspiring Web Developer
            </span>{" "}
            from
            <span className="text-black dark:text-white font-medium">
              {" "}
              Ambala, India
            </span>
            , passionate about building web solutions that make a difference.
            <br />
            <br />
            I’ve completed my{" "}
            <span className="text-black dark:text-white font-medium">
              Bachelor of Business Administration (BBA)
            </span>{" "}
            at
            <span className="text-black dark:text-white font-medium">
              {" "}
              Lovely Professional University
            </span>{" "}
            and specialize in
            <span className="text-black dark:text-white font-medium">
              {" "}
              ReactJS
            </span>{" "}
            and
            <span className="text-black dark:text-white font-medium">
              {" "}
              Node.js
            </span>
            , creating modern and scalable applications.
            <br />
            <br />
            I’ve worked on impactful projects, including a{" "}
            <span className="text-black dark:text-white font-medium">
              PwC project
            </span>
            ,{" "}
            <span className="text-black dark:text-white font-medium">
              healthcare platform
            </span>
            , and I’m currently working on{" "}
            <span className="text-black dark:text-white font-medium">
              PDVSA (oil & gas)
            </span>
            . I’m also deeply interested in{" "}
            <span className="text-black dark:text-white font-medium">
              Artificial Intelligence
            </span>{" "}
            and plan to create innovative, AI-powered applications.
            <br />
            <br />
            In the future, I aim to expand into{" "}
            <span className="text-black dark:text-white font-medium">
              mobile app development using React Native
            </span>
            .
            <br />
            <br />I believe technology is about{" "}
            <span className="text-black dark:text-white font-medium">
              solving real problems and creating meaningful impact
            </span>
            , and I’m constantly exploring new ways to innovate.
          </p>
          {/* <Card /> */}
        </motion.div>
      </div>
    </>
  );
}
