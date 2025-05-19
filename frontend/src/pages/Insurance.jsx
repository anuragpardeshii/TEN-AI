import InsuranceFooter from '@/components/InsranceFooter'
import InsuranceAgent from '@/components/InsuranceAgent'
import InsuranceHeroSection from '@/components/InsuranceHeroSection'
import InsuranceLatest from '@/components/InsuranceLatest'
import React from 'react'

const Insurance = () => {
  return (
    <div>
        <InsuranceHeroSection/>
        <div className='border-t-2 w-[80%] place-self-center'></div>
        <InsuranceFooter/>
        <InsuranceAgent/>
        <InsuranceLatest/>
    </div>
  )
}

export default Insurance