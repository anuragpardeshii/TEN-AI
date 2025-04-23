import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const agentCard = () => {
    navigate("/agent-card");
  };
  return (
    <div>
      <section className="w-full py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto px-4 ">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            <span className="block">Empower Your</span>
            <span className="block">Enterprise with AI Agents</span>
          </h1>
          <p className="text-gray-600 text-sm mb-4 leading-tight max-w-2xl mx-auto">
            Automate your existing workflows to enhance <br />
            customer experiences and improve internal
            <br />
            productivity with tailored AI solutions.
          </p>
          {/* button */}
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-600 hover:bg-blue-950 text-white px-3 py-2 rounded-full text-xs  transition-all duration-200"
              onClick={agentCard}
            >
              Book a Demo →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
