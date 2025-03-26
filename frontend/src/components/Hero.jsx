import React from 'react'
import { BackgroundLines } from './ui/background-lines'

function Hero() {
  return (
    <BackgroundLines className='min-h-[60vh] w-full '>
      <section className='h-full flex flex-col gap-10 text-center w-full items-center justify-center'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-6xl font-bold'>AI Agents <br /> to Re-imagine</h1>
          <h1 className='text-6xl font-bold text-gray-500'>Enterprise Workflows</h1>
        </div>
        <p>
          Our custom agents transform how work happens, <br /> providing <span className='font-bold'> 100% ROI </span>
          on all deployments
        </p>
      </section>
    </BackgroundLines>
  )
}

export default Hero