"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

interface FifaCardProps {
  name: string
  photo: string
  package: string
  company: string
  stats?: { value: string; label: string }[]
}

const FifaCard = ({ name, photo, package: pkg, company, stats }: FifaCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    const rotateXValue = (mouseY / (rect.height / 2)) * -15
    const rotateYValue = (mouseX / (rect.width / 2)) * 15
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  const defaultStats = [
    { value: pkg, label: "PKG" },
    { value: "99", label: "SYS" },
    { value: "99", label: "WEB 3" },
    { value: "95", label: "API" },
    { value: "97", label: "DB" },
  ]

  const displayStats = stats || defaultStats

  return (
    <div className="perspective-[1000px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-[260px] h-[380px] select-none cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-800 rounded-3xl" />
        <div className="absolute inset-[3px] bg-gradient-to-b from-neutral-950 via-black to-neutral-950 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[40px] -translate-y-16 font-black text-neutral-800/50 tracking-tighter whitespace-nowrap">
              100
              <span className='text-red-800/50'>X</span>
              DEVS
            </span>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.06),transparent_60%)]" />
          <div className="absolute top-0 left-0 right-0 h-[55%]">
            <div className="absolute top-3 left-3 z-20 flex flex-col items-center">
              <span className="text-3xl font-black text-neutral-200 leading-none drop-shadow-lg">{pkg}</span>
              <span className="text-[10px] font-bold text-red-500/80 tracking-wider">USD</span>
            </div>
            <div className="absolute top-3 right-3 z-20">
              <div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center shadow-lg border border-neutral-700">
                <span className="text-[7px] font-bold text-neutral-300 text-center leading-tight uppercase">{company}</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140px] h-[140px]">
              <Image
                draggable={false}
                src={photo}
                alt={name}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[45%] flex flex-col">
            <div className="relative bg-gradient-to-r from-transparent via-neutral-800 to-transparent py-2 mt-1 border-t border-b border-red-900/30">
              <h3 className="text-center text-sm font-black text-neutral-100 tracking-wide uppercase">
                {name}
              </h3>
            </div>
            <div className="flex-1 px-3 py-2">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                {displayStats.map((stat, index) => (
                  <div key={index} className="flex justify-between ">
                    <span className="font-bold text-neutral-200">{stat.value}</span>
                    <span className="text-red-500/70 font-semibold ">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-xl border border-neutral-700/50 pointer-events-none" />
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        </div>
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)",
            transform: "translateZ(1px)"
          }}
        />
      </motion.div>
    </div>
  )
}

export default FifaCard
