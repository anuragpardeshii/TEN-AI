import DataIngestionSection from '@/components/DataIngestionSection';
import Whytenai from '../components/Whytenai'
import React from 'react'
import SystemIntegration from '@/components/SystemIntegration';
import DataOnboardingSection from '@/components/DataOnboardingSection';
import EvaluationGuardSection from '@/components/EvaluationGuardSection';
import Connect from '@/components/Connect';

const WhyTEN = () => {
  return (
    <div>
    <Whytenai/>
    <div className='border-t-2 w-[80%] place-self-center'></div>
    <DataIngestionSection/>
    <DataOnboardingSection/>
    <EvaluationGuardSection/>
    <Connect />
    </div>
  )
}

export default WhyTEN;