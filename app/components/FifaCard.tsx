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
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 rounded-3xl shadow-2xl" />
        <div className="absolute inset-[2px] bg-gradient-to-b from-neutral-950 via-black to-neutral-950 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[42px] -translate-y-16 font-black text-neutral-800/40 tracking-[-0.05em] whitespace-nowrap" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              100
              <span className='text-red-900/40'>X</span>
              DEVS
            </span>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_65%)]" />
          <div className="absolute top-0 left-0 right-0 h-[55%]">
            <div className="absolute top-4 left-4 z-20 flex flex-col items-center gap-0.5">
              <span className="text-4xl font-black text-white leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>{pkg}</span>
              <span className="text-[9px] font-bold text-red-400 tracking-[0.15em]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>USD</span>
            </div>
            <div className="absolute top-4 right-4 z-20">
              <div className="w-11 h-11 rounded-md bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center shadow-xl border border-neutral-600/50">
                <span className="text-[7.5px] font-bold text-neutral-100 text-center leading-tight uppercase tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{company}</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[145px] h-[145px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              <Image
                draggable={false}
                src={photo}
                alt={name}
                fill
                className="object-cover object-top"
                quality={100}
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[45%] flex flex-col">
            <div className="relative bg-gradient-to-r from-transparent via-neutral-800/80 to-transparent py-2.5 mt-1 border-t border-b border-red-800/40">
              <h3 className="text-center text-[13px] font-black text-white tracking-[0.05em] uppercase drop-shadow-md" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {name}
              </h3>
            </div>
            <div className="flex-1 px-4 py-2.5">
              <div className="grid grid-cols-2 gap-x-5 gap-y-1.5 text-[11px]">
                {displayStats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-black text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{stat.value}</span>
                    <span className="text-red-400/80 font-bold tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-3xl border border-neutral-600/40 pointer-events-none" />
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
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
