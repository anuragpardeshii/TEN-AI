import React, { lazy, Suspense, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ExperienceSection from '@/components/ExperienceSection';
import { useLocation } from 'react-router-dom';
import Impact from '@/components/Impact';
import Loader from '@/components/ui/Loader';
// import Connect from '@/components/Connect';


const CustomAIAgents = () => {

  const Connect = lazy(() => import('@/components/Connect'));

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
      <HeroSection />
      <FeaturesSection />
      <ExperienceSection />
      <Impact />
      <Suspense fallback={<Loader />}>
        <Connect />
      </Suspense>
    </div>
  );
};

export default CustomAIAgents;
