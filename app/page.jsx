import HeroSection from '@/components/hero';
import { statsData, featuresData, howItWorksData, testimonialsData } from '@/data/landing';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="mt-40 font-sans">
  <HeroSection />

  {/* Stats Section */}
  <section className='py-20 bg-rose'>
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        {statsData.map((stat, index) => (
          <div key={index} className='text-center'>
            <div className='text-4xl font-bold text-navy mb-2'>{stat.value}</div>
            <div className='text-gray-600'>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section className='py-20 bg-white'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-elegant text-center text-navy mb-12'>
        Everything you need to manage your finances
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {featuresData.map((feature, index) => (
          <Card key={index} className="p-6 shadow-xl bg-blush border-rose border">
            <CardContent className="space-y-4 pt-4">
              <div className='text-lilac'>{feature.icon}</div>
              <h3 className='text-xl font-semibold text-navy'>{feature.title}</h3>
              <p className='text-gray-700'>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* How It Works */}
  <section className='py-20 bg-softgray'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-elegant text-center text-navy mb-16'>
        How it works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {howItWorksData.map((step, index) => (
          <div key={index} className='text-center'>
            <div className='w-16 h-16 bg-rose rounded-full flex items-center justify-center mx-auto mb-4 text-navy'>
              {step.icon}
            </div>
            <h3 className='text-xl font-semibold text-navy'>{step.title}</h3>
            <p className='text-gray-600'>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section className='py-20'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-elegant text-center text-navy mb-12'>
        What our users say?
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <Card key={index} className="p-6 bg-white shadow-md border border-lilac">
            <CardContent className="pt-4">
              <div className='flex items-center mb-4'>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className='ml-4'>
                  <div className='font-semibold text-navy'>{testimonial.name}</div>
                  <div className='text-sm text-gray-600'>{testimonial.role}</div>
                </div>
              </div>
              <p className='text-sm text-gray-600 italic'>
                “{testimonial.quote}”
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className='py-20 bg-lilac'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-elegant text-white mb-4'>
        Ready to take control of your finances?
      </h2>
      <p className='text-white mb-8 max-w-2xl mx-auto'>
        Join <span className="font-bold">Spendarella</span> today and start your journey
        to stylish and smart spending.
      </p>
      <Link href="/dashboard">
        <Button size="lg" className="bg-white text-lilac hover:bg-rose hover:text-navy font-semibold transition-all">
          Start your free trial
        </Button>
      </Link>
    </div>
  </section>
</div>
  );
}
