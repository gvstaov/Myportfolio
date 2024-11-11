import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";
import { SiCsharp } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tecnologias
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <div className="p4">
          <SiMongodb className="text-7xl " />
        </div>
        <div className="p-4">
          <FaPython className="text-7xl" />
        </div>
        <div className="p-4">
          <DiJsBadge className="text-7xl " />
        </div>
        <div className="p-4">
          <SiCsharp className="text-7xl " />
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
