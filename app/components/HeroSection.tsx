"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import Dashboard from "./Dashboard"

const streams = ["Full Stack", "Web3", "AI / ML"]

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Use percentages for width to ensure responsiveness
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const width = useTransform(scrollYProgress, [0, 1], ["90%", "100%"])
  const maxWidth = useTransform(scrollYProgress, [0, 1], ["880px", "1200px"])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % streams.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col items-center pb-20 md:pb-32 overflow-hidden px-4 md:px-0">

      <div className="flex flex-col items-center max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto md:max-w-7xl pt-24 md:pt-32 text-center z-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl xl:text-[90px] 2xl:text-[130px] font-semibold leading-[1.1] md:leading-[1.05] tracking-tight flex flex-col items-center"
        >
          <span className="text-transparent bg-linear-to-b from-neutral-400 to-white bg-clip-text">
            Master
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={streams[index]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="block text-transparent bg-linear-to-b from-red-950 to-red-600 bg-clip-text"
            >
              {streams[index]}
            </motion.span>
          </AnimatePresence>
          <span className="text-transparent bg-linear-to-b from-neutral-400 to-white bg-clip-text">
            Development
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-neutral-400 text-sm md:text-base font-semibold mt-5 md:mt-7 px-4"
        >
          A beginner-friendly platform for mastering programming skills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="flex flex-col md:flex-row gap-4 mt-8 md:mt-10 w-full md:w-auto px-6 md:px-0">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.8)]  bg-neutral-800 px-6 py-3 text-white transition hover:bg-neutral-700 w-full md:w-auto">
            Explore Courses
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full shadow-[inset_0_-1px_2px_rgba(255,255,255,0.2),inset_0_1px_4px_rgba(0,0,0,0.8)]  bg-neutral-100 px-6 py-3 text-neutral-800 transition hover:bg-neutral-200 w-full md:w-auto">
            View Roadmap
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        style={{ y, width, maxWidth }}
        className="relative mt-16 md:mt-24 h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl z-10 mx-auto"
      >
        <Dashboard />
      </motion.div>
    </section>
  )
}
