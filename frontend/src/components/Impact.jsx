import React from 'react'
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

const Impact = () => {
    const fadeIn = (delay = 0) => ({
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.8, delay } }
      });
  return (

  <div className='bg-blue-950 w-full overflow-hidden'>
      <div className='lg:flex flex-col lg:flex-row justify-evenly text-amber-50'>
       <div className='p-12 lg:mt-48'>
        <Badge title={"Impact"}/>
        <h1 className='font-bold text-3xl sm:text-5xl mt-5'>AI Powered Enterprise</h1>
        <p className='w-72 mt-6 text-gray-400'>Organizations leveraging Nurix Agents and Agent Assist experience significant performance enhancement</p>
       </div>
       <div className='border'>
        <div className='flex'>
           <div className='p-16'>
           <p className='text-gray-400 text-xl'>Sales Conversions</p>
            <h1 className='text-5xl mt-7'>30%</h1>
            <p className='w-56'>Improved sales conversions through
            intelligent and timely interactions</p>
           </div>
           <div>
           <svg className='h-40 w-40' viewBox="0 0 477 212" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            className="hidden sm:block x-arrow-2"
            opacity="0.4"
            d="M306.788 101.018L283.567 136.585L283.148 137.251L234.422 211.845H180L255.414 102.843L183.924 0H240.441L283.148 65.0135L285.034 67.9029L306.788 101.018Z"
            fill="#D6F549"
            {...fadeIn(0.4)}
            style={{ opacity: 0 }}
          />
          <motion.path
            className="hidden sm:block x-arrow-3"
            opacity="0.6"
            d="M216.788 101.018L193.567 136.585L193.148 137.251L144.422 211.845H90L165.414 102.843L93.924 0H150.441L193.148 65.0135L195.034 67.9029L216.788 101.018Z"
            fill="#D6F549"
            {...fadeIn(0.6)}
            style={{ opacity: 0 }}
          />
          <motion.path
            className="hidden sm:block x-arrow-4"
            opacity="0.8"
            d="M126.788 101.018L103.567 136.585L103.148 137.251L54.422 211.845H0L75.4135 102.843L3.92401 0H60.4413L103.148 65.0135L105.034 67.9029L126.788 101.018Z"
            fill="#D6F549"
            {...fadeIn(0.8)}
            style={{ opacity: 1 }}
          />
    </svg>
           </div>
        </div>
  
        <div className='md:flex    border-t-2'>
             <div className='p-16 border-r-2 border-b-2 lg:border-b-0'>
                <p className='text-gray-400 text-xl'>sales Reach</p>
                <h1 className='text-5xl mt-7'>4X</h1>
                <p className='w-56'>Increase in sales reach with AI agents which can automate workflows end to end</p>
             </div>
             <div className='p-16'>
             <p className='text-gray-400 text-xl'>Cost Efficiency</p>
                <h1 className='text-5xl mt-7'>60%</h1>
                <p className='w-56'>Reduced cost per ticket while
                maintaining high-quality service</p>
            </div> 
        </div>
       </div>
    </div>
  </div>
  )
}

export default Impact
