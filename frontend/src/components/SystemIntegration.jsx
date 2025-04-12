import React from "react";
import { ShieldCheck, Database, Lock, ArrowRight } from "lucide-react";

const SystemIntegration = () => {
  const integrationSteps = [
    {
      id: "01",
      title: "Data Onboarding",
      description:
        "Rapidly identify and connect to all relevant data assets across your organization, establishing secure connections in days.",
      icon: <Database className="w-16 h-16 text-white mb-4" />,
    },
    {
      id: "02",
      title: "Data Harmonization",
      description:
        "Normalize data structures and semantics, deduplicate records, and annotate data with rich metadata for consistency.",
      icon: <ShieldCheck className="w-16 h-16 text-white mb-4" />,
    },
    {
      id: "03",
      title: "Security & Compliance",
      description:
        "Ensure all data integrations adhere to industry standards and regulations, maintaining the highest levels of security.",
      icon: <Lock className="w-16 h-16 text-white mb-4" />,
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border text-sm font-medium text-black">
            <div className="bg-lime-300 p-1.5 rounded-full">
              <ArrowRight size={12} />
            </div>
            System Integration
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4">
            Secure and Scalable Data Integration for Gen AI
          </h2>
        </div>

        {/* Integration Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrationSteps.map((step) => (
            <div
              key={step.id}
              className="bg-[#00154D] text-white rounded-sm p-8 flex flex-col items-center text-center shadow-md transition-transform hover:scale-[1.015]"
            >
              <div className="text-sm bg-lime-300 text-black px-2 py-1 rounded-full mb-3">
                {step.id}
              </div>
              {step.icon}
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="mb-6">{step.description}</p>
              <button className="bg-blue-700 hover:bg-black text-white px-6 py-2 rounded-full text-sm flex items-center gap-2">
                Explore More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemIntegration;
