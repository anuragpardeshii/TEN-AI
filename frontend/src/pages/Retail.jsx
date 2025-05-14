import RetailAgentDemo from '@/components/RetailAgentDemo'
import RetailFooter from '@/components/RetailFooter'
import RetailHeroSection from '@/components/RetailHeroSection'
import RetailLatest from '@/components/RetailLatest'
import React from 'react'

const Retail = () => {
  return (
    <div>
      <RetailHeroSection />
      <div className='border-t-2 w-[80%] place-self-center'></div>
      <RetailFooter />
      <RetailAgentDemo />
      <RetailLatest />
    </div>

  )
}

export default Retail