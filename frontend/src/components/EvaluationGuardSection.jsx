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
const EvaluationGuardSection = () => {
  const [activetab, setactivetab] = useState('ingestion');

  const Tabs = [
    { id: 'ingestion', label: 'Testing and Evaluation' },
    { id: 'embedding', label: 'AI Guardrails' },
    { id: 'monitoring', label: 'Improvement' },
  ];

  const content = {
    ingestion: {
      title: 'Robust Testing and Evaluation',
      description:
        'Before any of our Gen AI models are put into production, they undergo extensive testing and evaluation on a wide range of benchmarks and datasets. We rigorously assess:',
      points: [
        'Factual accuracy - we test for hallucinations, inconsistencies and factual errors',
        'Coherence and logical reasoning',
        'Adherence to safety and ethics guidelines',
        ' Unintended biases and discrimination ',
        'Adherence to safety and ethics guidelines',

      ],
      image: '/Testing.png',
    },
    embedding: {
      title: 'Responsible AI Guardrails',
      description:
        'In addition to testing, we have built in multiple layers of guardrails to ensure our Gen AI systems behave responsibly:',
      points: [
        'Filtering of unsafe, unethical or illegal content',
        'Prompts to encourage users to fact-check outputs',
        'Confidence thresholds to avoid low-confidence responses',
        'Transparency about model limitations and uncertainty',
        'Ability to fine-tune models for specific use cases and domains',

      ],
      image: '/AI.png',
    },
    monitoring: {
      title: 'Continuous Improvement',
      description:
        'Monitoring pipelines ensure your AI models are grounded in reality by tracking data drift, model performance, and feedback loops in production.',
      points: [
        'Improve model accuracy, safety, and reliability.',
        'Share best practices with the AI community.',
        'Use rigorous testing and guardrails.',
        'Focus on continuous AI improvement.',
      ],
      image: '/Improvement.png',
    },
  };

  // ✨ Scroll Reveal Refs & Hooks
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });

  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen text-gray-800 font-sans">
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
              <span className="bg-lime-400 text-black px-3 py-1 text-[10px] rounded-full">
                Evaluation & Guardrailin
              </span>
              <h1 className="text-4xl text-gray-400 font-semibold leading-tight mt-4">
                Responsible Gen AI: Rigorous
                Evaluation and Guardrails              </h1>
              <div className="flex space-x-3 mt-4">
                {Tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-2 py-2 text-xs rounded-full ${activetab === tab.id
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
                At TEN,we are committed to responsible AI development. Our comprehensive framework ensures the accuracy, safety, and reliability of our generative AI solutions.
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

export default EvaluationGuardSection;
