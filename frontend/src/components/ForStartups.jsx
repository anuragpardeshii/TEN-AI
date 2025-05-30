import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Reveal = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};

const ForStartups = () => {
    const rotatingScaleWords = ["Scale Faster", "Scale Smarter", "Scale Better", "Scale Seamlessly", "Scale Confidently"];
    const [scaleIndex, setScaleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScaleIndex((prevIndex) => (prevIndex + 1) % rotatingScaleWords.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section className="w-full min-h-[60vh] text-white px-6 pt-24 bg-[#001D4A] place-content-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px] opacity-40" />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <Reveal>
                        <h1 className="text-5xl md:text-6xl mb-2 font-bold leading-tight">
                            AI Partner for Startups
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-3xl md:text-4xl font-bold text-lime-400 mb-4 h-[48px]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={rotatingScaleWords[scaleIndex]}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="inline-block"
                                >
                                    {rotatingScaleWords[scaleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </p>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <p className="text-lg max-md:text-sm text-gray-200 max-w-2xl mx-auto mb-10">
                            Your full-stack partner, co-developing Agentic AI solutions
                        </p>
                        <Link to="/sign-page" className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-white hover:text-blue-800 transition font-medium">
                            Get Started
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="relative w-full px-6 py-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-0 opacity-25" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-3xl font-semibold text-center mb-2">Our Offerings</h2>
                        <p className="text-sm text-gray-500 text-center max-w-3xl mx-auto mb-12">
                            Leverage our AI expertise to build your end-to-end products
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Quick Integration",
                                desc: "Plug-and-play AI agents ready to embed in your product.",
                            },
                            {
                                title: "No ML Engineers Needed",
                                desc: "Skip hiring headaches. Let your team ship AI features fast.",
                            },
                            {
                                title: "Scalable from Day One",
                                desc: "Start small, scale seamlessly. Nurix grows with your startup.",
                            },
                        ].map((item, i) => (
                            <Reveal key={item.title} delay={0.1 * i}>
                                <div className="p-6 rounded-xl border hover:shadow-md transition dark:hover:shadow-white  bg-opacity-80 backdrop-blur-sm">
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.5}>
                        <div className="mt-24 text-center">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                Launch your AI-powered startup with confidence.
                            </h2>
                            <p className="text-gray-500 mb-6">
                                Let us handle the infrastructure while you focus on your product.
                            </p>
                            <Link to='/contact-us' className="px-6 py-3 rounded-full bg-lime-500 text-black hover:bg-lime-400 transition font-semibold">
                                Connect with Us
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
};

export default ForStartups;
