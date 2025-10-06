import Image from "next/image";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me3.jpg";
import Hr from "@/components/Hr";

function Title() {
  return (
    <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start ">
        <Hr/>
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
            <div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{ delay: 0.3 }}
                className="w-full h-full"
              >
                <Image
                  src={Me2}
                  alt="Siraj"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="w-full h-full"
              >
                <Image
                  src={Me3}
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
            Hey there, I&rsquo;m Siraj, a
            <span className="text-black dark:text-white font-medium"> tech enthusiast</span> and
            <span className="text-black dark:text-white font-medium">
              {" "}
              aspiring Web Developer
            </span>{" "}
            from <span className="text-black dark:text-white font-medium">
              Ambala, India.
            </span>{" "}
            Currently, I&rsquo;m pursuing my degree in{" "}
            <span className="text-black dark:text-white font-medium">
              Bachelor of Business Administration
            </span>{" "}
            at{" "}
            <span className="text-black dark:text-white font-medium">
              Lovely Professional University.
            </span>{" "}
            My passion for technology knows no bounds, and I specialize in
            working with <span className="text-black dark:text-white font-medium">ReactJS</span>{" "}
            and <span className="text-black dark:text-white font-medium">Node.js.</span>
            <br />
            <br />I have had the opportunity to work on exciting projects,
            including a{" "}
            <span className="text-black dark:text-white font-medium">PwC project</span> and a{" "}
            <span className="text-black dark:text-white font-medium">healthcare project</span>{" "}
            that I’m currently involved in. Beyond web development, I’m also
            deeply interested in{" "}
            <span className="text-black dark:text-white font-medium">AI.</span>
            <br />
            <br />
            My ultimate goal is to create my own{" "}
            <span className="text-black dark:text-white font-medium">AI-powered website</span>
            —something innovative and unique. Additionally, I aspire to develop{" "}
            <span className="text-black dark:text-white font-medium">
              mobile applications using React Native
            </span>{" "}
            to expand my expertise in the field.
            <br />
            <br />I believe that{" "}
            <span className="text-black dark:text-white font-medium">
              technology is not just about coding
            </span>
            , but about creating meaningful solutions. To fellow developers:{" "}
            <span className="text-black dark:text-white font-medium">
              Keep learning, keep building, and never stop pushing
              boundaries—because the future belongs to those who innovate!
            </span>
          </p>
          {/* <Card /> */}
        </motion.div>
      </div>
    </>
  );
}
