import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiOpenai, SiMeta, SiAnthropic, SiAmd, SiNvidia } from "react-icons/si";
import { FaCloud, FaRobot, FaBrain } from "react-icons/fa";

const nodes = [
  {
    icon: <SiOpenai />,
    label: "OpenAI",
    position: { top: "10%", left: "20%" },
  },
  { icon: <SiMeta />, label: "LLaMA", position: { top: "25%", left: "10%" } },
  { icon: <FaCloud />, label: "Lambda", position: { top: "40%", left: "20%" } },
  {
    icon: <SiNvidia />,
    label: "NVIDIA",
    position: { top: "10%", right: "20%" },
  },
  { icon: <SiAmd />, label: "AMD", position: { top: "25%", right: "10%" } },
  {
    icon: <SiAnthropic />,
    label: "Anthropic",
    position: { top: "40%", right: "20%" },
  },
  {
    icon: <FaRobot />,
    label: "Together AI",
    position: { bottom: "20%", left: "35%" },
  },
  {
    icon: <FaBrain />,
    label: "vLLM",
    position: { bottom: "20%", right: "35%" },
  },
];

export default function Expertise() {
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const nodeRefs = useRef([]);

  return (
    <div
      ref={containerRef}
      className="bg-[#01194c] w-full pt-10 pb-10 px-4 relative overflow-hidden  font-[Manrope]"
    > 

      <div className="text-center mb-6 font-[Manrope]">
        <h2 className="text-4xl font-bold text-white">Our Expertise</h2>
        <p className="text-gray-300 text-md mt-4 max-w-xl mx-auto">
          We customize and create the most relevant tech architecture for your
          use case.
        </p>
      </div>

      <section className="relative w-full max-w-5xl h-[450px] mx-auto">

        <motion.div
          ref={centerRef}
          className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          TenAI
        </motion.div>

        {nodes.map((node, i) => (
          <motion.div
            key={i}
            ref={(el) => (nodeRefs.current[i] = el)}
            className="w-16 h-16 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md flex flex-col items-center justify-center text-xs text-center absolute"
            style={node.position}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-xl mb-1">{node.icon}</div>
            <div>{node.label}</div>
          </motion.div>
        ))}

      </section>

      <div className="flex flex-wrap justify-center gap-4">

        {[
          "Large Language Models",
          "Cloud & Model Hub",
          "Inference",
          "Model Training",
        ].map((label, index) => (
          <motion.div
            key={index}
            className="text-white border border-white/20 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.1 }}
          >
            {label}
          </motion.div>
        ))}

      </div>
    </div>
  );
}
