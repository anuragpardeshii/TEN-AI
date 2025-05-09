import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'
import Lottie from 'lottie-react'
import AIAnimation4 from '../assets/animations/animation-AI_4.json'
import AIAnimation1 from '../assets/animations/animation-AI_1.json'
import AIAnimation2 from '../assets/animations/animation-AI_2.json'
import AIAnimation3 from '../assets/animations/animation-AI_3.json'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const FeaturesSection = () => {

  useEffect(() => {
    Aos.init({ duration: 800, once: true })
  }, [])

  return (
    <div className='py-20' data-aos="fade-up">
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          What can custom AI Agents do?
        </h2>
        <p className='text-gray-500 text-sm md:text-base mb-12 max-w-2xl mx-auto'>
          Discover the powerful capabilities of our custom AI agents, designed to streamline your business operations.
        </p>

        {/* Two-column layout: features left, animation right */}
        <div className="flex flex-row justify-between max-md:justify-center lg:items-start max-lg:gap-0 gap-10">

          {/* Features - Left column */}
          <div className="flex flex-col space-y-18 items-center lg:items-start ">

            {/* Feature Card */}
            {[
              {
                title: ['Seamless Integrations', 'With Your Systems'],
                desc: 'Integrate effortlessly with existing workflows, enabling AI agents to make informed decisions based on real-time data.',
                benefits: [
                  'Automates end-to-end processes.',
                  'Enhances operational efficiency.',
                  'Reduces manual intervention.'
                ]
              },
              {
                title: ['24/7 Availability'],
                desc: 'Ensure uninterrupted operations by deploying AI agents that are active and responsive at all hours, across time zones.',
                benefits: [
                  'Improves customer satisfaction.',
                  'Reduces response times.',
                  'Maintains consistent service quality.'
                ]
              },
              {
                title: ['Performance Replication and Improvement'],
                desc: 'Leverage AI to emulate top-performing agents, continuously refining interactions for optimal outcomes.',
                benefits: [
                  'Standardizes high-quality service.',
                  'Identifies and implements best practices.',
                  'Drives continuous improvement.'
                ]
              },
              {
                title: ['Omnichannel Support'],
                desc: 'Engage with customers across multiple platforms, including voice, chat, email, and social media, ensuring a consistent experience.',
                benefits: [
                  'Expands reach.',
                  'Maintains brand consistency.',
                  'Enhances customer engagement.'
                ]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                data-aos="fade-right"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="w-[280px] border rounded-xl shadow-xs p-6 text-left hover:shadow-md dark:hover:shadow-white transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  {feature.desc}
                </p>
                <p className="font-semibold text-sm mb-2">Benefits</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {feature.benefits.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-blue-600 w-4 h-4 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className='flex flex-col'>
            <Lottie animationData={AIAnimation4} className='w-sm max-md:w-[16rem] pt-10 max-md:pt-20' data-aos="fade-left" />
            <Lottie animationData={AIAnimation1} className='w-[22rem] max-md:w-[14rem] pt-20 max-md:pt-40' data-aos="fade-left" />
            <Lottie animationData={AIAnimation2} className='w-sm max-md:w-[16rem] pt-15 max-md:pt-45' data-aos="fade-left" />
            <Lottie animationData={AIAnimation3} className='w-sm max-md:w-[16rem] pt-25 max-md:pt-45' data-aos="fade-left" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
