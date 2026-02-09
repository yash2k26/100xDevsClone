"use client"
import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import { motion, useSpring, AnimatePresence } from "motion/react"
import { X } from 'lucide-react'

const Navbar = () => {
  const rawY = useSpring(-80, {
    stiffness: 300,
    damping: 25,
    mass: 0.8,
  })

  const [Hoveractive, setHoveractive] = useState("Home")
  const [Clickactive, setClickactive] = useState("Home")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    rawY.set(0)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [rawY])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <motion.div
      style={{ y: rawY }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 w-full border-neutral-800/60 transition-all duration-500 border-b ${scrolled ? 'bg-black/60 backdrop-blur-xl ' : 'bg-neutral-900/40 backdrop-blur-md '}`}>
      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-10 py-3 flex items-center justify-between relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{  duration: 0.3 }}
          whileHover="hover"
          className='cursor-pointer'>
          <Logo />
        </motion.div>

        <div className='hidden gap-8 absolute left-1/2 -translate-x-1/2 lg:flex '>
          {['Home', 'Courses', 'Store'].map((item, idx) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
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
            </motion.button>
          ))}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='lg:hidden relative z-50'
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            )}
          </motion.div>
        </button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className='gap-3 hidden lg:flex ml-auto font-sans ' >
          <button className='text-md transition hover:bg-neutral-900/50 rounded-full px-3 py-1.5 text-white/70 hover:text-white'>
            Log In
          </button>
          <button className='text-md transition bg-neutral-50 text-black px-3 py-1.5 rounded-full font-medium shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.8)] '>
            Sign Up
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 top-[60px] bg-black/98 backdrop-blur-xl lg:hidden z-40"
          >
            <div className="flex flex-col h-full p-6 gap-4">
              <div className="flex flex-col gap-2 mt-4">
                {['Home', 'Courses', 'Store'].map((item, idx) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => {
                      setClickactive(item)
                      setMobileMenuOpen(false)
                    }}
                    className={`text-left text-sm font-semibold py-3 px-5 rounded-xl transition-all ${Clickactive === item
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-neutral-900'
                      }`}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3 pb-6">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className='w-full py-1.5 rounded-full bg-neutral-800 text-white font-semibold text-base hover:bg-neutral-700 transition-colors'
                >
                  Log In
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className='w-full py-1.5 rounded-full bg-white text-black font-semibold text-base hover:bg-neutral-100 transition-colors'
                >
                  Sign Up
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar
