"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus } from 'lucide-react'

const faqData = [
    {
        question: "Is this course for beginners?",
        answer: "Yes! The 0-100 course is designed to take you from absolute zero to a pro. We cover everything from basic HTML/CSS to advanced system design and Web3."
    },
    {
        question: "Will I get a certificate?",
        answer: "Every student who completes the projects and the final assessment receives a 100xDevs certification that is recognized by our hiring partners."
    },
    {
        question: "What are the prerequisites?",
        answer: "The only prerequisite is a laptop and a hunger to learn. We've had students from non-tech backgrounds successfully transition into high-paying engineering roles."
    },
    {
        question: "Can I access the content later?",
        answer: "Once you purchase a course, you have lifetime access to the recorded sessions, code repositories, and our private Discord community."
    },
    {
        question: "Is there a refund policy?",
        answer: "We offer a 7-day no-questions-asked refund policy. If you feel the course isn't for you, just drop us an email and we'll process it immediately."
    }
]

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-24 mt-10 bg-black px-6 md:px-10">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-4xl xl:text-6xl font-semibold text-transparent bg-linear-to-b from-neutral-600 to-white bg-clip-text tracking-tighter mb-16"
                >
                    Frequently Asked Questions
                </motion.span>

                <div className="w-full space-y-4">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${openIndex === index
                                    ? 'bg-neutral-900 border-neutral-700 shadow-lg'
                                    : 'bg-neutral-950/50 border-neutral-800 hover:border-neutral-700'
                                    }`}
                            >
                                <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                                    {item.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    className={`shrink-0 ${openIndex === index ? 'text-red-500' : 'text-neutral-500'}`}
                                >
                                    <Plus className="w-6 h-6" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-3 text-neutral-400 leading-relaxed text-md">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq
