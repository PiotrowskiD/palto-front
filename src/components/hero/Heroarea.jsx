import { motion } from "framer-motion";

export default function Heroarea() {
  return (
    <div
      className={
        "heroarea-wrapper flex max-w-[100vw] w-[100%] items-end fixed top-[0] left-[0] z-[-1]"
      }
      id={"heroarea"}
    >
      <div className="text flex w-[100%] flex-col justify-center items-center mb-[80px] 996px:px-[16px]">
        <motion.h1
          className={
            "font-[800] text-[100px] text-center leading-[95px] tracking-[-3px] uppercase text-[#FEFDFB] 996px:text-[60px] 996px:leading-[60px] 600px:text-[36px] 600px:leading-[36px]"
          }
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1],
          }}
        >
          We make AI freelancing <br className={"600px:hidden"} />
          easy and stress-free.
        </motion.h1>
        <motion.p
          className={
            "font-[500] text-[32px] text-[#FEFDFB] mt-[16px] 996px:text-center 600px:text-[24px] 600px:leading-[31.2px]"
          }
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1],
          }}
        >
          Focus on getting the work done and start living a balanced life.
        </motion.p>
        <motion.button
          className="btn-primary mt-[40px] 600px:mt-[48px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.9,
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1],
          }}
        >
          Start living!
        </motion.button>
      </div>
    </div>
  );
}
