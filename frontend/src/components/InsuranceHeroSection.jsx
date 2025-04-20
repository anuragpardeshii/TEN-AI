import React, { useEffect } from 'react';
import { User, Tag } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InsuranceHeroSection = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#1E63ED] text-white py-32 px-4 overflow-hidden">
        {/* Decorative Curve */}
        <div className="absolute top-24 left-0 right-0 z-0 flex justify-center">
          <svg width="100%" height="200" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M160 100C400 -50 1040 -50 1280 100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="mt-10 relative z-10 max-w-6xl mx-auto text-center" data-aos="fade-up">
          <div className="w-16 h-16 mx-auto mb-20 bg-[#1E63ED] flex items-center justify-center">
            <img src="/Logo.png" alt="Retail Logo" className="w-10 h-10" />
          </div>

          <p className="text-xs tracking-widest text-white/70 mb-4">INDUSTRIES</p>

          <div className="flex items-center justify-between mb-4 px-4 sm:px-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium" data-aos="fade-right">
              <User size={16} />
              <span className="text-xs font-semibold">Customers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold text-center flex-1" data-aos="fade-up">
              AI Agents for Insurance
            </h1>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium" data-aos="fade-left">
              <Tag size={16} />
              <span className="text-xs font-semibold">Insurance</span>
            </div>
          </div>

          <p className="text-lg sm:text-sm text-white/80 max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            <span className="block">Accelerate sales, streamline claims, and</span>
            <span className="block">enhance customer experiences with AI-</span>
            <span className="block">powered automation.</span>
          </p>

          <button className="bg-lime-400 hover:bg-white text-black text-[12px] font-semibold py-2 px-4 rounded-full transition" data-aos="zoom-in" data-aos-delay="200">
            Request a Demo
          </button>
        </div>
      </section>

      {/* What can AI Agents Do Section */}
      <section className="bg-[#F4F4F4] text-black py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-4xl font-semibold leading-snug">
              What can AI Agents Do for <br /> You
            </h2>
            <div className="mt-6 text-blue-600 text-xl">
              <span>&#8595;</span>
            </div>
          </div>

          <div className="text-[15px] text-gray-900" data-aos="fade-left">
            <p>
              Transform how insurance businesses operate by automating lead qualification, enhancing policyholder interactions, and streamlining claim intimation process—all while ensuring a human touch where it matters most.
            </p>
            <button className="mt-6 bg-blue-600 text-white text-xs py-2 px-4 rounded-full hover:bg-white hover:text-black transition">
              Explore Example
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-white text-black py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Key Benefits</h2>
          <p className="text-xs text-gray-600">
            Leverage our AI expertise to build your end-to-end products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "🔔",
              title: "Increase Sales & Lead Conversions",
              desc: "AI screens and qualifies leads, ensuring agents focus on high-potential customers."
            },
            {
              icon: "📱",
              title: "Enhance Policyholder Experience",
              desc: "24/7 AI-powered support for policy inquiries, renewals, and claims."
            },
            {
              icon: "🛒",
              title: "Automate Claims & Reduce Processing Time",
              desc: "AI accelerates claims processing with real-time updates and document handling."
            },
            {
              icon: "🔒",
              title: "Boost Customer Retention",
              desc: "Proactive AI-driven engagement ensures timely renewals and policy upgrades."
            }
          ].map((b, i) => (
            <div key={i} className="text-center p-6 border rounded-lg" data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 p-3 rounded-full text-2xl">{b.icon}</span>
              </div>
              <h3 className="text-sm font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-600 text-xs">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <button className="bg-blue-600 hover:bg-white hover:text-black text-white text-xs font-semibold py-3 px-5 rounded-full transition">
            Check Out Use Cases
          </button>
        </div>
      </section>
    </>
  );
};

export default InsuranceHeroSection;
