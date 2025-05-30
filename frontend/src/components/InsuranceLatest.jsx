import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const insights = [
  {
    image: '/1.png',
    category: 'Artificial Intelligence',
    date: '14 December, 2024',
    title: 'Use Cases And Impact Of AI Chatbot In Insurance Industry',
    description: 'Discover how AI bot in insurance can transform customer experience and streamline operations...',
  },
  {
    image: '/2.png',
    category: 'Artificial Intelligence',
    date: 'December 19, 2024',
    title: 'Building Conversational Voice AI Bots',
    description: "The blog discusses importance of AI conversational voice bots...",
  },
  {
    image: '/3.png',
    category: 'Artificial Intelligence',
    date: 'November 18, 2024',
    title: 'Where Will I see Agentic AI',
    description: "As the dust settles, focus is shifting away from potential-promising research..",
  },
];

const InsuranceLatest = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section className="bg-gray-50 dark:bg-accent py-20">
        <div className="max-w-4xl mx-auto px-7">
          {/* Heading */}
          <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="inline-block text-[10px] leading-none border border-gray-300 rounded-full px-2 py-[3px]">
                Latest News
              </span>
              <h2 className="text-3xl font-semibold mt-4">Latest Insights</h2>
            </div>
           <button className="text-white transition px-5 py-2 text-sm rounded-full dark:hover:text-black bg-[#245ae2] hover:bg-black dark:hover:bg-white cursor-pointer">
              Explore All →
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition duration-300"
                data-aos="fade-up"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-62 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
                <div className="p-6">
                  <div className="mb-2 flex items-center text-[10px] text-gray-500 space-x-2">
                    <span className="bg-lime-300 text-black px-2 rounded-full">
                      {item.category}
                    </span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2 text-black">{item.title}</h3>
                  <p className="text-[11px] text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1D4ED8] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-white text-3xl font-semibold mb-6 md:mb-0">
            Ready to Build Something <br className="hidden md:block" />
            Extraordinary?
          </h2>
          <Link to='/sign-page' className="bg-lime-300 hover:bg-lime-400 text-black text-sm  px-4 py-2 rounded-full transition">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default InsuranceLatest;
