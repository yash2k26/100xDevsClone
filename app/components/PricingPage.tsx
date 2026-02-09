import PricingCard from "./PricingCard"

const PricingPage = () => {
    return (
        <section className='bg-black text-white relative py-20 md:py-48 px-4 md:px-6'>
            <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center">
                <h2 className=" text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-semibold text-transparent bg-linear-to-b from-neutral-600 to-white bg-clip-text tracking-tighter">
                    Invest in your future
                </h2>
                <p className="mt-3 text-neutral-400 max-w-2xl mx-auto text-lg xl:text-xl">
                    Choose the plan that fits your learning journey.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-5xl xl:max-w-5xl 2xl:max-w-5xl lg:max-w-4xl mx-auto gap-8 mt-12">
                <PricingCard
                    image="/course-2.jpg"
                    Heading="Full-Stack + DevOps"
                    subheading="Master the complete lifecycle of a modern web application."
                    price='3,999'
                    oldprice="5,999"
                    badge="Foundation"
                    features={[
                        "Next.js 15 & TypeScript",
                        "Docker & Kubernetes",
                        "CI/CD Pipelines",
                        "System Design Basics"
                    ]}
                />

                <PricingCard
                    image="/course-1.jpg"
                    Heading="100xSchool Combined"
                    subheading="Our most comprehensive path to becoming a top 1% engineer."
                    price='5,999'
                    oldprice="8,999"
                    badge="Most Popular"
                    features={[
                        "Everything in Full-Stack",
                        "Web3 & Blockchain Deep Dive",
                        "AI/ML Foundational Track",
                        "Placement Assistance"
                    ]}
                />

                <PricingCard
                    image="/course-3.jpg"
                    Heading="Web3 & Blockchain"
                    subheading="Build decentralized apps on Solana and Ethereum."
                    price='3,999'
                    oldprice="5,999"
                    badge="Trending"
                    features={[
                        "Rust & Solana Core",
                        "Solidity Smart Contracts",
                        "DeFi Protocol Design",
                        "Web3 Auth & Security"
                    ]}
                />

                <PricingCard
                    image="/course-4.jpg"
                    Heading="AI / ML Foundation"
                    subheading="Integrate intelligent models into your production apps."
                    price='3,999'
                    oldprice="5,999"
                    features={[
                        "Large Language Models",
                        "RAG Implementation",
                        "Vector Databases",
                        "Fine-tuning Techniques"
                    ]}
                />
            </div>
        </section>
    )
}

export default PricingPage
