import InsuranceFooter from '@/components/InsranceFooter'
import InsuranceAgent from '@/components/InsuranceAgent'
import InsuranceHeroSection from '@/components/InsuranceHeroSection'
import InsuranceLatest from '@/components/InsuranceLatest'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Insurance = () => {

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0)
    }
  }, [location])

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