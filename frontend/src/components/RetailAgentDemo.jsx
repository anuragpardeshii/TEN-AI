import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mic } from 'lucide-react';

const RetailAgentDemo = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-gray-900">Experience Our Agents</h2>
          <p className="text-gray-500 mt-3">
            Leverage our AI expertise to build your end-to-end products
          </p>
          <button className="mt-6 px-5 py-2 text-sm border rounded-full hover:bg-gray-100 transition">
            Video Demo
          </button>
        </div>

        {/* 3 Column Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Panel - Mic + Orders */}
          <div
            className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="font-semibold mb-6 text-sm">Retail Agent</h3>

            {/* Mic */}
            <div className="relative mb-3">
              <div className="w-24 h-24 rounded-full border-[6px] border-blue-500 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mic className="text-white" size={28} />
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-700 font-medium mb-2">
              Tap the Mic to speak with our Retail Agent
            </p>

            <div className="text-xs font-medium border px-4 py-1 rounded-full mb-6">
              0:00
            </div>

            {/* Order Details */}
            <div className="bg-white w-full p-4 rounded-xl shadow-sm mb-4">
              <h4 className="font-semibold text-sm mb-3">Order details</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between items-center">
                  <span>🔊 Bluetooth speaker</span>
                  <span className="bg-gray-100 px-2 py-0.5 text-xs rounded-full border">#202</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>📹 Security camera</span>
                  <span className="bg-gray-100 px-2 py-0.5 text-xs rounded-full border">#456</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Trial ends in 1 minute!{' '}
              <a href="#" className="text-blue-600 underline">
                Sign up now
              </a>{' '}
              to experience our Retail AI Agent.
            </p>
          </div>

          {/* Center Panel - Chat UI */}
          <div
            className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-white w-full h-64 rounded-xl p-5 flex flex-col justify-between shadow-sm">
              <div className="text-gray-800 text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <img src="https://i.pravatar.cc/30" className="w-5 h-5 rounded-full" alt="Tony" />
                  <span className="font-medium">Tony</span>
                </div>
                <p>Sure, my email is tony@gmail.com</p>
              </div>

              <div className="flex justify-center items-center gap-5">
                <span className="text-xs text-gray-500">00:00:25</span>
                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow">
                  <Mic size={20} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border text-gray-400 text-lg">
                  ×
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Live Action */}
          <div
            className="bg-gray-50 p-6 rounded-2xl shadow-sm"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="font-semibold text-sm">Live Action</h4>
                <p className="text-xs text-gray-400">Logs of decisions made by agent</p>
              </div>
              <button className="w-7 h-7 flex items-center justify-center border rounded-full text-gray-500 text-xs hover:bg-gray-100">
                →
              </button>
            </div>

            {/* Action Card 1 */}
            <div className="bg-white p-4 rounded-xl mb-4 text-sm text-gray-700 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 flex items-center justify-center text-xs">
                  🔍
                </div>
                <p className="font-medium">Intent Identification</p>
              </div>
              <div className="pl-6">
                <p className="text-xs text-gray-600">Delayed delivery</p>
              </div>
            </div>

            {/* Action Card 2 */}
            <div className="bg-white p-4 rounded-xl text-sm text-gray-700 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 flex items-center justify-center text-xs">
                  🛡️
                </div>
                <p className="font-medium">Identify user account</p>
              </div>
              <div className="pl-6 space-y-1 text-xs">
                <div className="text-gray-400">Order number</div>
                <div className="text-blue-600 font-semibold">Email Address</div>
                <div className="text-gray-400">Phone Number</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailAgentDemo;
