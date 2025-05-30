import DataIngestionSection from '@/components/DataIngestionSection';
import Whytenai from '../components/Whytenai'
import React, { useEffect } from 'react'
import SystemIntegration from '@/components/SystemIntegration';
import DataOnboardingSection from '@/components/DataOnboardingSection';
import EvaluationGuardSection from '@/components/EvaluationGuardSection';
import { useLocation } from 'react-router-dom';

const WhyTEN = () => {

  const location = useLocation();

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
    <Whytenai/>
    <div className='border-t-2 w-[80%] place-self-center'></div>
    <DataIngestionSection/>
    <DataOnboardingSection/>
    <EvaluationGuardSection/>
    </div>
  )
}

export default WhyTEN;