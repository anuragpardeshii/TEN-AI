import InsuranceFooter from '@/components/InsranceFooter'
import InsuranceAgent from '@/components/InsuranceAgent'
import InsuranceHeroSection from '@/components/InsuranceHeroSection'
import InsuranceLatest from '@/components/InsuranceLatest'
import React from 'react'

const Insurance = () => {
  return (
    <div>
        <InsuranceHeroSection/>
        <InsuranceFooter/>
        <InsuranceAgent/>
        <InsuranceLatest/>
    </div>
  )
}

export default Insurance