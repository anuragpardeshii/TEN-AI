import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mic } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsuranceAgent = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Panel: Mic + Options */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm" data-aos="fade-up">
            <h3 className="font-semibold text-black text-sm text-center mb-4">Insurance Agent</h3>

            {/* Mic */}
            <div className="flex flex-col items-center mb-4">
              <div className="w-24 h-24 rounded-full border-[6px] border-blue-500 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mic className="text-white" size={28} />
                </div>
              </div>
              <p className="text-xs text-gray-700 font-medium mt-2">
                Tap the Mic to speak with our Insurance Agent
              </p>
              <div className="text-xs font-medium text-black border border-gray-300 px-4 py-1 rounded-full mt-2">
                0:00
              </div>
            </div>

            {/* Insurance Options */}
            <div className="bg-white rounded-xl shadow-sm p-4 text-sm mb-6">
              <h4 className="font-semibold text-black mb-1">Insurance Options</h4>
              <p className="text-gray-500 text-xs mb-3">
                Talk to our agent who will access customer needs and suggest the best-suited policy for your insurance needs.
              </p>
              <div className="flex gap-2 flex-wrap">
                <button className="px-3 py-1 text-xs text-black border border-gray-300 rounded-full">Health Insurance</button>
                <button className="px-3 py-1 text-xs text-black border border-gray-300 rounded-full">Individual/Family</button>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Trial ends in 1 minute!{' '}
               <Link to='/sign-page' className="text-blue-600 underline">
                Sign up now
              </Link>{' '}
              to experience our Insurance AI Agent.
            </p>
          </div>

          {/* Center Panel: Chat UI */}
          <div
            className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-white h-full rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div className="text-gray-800 text-sm mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold">
                    X
                  </div>
                  <span className="font-medium">Agent</span>
                </div>
                <p>Good morning! This is Sarah from NurixAuto Insurance. Am I...</p>
              </div>

              <div className="flex justify-center items-center gap-5 mt-auto">
                <span className="text-xs text-gray-500">00:00:03</span>
                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow">
                  <Mic size={20} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 text-lg">
                  ×
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Live Action */}
          <div
            className="bg-gray-50 p-6 rounded-2xl shadow-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="font-semibold text-black text-sm">Live Action</h4>
                <p className="text-xs text-gray-400">Logs of decisions made by agent</p>
              </div>
              <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-full text-gray-500 text-xs hover:bg-gray-100">
                →
              </button>
            </div>

            {/* Action Card with Scroll */}
            <div className="bg-white p-4 rounded-xl text-sm text-gray-700 shadow-sm max-h-40 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <p className="font-medium text-xs mb-2 text-green-600">✔ Verify customer details</p>
              <ul className="pl-3 space-y-1 text-xs text-gray-600 list-disc">
                <li>Name</li>
                <li>DOB</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Policy Number</li>
                <li>Driver License</li>
                <li>Vehicle Details</li>
                <li>Zip Code</li>
                <li>Payment Method</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceAgent;
