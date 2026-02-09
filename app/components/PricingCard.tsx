import React from 'react'
import * as motion from "motion/react-client"
import { Check, ArrowRight } from 'lucide-react'

const PricingCard = ({ image, Heading, subheading, price, oldprice, features, badge }: {
    image: string,
    Heading: string
    subheading: string,
    price: string,
    oldprice: string,
    features: string[],
    badge?: string
}) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5 }}
            className='group bg-neutral-900/50 backdrop-blur-md border border-neutral-800/50 flex flex-col rounded-3xl overflow-hidden hover:shadow-neutral-300/15 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.05)] h-full'
        >
            <div className='p-6 flex flex-col gap-6 h-full'>
                <div className='relative overflow-hidden rounded-2xl bg-neutral-950/50 aspect-video flex items-center justify-center'>
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        draggable={false}
                        className='w-full h-full object-contain pointer-events-none'
                        src={image}
                        alt={Heading}
                    />
                </div>

                <div className='flex flex-col gap-4 flex-1'>
                    <div className='flex flex-col gap-1 min-h-[110px]'>
                        <h1 className='text-2xl font-bold text-white '>{Heading}</h1>
                        <h3 className='text-sm text-neutral-400 leading-relaxed'>{subheading}</h3>
                    </div>

                    <div className='space-y-2 py-2 min-h-[140px] hidden md:flex-col md:flex '>
                        {features.map((feature, index) => (
                            <div key={index} className='flex items-center gap-2 text-sm text-neutral-300'>
                                <Check className='w-4 h-4 text-red-500' />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className='mt-auto pt-4 border-t border-neutral-800/50 flex flex-col gap-1'>
                        <span className='text-neutral-500 text-[10px] font-bold uppercase tracking-widest'>Special Offer</span>
                        <div className='flex items-baseline gap-2'>
                            <span className='text-3xl font-bold text-white'>₹{price}</span>
                            <span className='text-sm text-neutral-500 line-through'>₹{oldprice}</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 mt-2'>
                        <button className='w-full xl:w-[90%] mx-auto xl:py-3 py-1.5 cursor-pointer rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group/btn'>
                            Buy Now
                            <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' />
                        </button>
                        <button className='w-full xl:w-[90%] mx-auto xl:py-3 py-1.5 cursor-pointer rounded-full bg-neutral-800/50 border border-neutral-700/50 text-white font-medium hover:bg-neutral-800 transition-all'>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PricingCard
