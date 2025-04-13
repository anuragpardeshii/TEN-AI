import DataIngestionSection from '@/components/DataIngestionSection';
import Whytenai from '../components/whytenai'
import React from 'react'
import SystemIntegration from '@/components/SystemIntegration';
import DataOnboardingSection from '@/components/DataOnboardingSection';
import EvaluationGuardSection from '@/components/EvaluationGuardSection';
import LastHerowhyTEN from '@/components/LastHerowhyTEN';

const WhyTEN = () => {
  return (
    <div>
    < Whytenai/>
    <DataIngestionSection/>
    <DataOnboardingSection/>
    <EvaluationGuardSection/>
    <LastHerowhyTEN/>

    </div>
  )
}

export default WhyTEN;