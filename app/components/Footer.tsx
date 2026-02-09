export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 mt-30 w-full bg-black pt-20 pb-20 overflow-hidden flex flex-col items-center">
            <div className="relative w-full max-w-6xl px-6 pb-20 z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-12 md:gap-8">
                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold tracking-tight text-white">100</span>
                            <span className="text-2xl font-bold text-red-600">x</span>
                            <span className="text-2xl font-bold tracking-tight text-white">Devs</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-[13px] font-medium text-neutral-400">
                        <a href="#" className="transition hover:text-white underline-offset-4 hover:underline">Terms & Conditions</a>
                        <a href="#" className="transition hover:text-white underline-offset-4 hover:underline">Privacy Policy</a>
                        <a href="#" className="transition hover:text-white underline-offset-4 hover:underline">Refund & Cancellation</a>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="flex gap-4">
                            {socials.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 transition hover:bg-neutral-800 hover:border-neutral-700"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>

                        <p className="text-[12px] text-neutral-500 font-medium tracking-wide">
                            © 2026 100xDevs. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full select-none pointer-events-none mt-10 flex justify-center px-10 md:px-20">
                <h1 className="text-center text-[16vw] font-black tracking-tighter uppercase leading-none flex items-baseline">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-600 via-neutral-800 to-transparent">100</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-800/50 via-red-900/50 to-transparent">x</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-600 via-neutral-800 to-transparent">Devs</span>
                </h1>
            </div>

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-50" />
        </footer>
    )
}

const socials = [
    {
        label: "YouTube",
        href: "#",
        icon: (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                    fill="white"
                    d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.6a3 3 0 0 0-2.1 2.1A31 31 0 0 0 1.8 12a31 31 0 0 0 .6 4.8 3 3 0 0 0 2.1 2.1c1.8.6 7.5.6 7.5.6s5.7 0 7.5-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.2 12a31 31 0 0 0-.6-4.8ZM10.2 15.3V8.7l5.4 3.3-5.4 3.3Z"
                />
            </svg>
        ),
    },
    {
        label: "Twitter",
        href: "#",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.1 12.1 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.32 5.7 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54 12.1 12.1 0 0 0 8.56 21c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 22.46 6Z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10Zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 21h4V9H3v12ZM9 9h3.8v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9V9Z" />
            </svg>
        ),
    },
]
