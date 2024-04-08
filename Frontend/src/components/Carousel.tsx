'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CarouselCard({ slide }: { slide: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const cnt = slide.length;
  const transitionTime = 2000; // time for transition between images
  const delayTime = 3000; // time to wait before advancing to the next slide

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % cnt);
    }, delayTime);
    return () => clearTimeout(timer);
  }, [currentIndex, delayTime, cnt]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? (cnt - 1) : (currentIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % cnt);
  };

  return (
    <div className='w-[90%] h-[90%] min-h-[350px] relative py-5 px-2 rounded-xl'>
      <div className='absolute top-[50%] translate-y-[-1/2] translate-x-0 left-[32px] z-10 font-bold text-xl sm:text-2xl lg:text-3xl text-[#F9F9F9] cursor-pointer' onClick={goToPrevious}>&lt;</div>
      <div className='absolute top-[50%] translate-y-[-1/2] translate-x-0 right-[32px] z-10 font-bold text-xl sm:text-2xl lg:text-3xl text-[#F9F9F9] cursor-pointer' onClick={goToNext}>&gt;</div>
      {
        isLoading? (
          <div className='w-[100%] h-[100%] rounded-xl back' style={{backgroundImage: `url(${slide[currentIndex]})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
          </div>
        ) : (
          <div className='w-[100%] h-[100%] rounded-xl back' style={{backgroundImage: `url(${slide[currentIndex]})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', transition: `background-image ${transitionTime}ms ease-in-out`, animation: `fade ${transitionTime + delayTime}ms ease-in-out infinite`}}>
          </div>
        )
      }
    </div>
  )
}