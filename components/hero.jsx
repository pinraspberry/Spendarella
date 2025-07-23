
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <div className='pb-20 px-4'>
      <div className='container mx-auto text-center'>
        <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>
          Manage your finances <br />with Spendarella
        </h1>
        <p>
          Meet Spendarella — your glam, AI-powered finance confidante. She’s not just here to help you track expenses or set budgets — she’s here to give your money mindset a glow-up. Whether you’re saving for statement boots or building generational wealth (or both — balance, babe), Spendarella keeps you in control with real-time insights, intuitive budgeting tools, and effortlessly chic financial planning.
          Think of her as the headliner of your money journey: stylish, smart, and a little bit savage. She doesn’t just optimize your spending — she redefines it.
          You're not overspending — you're curating. Spendarella just makes sure you’re doing it with intention \(and interest\).
        </p>
        <div>
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
        <div>
          <div>
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
