"use client"

import React from 'react'
import { motion } from "motion/react"

const Dashboard = () => {
  return (
    <div className='w-full h-full'>
      <motion.video
        className='w-full h-full object-cover rounded-3xl pointer-events-none '
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
