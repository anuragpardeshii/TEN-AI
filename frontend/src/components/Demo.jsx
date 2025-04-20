import { AudioLines, Landmark, Mic, Store, TreePalm, Umbrella } from 'lucide-react';
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/autoplay";
import { useTheme } from '../context/ThemeContext';
import { Separator } from './ui/separator';

const demoData = [
  {
    type : "Travel",
    icon : <TreePalm />,
    data : "Simplify flight rescheduling in just a few steps. Your PNR is ABC123 and last name is Johnson",
    track : "/audio/travel.mp3"
  },
  {
    type : "Insurance",
    icon : <Umbrella />,
    data : "Talk to our agent who will access customer needs and suggest the best-suited policy for yur insurance needs.",
    track : "/audio/insurance.mp3"
  },
  {
    type : "Retail",
    icon : <Store />,
    data : "Check order details and make changes with ease. Ask about a bluetooth speaker (ID: #202) and security camera (ID: #456)",
    track : "/audio/retail.mp3"
  },
  {
    type : "Collections",
    icon : <Landmark />,
    data : "This collection agent helps you manage payment-related matters, such as overdue payments, payment plan options, etc. Hint: Last digits of social security are 3456.",
    track : "/audio/collection.mp3"
  },
];


function Demo() {
  const [demoType, setDemoType] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [trackError, setTrackError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioRef = useRef(null);

  const {theme} = useTheme();

  // Scroll event listener to track when to show the Demo Component
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero-section")?.offsetHeight || 0;
      const scrollPosition = window.scrollY;

      if(scrollPosition > heroHeight / 2){
          setIsVisible(true); // Show the Demo section 
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll) // cleanup event listener
  },[])

  const typeHandler = (type) => {
    setTrackError(false);
    setDemoType(type);
  }

  const handleMicClick = (type) => {
    if(type === "#" || type === null){
        setTrackError(true);
        return;
    }
    const selectedDemo = demoData.find((demo) => demo.type === type);

    if(audioRef.current){
      if(isPlaying){
        // Stop the audio it its already playing
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      else{
        // Play the selected audio
        audioRef.current.src = selectedDemo.track;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }

    // Stop the animation when audio stops
    audioRef.current.onended = () => {
      setIsPlaying(false);
    }
    
  }

  return (
    <motion.div
      initial={{opacity : 0, y : 50}}
      animate={isVisible ? {opacity : 1, y : 0} : {}}
      transition={{duration : 1}}
      className='flex flex-col items-center'
    >
      <div className='flex flex-col lg:w-[80vw] w-[90%] min-h-[80vh] overflow-hidden border border-gray-600 rounded-lg'>
          <div className='w-full flex p-3 items-center gap-2'>
            <h1 className='text-lg font-semibold'>TenAI</h1>
            <Separator orientation='vertical' style={{height : "16px"}} className="bg-gray-400 dark:bg-gray-400" />
            <h1 className='text-lg font-semibold'>Experience Our AI Agents</h1>
          </div>

          <Separator className="bg-gray-600"/>

          <div className='m-3 bg-gray-200 flex flex-col flex-1 rounded-lg px-12'>
            <div className='flex flex-col items-center gap-3 w-full py-4 flex-1 lg:justify-center lg:items-center lg:flex-row'>
                
                {/* Types */}
                <div className='w-full lg:max-w-1/3 flex flex-col gap-4'>
                  <h1 className='text-xl text-gray-400 pl-6 font-bold'>SELECT USE CASE</h1>
                  <div className='flex flex-col gap-3'>
                    {demoData.map((demo) => (
                        <DemoType
                          className = "hidden lg:flex"
                          type={demo.type}
                          icon={demo.icon}
                          key={demo.type}
                          demoType={demoType}
                          typeHandler={typeHandler}
                        />
                    ))}
                    <select 
                      name="demo" 
                      className='block lg:hidden bg-white text-black px-4 py-2 font-semibold text-sm outline-0 rounded-full'
                      onChange={(e) => {
                        if(e.target.value !== "#")  setDemoType(e.target.value)
                        else setDemoType(null)
                        }
                      }
                    >
                      <option value="#" className='opacity-70'>--Select Usage --</option>
                      <option value="Travel">Travel</option>
                      <option value="Insurance">Insurance</option>
                      <option value="Retail">Retail</option>
                      <option value="Collections">Collections</option>
                    </select>
                  </div>
                </div>
                
                {/* MIC */}
                <div className='lg:max-w-1/3 text-center w-full flex flex-col items-center gap-4'>
                    <button 
                      onClick={() => handleMicClick(demoType)} 
                      className={`w-[90px] h-[90px] text-white border-0 p-8 bg-blue-600 rounded-full outline-white outline-[10px] -outline-offset-[12px] cursor-pointer ${isPlaying ? "animate-pulse" : ""}`}
                    >
                     {isPlaying ? <AudioLines /> :  <Mic />}
                    </button>
                    <p className='text-sm text-black font-semibold'>Tap the mic and experience out AI agents</p>
                    {trackError && <p className='text-red-600 font-semibold text-sm'>Select an option first</p>}
                </div>
               
                {/* Cards */}
                <div className='lg:w-1/3 w-full flex justify-center'>
                    {!demoType && <DemoTypeCard type={"Voice"} data={"Human-like voice agents assist, provide insights, and complete enterprise tasks efficiently through seamless interaction"}/>}
                    {demoType && <DemoTypeCard type={demoType} data={demoData.find((demo) => demo.type === demoType).data} />}
                </div>
            </div>
          </div>
      </div>

      <audio ref={audioRef} />
    </motion.div>
  )
}

export default Demo;




function DemoType({type, icon, typeHandler, demoType, className = ""}){
  return (
    <button onClick={() => typeHandler(type)} className={`flex w-[80%] items-center gap-3 ${demoType === type ? "bg-blue-600" : "bg-white"} rounded-2xl overflow-hidden p-1 outline-0 border-0 cursor-pointer ${className}`}>
      <div className='bg-[#d6f549] rounded-full p-1 text-black'>
        {React.cloneElement(icon, {size : 20})}
      </div>
      <div className='font-bold text-sm text-black'>{type}</div>
    </button>
  )
}

function DemoTypeCard({type, data}){
  return (
    <div className='flex w-full max-w-[95%] sm:max-w-[80%] dark:text-black bg-white rounded-lg flex-col gap-3 justify-center p-8'>
        <h1 className='font-bold text-2xl'>Our {type} Agents</h1>
        <p className='text-sm text-gray-600'>{data}</p>
    </div>
  )
}