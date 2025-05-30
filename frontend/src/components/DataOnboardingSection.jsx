import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

// ✅ Checkpoint Component
const Checkpoint = ({ children }) => (
    <div className="flex items-start space-x-3">
        <FaCheckCircle className="text-blue-600 mt-1" />
        <p className="text-gray-700">{children}</p>
    </div>
);

// ✅ Tab Content Component
const TabContent = ({ title, description, points }) => {
    return (
        <div>
            <span className="bg-lime-400 text-black px-2 py-1 text-[10px] rounded-full">
                {title}
            </span>
            <h2 className="text-2xl mt-4 mb-4">{title}</h2>
            <p className="text-gray-600 text-xs mb-4">{description}</p>
            <div className="space-y-2 text-[12px]">
                {points.map((point, index) => (
                    <Checkpoint key={index}>{point}</Checkpoint>
                ))}
            </div>
        </div>
    );
};

// ✅ Main Component
const DataIngestionSection = () => {
    const [activetab, setactivetab] = useState('ingestion');

    const Tabs = [
        { id: 'ingestion', label: 'Data Onboaring' },
        { id: 'embedding', label: 'Data Harmonization' },
        { id: 'monitoring', label: 'Security & Impliance' },
    ];

    const content = {
        ingestion: {
            title: 'Rapid Data Onboarding',
            description:
            'We start by quickly identifying all relevant data assets across your organisation, from databases and data warehouses to content repositories and external APIs. Our pre-built connectors allow us to establish secure connections to these sources in a matter of days, not weeks or months. We then use advanced data integration techniques like:'    ,
                    points: [
                'Schema mapping to automatically match data fields',
                'Deduplicate records and resolve conflicts',
                'Incremental loading to keep data fresh and up-to-date',

            ],

            image: '/Data.png',
        },
        embedding: {
            title: 'Comprehensive Data Harmonization',
            description:
            'Once the data is flowing, our team gets to work harmonising it into a clean, consistent format that Gen AI models can understand. We:',
                        points: [
                'Normalise data structures and semantics',
                'Deduplicate records and resolve conflicts',
                'Annotate data with rich metadata',

            ],
            
            image: '/Hamorization.png',
        },
        monitoring: {
            title: 'Robust Security and Compliance',
            description:
            'Security and compliance are paramount when integrating data for Gen AI. We adhere to industry-leading standards like:',  
                     points: [
                'AICPA SOC 2 Type 2 and SSAE 18 for data security',
                'THIPAA and GDPR for privacy and protected data',
                'OWASP coding practices for secure software development',
            ],
            image: '/Security.png',
        },
    };

    // ✨ Scroll Reveal Refs & Hooks
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true, margin: '-100px' });

    const contentRef = useRef(null);
    const contentInView = useInView(contentRef, { once: true, margin: '-100px' });

    return (
        <div id='system-integration' className="min-h-4 bg-blue-950 mt-8 text-gray-800 font-sans">
            {/* ✅ Hero Section */}
            <section className="py-12 px-4 md:px-12 lg:px-32">
                <motion.div
                    ref={heroRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
                        {/* Left Side: Heading + Tabs */}
                        <div className="md:w-1/2 space-y-4 md:pl-20">
                            <span className="bg-lime-400 text-black px-2 py-1 text-[10px] rounded-full">
                                System Integrity
                            </span>
                            <h1 className="text-3xl text-white font-semibold leading-tight mt-4">
                                Secure and Scalable Data Integration for Gen AI              </h1>
                            <div className="flex space-x-3 mt-4">
                                {Tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        className={`px-2 py-2 text-xs rounded-full ${activetab === tab.id
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-blue-900 text-white'
                                            }`}
                                        onClick={() => setactivetab(tab.id)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Paragraph */}
                        <div className="md:w-1/2 flex items-start">
                            <p className="text-white text-xs pt-8 max-w-lg">
                                At TEN, we understand that the quality and integrity of enterprisedata is paramount to delivering accurate and reliable generative AI solutions.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ✅ Dynamic Tab Content Section */}
            <section className="bg-blue-950 py-12 px-4 md:px-12 lg:px-32">
                <motion.div
                    ref={contentRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="bg-gray-200 rounded-xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center shadow-md">

                        {/* ✅ Fixed Image Section */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activetab + '-img'}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center justify-center h-96 bg-transparent p-0"
                            >
                                <img
                                    src={content[activetab].image}
                                    alt={`${content[activetab].title} Diagram`}
                                    className="max-h-full object-contain bg-transparent border-none shadow-none"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Tab Content Section */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activetab}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3 }}
                            >
                                <TabContent
                                    title={content[activetab].title}
                                    description={content[activetab].description}
                                    points={content[activetab].points}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default DataIngestionSection;
