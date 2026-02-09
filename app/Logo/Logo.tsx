"use client"
import { motion } from "motion/react"

export default function Logo() {
  return (
    <motion.svg
      viewBox="0 0 800 200"
      className="lg:w-[130px] w-[100px] group"
      xmlns="http://www.w3.org/2000/svg"
      whileHover="hover"
    >
      <motion.text
        x="10"
        y="140"
        className="fill-[#dee4ea] font-bold text-[120px]"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        100
      </motion.text>
      <motion.text
        x="220"
        y="140"
        className="fill-red-500 font-bold text-[120px]"
        style={{ fontFamily: "Arial, Helvetica, sans-serif", originX: "50%", originY: "50%" }}
        initial={{ y: 0 }}
        variants={{
          hover: {
            y: -50,
            transition: {
              type: "spring",
              stiffness: 380,
              damping: 35
            }
          }
        }}
      >
        x
      </motion.text>
      <motion.text
        x="290"
        y="140"
        className="fill-[#dee4ea] font-bold text-[120px]"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        Devs
      </motion.text>
    </motion.svg>
  );
}