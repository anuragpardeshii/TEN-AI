import RetailAgentDemo from '@/components/RetailAgentDemo'
import RetailFooter from '@/components/RetailFooter'
import RetailHeroSection from '@/components/RetailHeroSection'
import RetailLatest from '@/components/RetailLatest'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Retail = () => {

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
      <RetailHeroSection />
      <div className='border-t-2 w-[80%] place-self-center'></div>
      <RetailFooter />
      <RetailAgentDemo />
      <RetailLatest />
    </div>

  )
}

export default Retail