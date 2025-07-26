
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useEffect } from 'react';

const HeroSection = () => {
  const imageRef =useRef();

  useEffect(()=>{
    const imageElement=imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if(scrollPosition > scrollThreshold) {
        imageElement.classList.add('scrolled'); // Adjust the divisor for smoother effect
      }
      else{
        imageElement.classList.remove('scrolled');
      }
    }; 
    window.addEventListener('scroll',handleScroll) 

    return () => window.removeEventListener("scroll",handleScroll);
  },[]);

  return (
    <div className='pb-20 px-4'>
      <div className='container mx-auto text-center'>
        <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>
          Manage your finances <br />with Spendarella
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Meet Spendarella — your glam, AI-powered finance confidante. She’s not just here to help you track expenses or set budgets — she’s here to give your money mindset a glow-up. 
        </p>
        <div className='justify-center space-x-4 flex'>
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <Image src="/main.jpeg"
              width={1200} height={300}
              alt="Dashboard preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
