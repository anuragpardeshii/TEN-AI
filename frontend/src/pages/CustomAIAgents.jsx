import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ImageMockup from '@/components/ImageMockup';
import ExperienceSection from '@/components/ExperienceSection';
import LastHero from '@/components/LastHero';
import { useLocation } from 'react-router-dom';


const CustomAIAgents = () => {

  const location = useLocation();

  useEffect(()=> {
    if(location.hash) {
      setTimeout(()=> {
        const target = document.querySelector(location.hash);
        if(target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0)
    }
  }, [location])

  return (
    <div>
      <HeroSection/>
      <FeaturesSection/>
      <ImageMockup/>
      <ExperienceSection/>
      <LastHero/>
    </div>
  );
};

export default CustomAIAgents;
