import React, { useEffect } from 'react';
import { User, Tag } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const RetailHeroSection = () => {
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
          <div className="w-16 h-16 mx-auto mb-10 bg-[#1E63ED] flex items-center justify-center">
            <div className='font-bold text-4xl transform duration-300 hover:scale-125'>
              <span className="text-black">TEN</span>
              <span className="text-white">AI</span>
            </div>
            {/* <img src="./src/assets/logos/TEN_logo.png" alt="Retail Logo" className="w-40 h-20" /> */}
          </div>

          <p className="text-xs tracking-widest text-white/70 mb-4">INDUSTRIES</p>

          <div className="flex items-center justify-between mb-4 px-4 sm:px-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium" data-aos="fade-right">
              <User size={16} />
              <span className="text-xs font-semibold">Customers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold text-center flex-1" data-aos="fade-up">
              AI Agents for Retail
            </h1>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium" data-aos="fade-left">
              <Tag size={16} />
              <span className="text-xs font-semibold">Sales</span>
            </div>
          </div>

          <p className="text-lg sm:text-sm text-white/80 max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            <span className="block">AI Agents that power sales,</span>
            <span className="block">streamline operations,</span>
            <span className="block">and delight customers — all in one.</span>
          </p>

          <Link to='/agent-card/retail' className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-9 has-[>svg]:px-3 z-50 cursor-pointer p-4 mt-6 text-[12px] text-black bg-lime-400 hover:bg-white rounded-full">
            Try Our Retail Agent
          </Link>
        </div>
      </section>

      {/* What can AI Agents Do Section */}
      <section className="bg-[#F4F4F4] dark:bg-accent py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-4xl font-semibold leading-snug">
              What can AI Agents Do for <br /> Your Brand?
            </h2>
            <div className="mt-6 text-blue-600 text-xl">
              <span>&#8595;</span>
            </div>
          </div>

          <div className="text-[15px] space-y-8" data-aos="fade-left">
            <p>
              Transform how retail businesses operate by automating customer interactions, optimizing sales,
              and improving efficiency—all while maintaining a human touch where it matters.
            </p>
            <Link to='/retail#benefits' className="text-xs py-2 px-6 font-bold transition cursor-pointer text-[12px] text-white dark:hover:text-black bg-[#245ae2] hover:bg-black dark:hover:bg-white rounded-full">
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id='benefits' className="py-20 px-4">
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
              title: "Eliminate Call drop, hold times and Abandonment",
              desc: "Resolve omni-channel customer queries 24/7, reduce support costs and improve customer retention."
            },
            {
              icon: "📱",
              title: "AI-based social & app review support",
              desc: "Reputation management across Instagram, Facebook, WhatsApp, Google Reviews, App Store, and more."
            },
            {
              icon: "🛒",
              title: "Shopping Assistance",
              desc: "Reduce cart abandonment with smart decision support, upselling, and cross-selling features."
            },
            {
              icon: "🔒",
              title: "Automate Insights and Backend Operations",
              desc: "Document processing, seller support, and AI-driven analytics to streamline operations."
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
          <Link to="/categories" className="text-white text-xs font-semibold py-3 px-5 rounded-full transition dark:hover:text-black bg-[#245ae2] hover:bg-black dark:hover:bg-white cursor-pointer">
            Check Out Use Cases
          </Link>
        </div>
      </section>
    </>
  );
};

export default RetailHeroSection;
