import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Me4 from "@/public/image/me4.jpeg";
import Me1 from "@/public/image/me1.jpg";
import Me3 from "@/public/image/me3.jpg";

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
        {children}
      </motion.div>
    </div>
  );
}

export default function Education() {
  return (
    <Wrapper>
      <section className="grid gap-8 md:gap-12">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Education
          </h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Get to know more about my educational background.
          </p>
        </div>
        <div className="grid gap-8 md:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="px-5">
              <div className="font-medium text-lg">2022 - Present</div>
              <div>
                <h2 className="font-semibold text-xl">
                  Lovely Professional University
                </h2>
                <h3 className="text-md font-normal mb-3">
                  Bachelor of Business Administration (BBA)
                </h3>
                <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
                  <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                    <Image
                      src={Me1}
                      width={400}
                      height={225}
                      alt="University"
                      className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                    <Image
                      src={Me3}
                      width={400}
                      height={225}
                      alt="University"
                      className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                    <Image
                      src={Me4}
                      width={400}
                      height={225}
                      alt="University"
                      className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-justify text-gray-800 dark:text-gray-200">
                    Currently pursuing a Bachelor of Business Administration
                    (BBA) with a focus on business management and working as a
                    web developer in IT field.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start px-5 md:px-0">
              <h2 className="font-semibold text-xl mt-7">Achievements</h2>
              <p className="text-md font-normal mb-3 md:mb-12">
                At this time, I am focused on improving my skills and gaining
                experience in various projects.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="px-5">
              <div className="font-medium text-lg">2016 - 2018</div>
              <div>
                <h2 className="font-semibold text-xl">Chandigarh University</h2>
                <h3 className="text-md font-normal mb-3">
                  Bachelor of Computer Applications
                </h3>
                <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
                  <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                    <Image
                      src={Me1}
                      width={400}
                      height={225}
                      alt="University"
                      className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                    <Image
                      src={Me4}
                      width={400}
                      height={225}
                      alt="University"
                      className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                    <Image
                      src={Me3}
                      width={400}
                      height={225}
                      alt="University"
                      className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-justify text-gray-800 dark:text-gray-200">
                    I graduated from Chandigarh University in 2019, with a
                    strong academic foundation and hands-on involvement in
                    various projects. I have led campaigns aimed at raising
                    awareness about the IT industry, demonstrating my commitment
                    to the field and helping others understand its impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start px-5 md:px-0">
              <h2 className="font-semibold text-xl mt-7">Achievements</h2>
              <p className="text-md font-normal mb-3 md:mb-12">
                Some of my achievements during my study.
              </p>
              <div className="flex items-center gap-4 mb-5">
                <div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
                  <FontAwesomeIcon
                    icon={faMedal}
                    className="text-white h-5 w-5"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Campaign Awareness Award</h3>
                  <p className="text-sm">
                    leading and executing an impactful campaign to raise
                    awareness about the IT industry | Nov 2017
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
                  <FontAwesomeIcon
                    icon={faMedal}
                    className="text-white h-5 w-5"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Best Hosting Appreciation</h3>
                  <p className="text-sm">
                    Awarded for outstanding performance in hosting events and
                    engaging the audience | Oct 2017
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
