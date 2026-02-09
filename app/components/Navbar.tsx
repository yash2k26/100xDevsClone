"use client"
import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import { motion, useSpring } from "motion/react"

const Navbar = () => {
  const rawY = useSpring(-80, {
    stiffness: 160,
    damping: 18,
    mass: 1.3,
  })

  const [Hoveractive, setHoveractive] = useState("Home")
  const [Clickactive, setClickactive] = useState("Home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    rawY.set(0)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [rawY])

  return (
    <motion.div
      style={{ y: rawY }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      className={`fixed top-0 left-0 right-0 z-50 w-full border-neutral-800/60 transition-all duration-500 border-b ${scrolled ? 'bg-black/60 backdrop-blur-xl ' : 'bg-neutral-900/40 backdrop-blur-md '}`}>
      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-10 py-3 flex items-center justify-between relative">
        <motion.div
          whileHover="hover"
          className='cursor-pointer'>
          <Logo />
        </motion.div>

        <div className='hidden gap-8 absolute left-1/2 -translate-x-1/2 lg:flex '>
          {['Home', 'Courses', 'Store'].map(item => (
            <button
              key={item}
              onMouseEnter={() => setHoveractive(item)}
              onMouseLeave={() => setHoveractive(Clickactive)}
              onClick={() => setClickactive(item)}
              className={`text-md relative px-3 py-1.5 font-sans cursor-pointer transition-colors ${Clickactive === item ? "text-black" : "text-white"} `}
            >
              {
                Hoveractive === item && (
                  <motion.div
                    layoutId='nav-bubble'
                    className='absolute inset-0 rounded-full bg-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] '
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )
              }
              {
                Clickactive === item && (
                  <motion.div
                    layoutId='nav-bubble1'
                    className='absolute inset-0 rounded-full bg-white shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.5)]'
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )
              }
              <span className='relative z-10 '>{item}</span>
            </button>
          ))}
        </div>

        <div className='lg:hidden '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </div>

        <div className='gap-3 hidden lg:flex ml-auto font-sans ' >
          <button className='text-md transition hover:bg-neutral-900/50 rounded-full px-3 py-1.5 text-white/70 hover:text-white'>
            Log In
          </button>
          <button className='text-md transition bg-neutral-50 text-black px-3 py-1.5 rounded-full font-medium shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.8)] '>
            Sign Up
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
