"use client"
import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import {
    Trophy,
    Rocket,
    Users2,
    ShieldCheck,
    Target,
    TrendingUp,
    Cpu,
    Sparkles,
    MousePointer2,
    Zap
} from 'lucide-react'

const SpotlightCard = ({ children, className = "", span = "" }: { children: React.ReactNode, className?: string, span?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const { left, top } = containerRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - left)
        mouseY.set(e.clientY - top)
    }

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-neutral-800/50 bg-neutral-900/30 backdrop-blur-xl overflow-hidden ${span} ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                    radial-gradient(
                    600px circle at ${mouseX}px ${mouseY}px,
                    rgba(239, 68, 68, 0.1),
                    transparent 80%
                    )
          `,
                }}
            />
            {children}
        </motion.div>
    )
}

function useMotionTemplate(strings: TemplateStringsArray, ...values: any[]) {
    return useTransform(values, (latestValues) => {
        return strings.reduce((acc, str, i) => {
            return acc + str + (latestValues[i] ?? "")
        }, "")
    })
}

const Features = () => {
    return (
        <section className="py-32 bg-black px-6 md:px-10 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mt-10 text-transparent bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text tracking-tighter"
                    >
                        The 100<span className='text-red-500'>x</span> Difference
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-500 mt-5 text-md md:text-lg max-w-2xl leading-tight"
                    >
                        Stop following tutorials. Start building production-ready systems <br className='hidden md:block' /> that handle real-world scale.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[300px]">

                    <SpotlightCard span="md:col-span-3 lg:col-span-7 md:row-span-2">
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 rounded-2xl bg-neutral-400/10 flex items-center justify-center text-red-500 mb-6">
                                <Rocket className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl  font-bold text-white mb-4 tracking-tight">
                                High-Intensity Engineering
                            </h3>
                            <p className="text-neutral-400 leading-relaxed text-md max-w-md">
                                No fluff. Move through deep technical concepts at breakneck speed. We build the architecture, not just the code.
                            </p>

                            <div className="mt-auto pt-8">
                                <div className="rounded-xl bg-black/50 border border-neutral-800 p-4 font-mono text-sm overflow-hidden">
                                    <div className="flex gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-green-400">~/100xdevs <span className="text-white">$</span> npm run deploy</p>
                                        <p className="text-neutral-500">› Optimizing system design...</p>
                                        <p className="text-neutral-500">› Scaling clusters...</p>
                                        <p className="text-red-400 animate-pulse ">› 100x performance achieved.</p>
                                        <motion.p className="text-neutral-500 text-lg "> | </motion.p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard span="md:col-span-3 lg:col-span-5 md:row-span-1">
                        <div className="relative z-10 flex items-start gap-6 pb-20">
                            <div className="w-12 h-12 rounded-2xl bg-neutral-300/10 flex items-center justify-center text-red-500 shrink-0">
                                <Users2 className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Elite Community</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Join 10,000+ engineers building the future. Collaborate on real production-scale projects.
                                </p>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 md:left-8 flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-neutral-800 overflow-hidden">
                                    <div className="w-full h-full bg-linear-to-br from-neutral-700 to-neutral-500" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-black bg-neutral-900 flex items-center justify-center text-[10px] text-neutral-400 font-bold">
                                +10k
                            </div>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard span="md:col-span-3 lg:col-span-5 md:row-span-1">
                        <div className="relative z-10 flex items-start gap-6 pb-20">
                            <div className="w-12 h-12 rounded-2xl bg-neutral-400/10 flex items-center justify-center text-red-500 shrink-0">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white  mb-2 tracking-tight">Peak Performance</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Master sub-millisecond response times and high-performance databases.
                                </p>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 md:left-8 flex items-end gap-1 h-8">
                            {[80, 160, 60, 120, 70, 145, 70, 130].map((h, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [`${h}%`, `${h * 0.8}%`, `${h}%`] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                    className="w-2 rounded-sm bg-red-500/20"
                                />
                            ))}
                        </div>
                    </SpotlightCard>

                    <SpotlightCard span="md:col-span-6 lg:col-span-4 md:row-span-1">
                        <div className="relative z-10 flex flex-col h-full min-h-[140px]">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-neutral-400/10 flex items-center justify-center text-red-500">
                                    <Cpu className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white tracking-tight">Built for Builders</h3>
                            </div>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                We bridge the gap between learning and hiring at high-growth startups.
                            </p>

                        </div>
                    </SpotlightCard>

                    <SpotlightCard span="md:col-span-6 lg:col-span-8 md:row-span-1">
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center h-full gap-6 md:gap-8">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-neutral-400/10 flex items-center justify-center text-red-500 lg:w-24 lg:h-24">
                                <Trophy className="w-6 h-6 md:w-10 md:h-10" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">The Top 1% Pipeline</h3>
                                <p className="text-neutral-400 text-sm md:text-base max-w-lg">
                                    Curriculum designed to push you beyond the basics. We don't just teach code; we build elite engineers.
                                </p>
                            </div>

                            <div className="hidden md:flex flex-col items-center justify-center border-l border-neutral-800 pl-8 ml-auto">
                                <span className="text-3xl lg:text-5xl font-black text-white leading-none tracking-tighter">0.1%</span>
                                <span className="text-neutral-500 text-[8px] lg:text-[10px] uppercase font-bold tracking-widest mt-2 whitespace-nowrap">Selection Rate</span>
                            </div>
                        </div>
                    </SpotlightCard>

                </div>
            </div>
        </section>
    )
}

export default Features
