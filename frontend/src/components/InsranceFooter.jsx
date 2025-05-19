import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InsuranceFooter = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2" data-aos="fade-up">Outcomes</h2>
        <p className="text-gray-500 mb-12" data-aos="fade-up" data-aos-delay="100">
          The startup grows, becomes successful, and expands its business
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-200 p-8 rounded-lg">
          {/* Outcome 1 */}
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className="flex flex-col items-center space-y-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="bg-lime-300 p-4 rounded-full">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17 3H3a1 1 0 00-1 1v14l5-2 5 2 5-2 5 2V4a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold">
                  {inView && <CountUp end={10} duration={2} />}+
                </h3>
                <p className="text-gray-600">Trusted by 10+ Startups</p>
              </div>
            )}
          </InView>

          {/* Outcome 2 */}
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className="flex flex-col items-center space-y-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="bg-lime-300 p-4 rounded-full">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold">
                  {inView && <CountUp end={100} duration={2} />}%+
                </h3>
                <p className="text-gray-600">Return on Investment</p>
              </div>
            )}
          </InView>

          {/* Outcome 3 */}
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className="flex flex-col items-center space-y-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="bg-lime-300 p-4 rounded-full">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3H9v2H7v2h2v2h2V7h2V5h-2V3zm-1 10a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold">
                  {inView && <CountUp end={8} duration={2} />}
                </h3>
                <p className="text-gray-600">Idea to MVP in 8 weeks</p>
              </div>
            )}
          </InView>
        </div>
      </div>
    </section>
  );
};

export default InsuranceFooter;
