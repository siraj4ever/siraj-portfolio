import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedLine = ({ width, className = "" }) => (
  <div
    className={`relative overflow-hidden rounded-full h-1 bg-red-700 ${className}`}
    style={{ width }}
  >
    <motion.div
      className="absolute top-0 left-0 h-full w-8"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
      }}
      animate={{
        x: ["-150%", "350%"],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </div>
);

export default function Hr({ variant }) {
  return (
    <>
      {variant === "long" ? (
        <>
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <AnimatedLine width="7rem" className="mb-3" />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              opacity: 1,
              x: -50,
            }}
            transition={{
              delay: 0.4,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <AnimatedLine width="7rem" />
          </motion.div>
        </>
      ) : (
        <div className="flex justify-center items-center flex-col my-5">
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <AnimatedLine width="5rem" className="mb-2" />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 150,
            }}
            whileInView={{
              opacity: 1,
              x: 40,
            }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <AnimatedLine width="5rem" />
          </motion.div>
        </div>
      )}
    </>
  );
}

AnimatedLine.propTypes = {
  width: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Hr.propTypes = {
  variant: PropTypes.oneOf(["short", "long"]),
};

Hr.defaultProps = {
  variant: "short",
};
