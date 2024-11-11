import profilePic from "../assets/GustavoProfile.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Gustavo Profile"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Gustavo Silva
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
              <motion.p
                variants={childVariants}
                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              >
                {HERO_CONTENT}
              </motion.p>
              <div className="flex flex-wrap justify-center gap-6 mb-10"></div>
              <motion.a
                variants={childVariants}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="relative"
              >
                <motion.span
                  variants={childVariants}
                  className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"
                ></motion.span>
                <motion.span
                  variants={childVariants}
                  className="font-bold relative inline-block h-full w-25 rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900"
                >
                  MEU CURRÍCULO
                </motion.span>
              </motion.a>
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
