"use client"

import React from 'react'
import { motion } from "motion/react"

const Dashboard = () => {
  return (
    <div className='w-full h-full'>
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className='w-full h-full object-cover rounded-2xl md:rounded-3xl pointer-events-none'
        autoPlay
        loop
        playsInline
        preload='none'
        muted
      >
        <source src='/harkirat.mp4' />
      </motion.video>
    </div>
  )
}

export default Dashboard
