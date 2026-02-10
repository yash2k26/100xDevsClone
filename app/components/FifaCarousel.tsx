"use client"
import React, { useEffect, useRef, useMemo, useState } from 'react'
import FifaCard from './FifaCard'
import { motion } from 'motion/react'

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
        photo: "/suksham.png",
        package: "190K",
        company: "Apple"
    },
    {
        name: "Aakash singh",
        photo: "/aakash.png",
        package: "175K",
        company: "Netflix"
    }
]

const FifaCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const nextSlide = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % alumniData.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + alumniData.length) % alumniData.length)
    }

    const getVisibleCards = () => {
        const cards = []
        for (let i = -2; i <= 2; i++) {
            const index = (currentIndex + i + alumniData.length) % alumniData.length
            // Use stable key based on data index to prevent remounting
            cards.push({ ...alumniData[index], position: i, key: index })
        }
        return cards
    }

    const visibleCards = getVisibleCards()

    return (
        <div className="w-full max-w-7xl mx-auto py-20 px-6">
            <div className="relative h-[500px] flex items-center justify-center">
                <button
                    onClick={prevSlide}
                    className="absolute left-4 md:left-10 z-50 w-12 h-12 rounded-full bg-neutral-900/80 border border-neutral-700 flex items-center justify-center text-white hover:bg-neutral-800 transition-all hover:scale-110"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="relative w-full h-full flex items-center justify-center perspective-[2000px]">
                    {visibleCards.map((card) => {
                        const position = card.position
                        const absPosition = Math.abs(position)

                        const x = position * 220
                        const scale = 1 - absPosition * 0.15
                        const zIndex = 50 - absPosition
                        const rotateY = position * -5

                        // Hide the edges to mask the teleport/mounting
                        const opacity = absPosition >= 2 ? 0 : 1 - absPosition * 0.3

                        return (
                            <motion.div
                                key={card.key}
                                animate={{
                                    x,
                                    scale,
                                    opacity,
                                    rotateY,
                                    zIndex,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 25,
                                    mass: 1,
                                }}
                                className="absolute"
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <FifaCard
                                    name={card.name}
                                    photo={card.photo}
                                    package={card.package}
                                    company={card.company}
                                />
                            </motion.div>
                        )
                    })}
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 md:right-10 z-50 w-12 h-12 rounded-full bg-neutral-900/80 border border-neutral-700 flex items-center justify-center text-white hover:bg-neutral-800 transition-all hover:scale-110"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                    {alumniData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1)
                                setCurrentIndex(index)
                            }}
                            className={`h-1.5 rounded-full transition-all ${index === currentIndex
                                ? 'w-8 bg-red-500'
                                : 'w-1.5 bg-neutral-600 hover:bg-neutral-500'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FifaCarousel
