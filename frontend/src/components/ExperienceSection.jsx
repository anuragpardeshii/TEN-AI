// import React, { useState } from 'react'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom';

const ExperienceSection = () => {
    // const [activeOption, setActiveOption] = useState("chatbot");

    const chatbotFeatures = [
        {
            title: "Context Awareness",
            desc: "Understands and remembers previous interactions for more personalized responses.",
        },
        {
            title: "Low Latency",
            desc: "Swift responses ensure smooth, real-time interactions without noticeable delays.",
        },
        {
            title: "Interruptibility",
            desc: "Users can seamlessly interrupt and direct conversations, enhancing natural interaction flow.",
        },
        {
            title: "Human-Like Voice",
            desc: "Emulates natural speech patterns and intonations, enhancing engagement and comprehension.",
        },
        {
            title: "Integration With APIs",
            desc: "Accesses external services to fetch real-time data or perform advanced tasks seamlessly.",
        },
    ];

    // const webcallFeatures = [
    //     {
    //         title: "Task Automation",
    //         desc: "Execute routine tasks (updating information, processing transactions, etc.) without human intervention.",
    //     },
    //     {
    //         title: "Personalised Interactions",
    //         desc: "Tailor responses and actions based on individual customer profiles and preferences.",
    //     },
    //     {
    //         title: "Instant Problem Solving",
    //         desc: "Identify and resolve issues in real-time, providing immediate solutions.",
    //     },
    //     {
    //         title: "Omnichannel Support",
    //         desc: "Seamlessly integrate with chat, email, and social media for consistent service across all channels.",
    //     },
    //     {
    //         title: "24/7 Availability",
    //         desc: "Offer round-the-clock support, ensuring customers can receive assistance anytime.",
    //     },
    // ];

    // const featuresToShow = activeOption === 'chatbot' ? chatbotFeatures : webcallFeatures;

    return (

        <>
            <section id='demo_details' className="w-full bg-[#020c39] py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Top Header */}
                    <div className="text-white mb-10 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
                            Enhance Every <br /> Role With AI
                        </h2>
                        <p className="mt-3 text-white/70 max-w-xl text-sm md:text-base">
                            Transform productivity for everyone—from sales agents to customer service representatives.
                        </p>

                        {/* Toggle buttons */}
                        <div className="mt-5 flex gap-3 justify-center lg:justify-start">
                            <button
                                // onClick={() => setActiveOption("chatbot")}
                                className={`px-4 py-1.5 rounded-full text-sm transition
                                    bg-[#0f1a49] text-white hover:bg-[#1c2a68]`}
                            >
                                {/* className={`px-4 py-1.5 rounded-full text-sm transition ${activeOption === "chatbot"
                                    ? "bg-blue-300 text-[#2d6cff]"
                                    : "bg-[#0f1a49] text-white hover:bg-[#1c2a68]"
                                    }`}
                            > */}
                                Try AI Agents
                            </button>
                            {/* <button
                                onClick={() => setActiveOption("webcall")}
                                className={`px-4 py-1.5 rounded-full text-sm transition ${activeOption === "webcall"
                                    ? "bg-blue-300 text-[#2d6cff]"
                                    : "bg-[#0f1a49] text-white hover:bg-[#1c2a68]"
                                    }`}
                            >
                                Try Webcall
                            </button> */}
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Left: Form Box */}
                        <div className="bg-[#2d6cff] place-content-center place-items-center text-white p-5 space-y-4 shadow-md">
                            <h3 className="text-base font-medium">
                                Enter your details to experience our AI agent
                            </h3>

                            {/* <div>
                                <label className="text-sm">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="mt-1 w-full border-b border-white/30 bg-transparent placeholder-white/70 text-white py-1 text-sm focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="mt-1 w-full border-b border-white/30 bg-transparent placeholder-white/70 text-white py-1.5 text-sm focus:outline-none"
                                />
                            </div> */}

                            <Link to='/sign-page' className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-9 has-[>svg]:px-3 z-50 cursor-pointer px-20 py-4 mt-6 text-[12px] text-black hover:text-white bg-white hover:bg-black rounded-full">
                               Click here to login →
                            </Link>
                            <Link></Link>
                        </div>

                        {/* Right: Features List */}
                        <div className="bg-white p-5 shadow-md">
                            <h3 className="text-lg font-semibold mb-3 text-black">Features</h3>
                            <ul className="space-y-3 text-gray-700 text-sm leading-snug">
                                {chatbotFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="text-[#2d6cff] w-4 h-4 mt-1" />
                                        <span>
                                            <strong>{feature.title}:</strong> {feature.desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};



export default ExperienceSection;
