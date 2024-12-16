import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import companies from '../Data/Companies.json'
import Autoplay from 'embla-carousel-autoplay'
import faqs from '../Data/faq.json'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const LandingPage = () => {
    const plugin = React.useRef(
      Autoplay({ delay: 2000})
    ) 

  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl sm:text-6xl tracking-tighter py-4 lg:text-8xl font-extrabold'>
          Find Your Dream Job
          <span> and get hired</span>
        </h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
          Explore thousands of job listing or find the perfect candidate
        </p>
      </section>
      <div className='flex items-center justify-center gap-6'>
        {/* buttons */}
         <Link to='/jobs'>
          <Button variant='blue' size='xl'>
            Find Jobs
          </Button>
         </Link>
         <Link to='/post-job'>
          <Button size="xl" variant='destructive'>
            Post a Job
          </Button>
         </Link>
      </div>
        {/* carosuel */}
        <Carousel
           plugins={[plugin.current]}
          className="w-full py-10"
        >
          <CarouselContent className='flex gap-5 sm:gap-20 items-center'>
            {companies.map(({name,id, path})=>{
              return (
                <CarouselItem key={id} className='basis-1/3 lg:basis-1/6'>
                <img
                  src={path}
                  alt={name} 
                  className='h-9 sm:h-14 object-contain'
                />
                </CarouselItem>
              ) 
            })}
          </CarouselContent>
        </Carousel>

       {/* banners */}
       <img src='/banner.jpeg' className='w-full' />

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* cards */}
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs,track application and more.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post jobs,manage application and find the best candidates.</p>
          </CardContent>
        </Card>
      </section>
      {/* Accordian */}
      <Accordion type="single" collapsible>
        {faqs.map((faq,index)=>{
          return (
            <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
             <AccordionContent>
               {faq.answer}
              </AccordionContent>
           </AccordionItem>
          )
        })}
      </Accordion>
       
    </main>
  )
}

export default LandingPage
