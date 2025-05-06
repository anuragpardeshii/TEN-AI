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
    { id: 'ingestion', label: 'Data Ingestion' },
    { id: 'embedding', label: 'Data Embedding' },
    { id: 'monitoring', label: 'Data Monitoring' },
  ];

  const content = {
    ingestion: {
      title: 'Robust Data Ingestion',
      description:
        'We start by building a robust data ingestion pipeline that can seamlessly connect to a wide range of enterprise data sources, including databases, data warehouses, CMS, and external APIs.',
      points: [
        'Normalise data structures and semantics',
        'Deduplicate records and resolve conflicts',
        'Annotate data with rich metadata',
      ],
      image: '/ingestion.png',
    },
    embedding: {
      title: 'Embedding Strategies',
      description:
        'We use advanced embedding techniques to represent structured and unstructured data in vector space, enabling semantic search, reasoning, and more.',
      points: [
        'Use domain-specific embedding models',
        'Maintain context fidelity',
        'Support real-time embedding updates',
      ],
      image: '/new.png',
    },
    monitoring: {
      title: 'End-to-End Monitoring',
      description:
        'Monitoring pipelines ensure your AI models are grounded in reality by tracking data drift, model performance, and feedback loops in production.',
      points: [
        'Detect anomalies and data drift',
        'Track real-time performance metrics',
        'Integrate user feedback for continual learning',
      ],
      image: '/Monitoring.png',
    },
  };

  // ✨ Scroll Reveal Refs & Hooks
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });

  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen text-gray-400 font-sans">
      {/* ✅ Hero Section */}
      <section className="py-12 px-4 md:px-12 lg:px-32">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            {/* Left Side: Heading + Tabs */}
            <div className="md:w-1/2 space-y-4 md:pl-20">
              <span className="bg-lime-400 text-black px-3 py-1 text-[10px] rounded-full">
                Data Integrity
              </span>
              <h1 className="text-4xl font-semibold leading-tight mt-4">
                Ensuring Data Integrity for Accurate Gen AI Outputs
              </h1>
              <div className="flex space-x-3 mt-4">
                {Tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-2 py-2 text-xs rounded-full ${
                      activetab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700'
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
              <p className="text-gray-400 text-xs pt-10 max-w-lg">
                At TEN, we prioritize data quality and integrity to deliver
                accurate generative AI solutions. Our robust data management and
                integration ensure our models are always grounded in truth.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ✅ Dynamic Tab Content Section */}
      <section className=" py-12 px-4 md:px-12 lg:px-32">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 50 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-gray-100 rounded-xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center shadow-md">
           
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

            {/* Tab Content */}
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
