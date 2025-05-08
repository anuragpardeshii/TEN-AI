import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const features = [
    {
        img: "/Worldclas.png",
        title: "World-Class Talent",
        desc: "We are a powerhouse of AI and full-stack engineering experts ready to move your project into production.",
    },
    {
        img: "/Cost.png",
        title: "50% Cost",
        desc: "We bring in top-tier Silicon Valley-caliber expertise at just 50% of the cost.",
    },
    {
        img: "/True.png",
        title: "True Partners",
        desc: "We collaborate with you in agile sprints—strategizing and co-developing every step of the way.",
    },
    {
        img: "/Bar.png",
        title: "Proven AI Success",
        desc: "From nimble startups to global enterprises, we've deployed and scaled Agentic AI solutions that drive real results.",
    },
];

const StartupFolder = () => {
    return (
        <>
            {/* Features Section */}
            <div className="dark:border-t-4 dark:w-[80%] dark:place-self-center"></div>
            <section className="bg-[#f4f4f6] dark:bg-black px-6 py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start max-md:items-center gap-10 mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold md:w-1/2">
                            Why Founders <br className="hidden md:block" />
                            Choose us?
                        </h2>
                        <p className="text-gray-500 text-[14px] md:mt-9 md:w-1/2">
                            <span className="block">
                                We get it—building impactful Agentic AI solutions on a
                            </span>
                            startup budget is tough. That's where we come in.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {features.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                className="transition flex flex-col items-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="mb-4 flex justify-center items-center w-full"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full max-h-56 object-contain transition-transform"
                                    />
                                </motion.div>

                                <div className="hover:shadow-lg dark:hover:shadow-accent-foreground p-4 text-center w-full transition">
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="dark:border-b-4 dark:w-[80%] dark:place-self-center"></div>
            {/* Outcomes Section */}
            <section className=" py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-2">Outcomes</h2>
                    <p className="text-gray-500 mb-12">
                        The startup grows, becomes successful, and expands its business
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-200 p-8 rounded-lg">
                        {/* Outcome 1 */}
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <div ref={ref} className="flex flex-col items-center space-y-4">
                                    <div className="bg-lime-300 p-4 rounded-full">
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M17 3H3a1 1 0 00-1 1v14l5-2 5 2 5-2 5 2V4a1 1 0 00-1-1z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-4xl font-bold">
                                        {inView && <CountUp end={10} duration={2} />}+
                                    </h3>
                                    <p className="text-gray-600">Trusted by 10+ Startups</p>
                                </div>
                            )}
                        </InView>

                        {/* Outcome 2 */}
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <div ref={ref} className="flex flex-col items-center space-y-4">
                                    <div className="bg-lime-300 p-4 rounded-full">
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-4xl font-bold">
                                        {inView && <CountUp end={100} duration={2} />}%+
                                    </h3>
                                    <p className="text-gray-600">Return on Investment</p>
                                </div>
                            )}
                        </InView>

                        {/* Outcome 3 */}
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <div ref={ref} className="flex flex-col items-center space-y-4">
                                    <div className="bg-lime-300 p-4 rounded-full">
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M11 3H9v2H7v2h2v2h2V7h2V5h-2V3zm-1 10a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-4xl font-bold">
                                        {inView && <CountUp end={8} duration={2} />}
                                    </h3>
                                    <p className="text-gray-600">Idea to MVP in 8 weeks</p>
                                </div>
                            )}
                        </InView>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StartupFolder;
