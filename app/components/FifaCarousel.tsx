"use client"
import React, { useEffect, useRef, useMemo } from 'react'
import FifaCard from './FifaCard'
import { motion, useMotionValue, useSpring } from 'motion/react'

const alumniData = [
    {
        name: "Chaitanya Bajpai",
        photo: "/chaintanye.png",
        package: "200K",
        company: "Backpack"
    },
    {
        name: "Keshav bagade",
        photo: "/keshav.png",
        package: "180K",
        company: "Google"
    },
    {
        name: "Satyam shubham",
        photo: "/satyam.png",
        package: "155K",
        company: "Amazon"
    },
    {
        name: "Rahul Gujjar",
        photo: "/rahul.png",
        package: "165K",
        company: "Meta"
    },
    {
        name: "Suksham sharma",
        photo: "/messi.png",
        package: "190K",
        company: "Apple"
    },
    {
        name: "Aakash singh",
        photo: "/messi.png",
        package: "175K",
        company: "Netflix"
    }
]

const FifaCarousel = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const tripleAlumni = useMemo(() => [...alumniData, ...alumniData, ...alumniData, ...alumniData], [])


    const x = useMotionValue(0)
    const springX = useSpring(x, { stiffness: 400, damping: 40, mass: 1 })

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const scrollWidth = container.scrollWidth / 3


        x.set(-scrollWidth)

        const handleWheel = (e: WheelEvent) => {

            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault()
                x.set(x.get() - e.deltaX * 1.5)
            }
        }

        container.addEventListener('wheel', handleWheel, { passive: false })

        const unsubscribe = x.on('change', (latest) => {
            if (latest <= -scrollWidth * 2) {
                x.set(latest + scrollWidth)
            } else if (latest >= 0) {
                x.set(latest - scrollWidth)
            }
        })

        return () => {
            container.removeEventListener('wheel', handleWheel)
            unsubscribe()
        }
    }, [x])

    return (
        <div className="w-full max-w-5xl mx-auto py-12 overflow-hidden">
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />

                <motion.div
                    ref={containerRef}
                    className="flex gap-8 px-10 cursor-grab active:cursor-grabbing"
                    drag="x"
                    style={{ x: springX }}
                    onDragEnd={(_, info) => {
                    }}
                    onWheel={() => {
                    }}
                >
                    {tripleAlumni.map((alumni, index) => (
                        <div key={index} className="shrink-0">
                            <FifaCard
                                name={alumni.name}
                                photo={alumni.photo}
                                package={alumni.package}
                                company={alumni.company}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default FifaCarousel
