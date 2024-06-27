import TitleSection from '@/components/landing-page/title-section';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Banner from '../../../public/appBanner.png';
import Preview from '../../../public/assets/preview.png'
import Cal from '../../../public/cal.png';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Car, Check } from 'lucide-react'
import { CLIENTS,pricingCards,USERS } from '@/lib/constants';
import { randomUUID } from 'crypto';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import CustomCard from '@/components/landing-page/custom-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Footer from '@/components/global/Footer'

const Home = () => {
  return (
    <>
      <section
        className=" overflow-hidden
      px-4
      sm:px-6
      mt-10
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center"
      >
        <TitleSection
          pill="✨ Your Blem CRM ."
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div
          className="bg-white
          p-[2px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-[300px]
        "
        >
          <Button
            variant="btn-secondary"
            className=" w-full
            rounded-[10px]
            p-6
            text-2xl
            bg-background
          "
          >
            Get Blem Free
          </Button>
        </div>
        <div
          className="md:mt-[-90px]
          sm:w-full
          w-[750px]
          flex
          justify-center
          items-center
          mt-[-40px]
          relative
          sm:ml-0
          ml-[-50px]
        "
        >
          <Image
            src={Banner}
            alt="Application Banner"
          />
          <div
            className="bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          "
          ></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden
          flex
          after:content['']
          after:dark:from-brand-dark
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute
        "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="flex
                flex-nowrap
                animate-slide
          "
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative
                    w-[200px]
                    m-20
                    shrink-0
                    flex
                    items-center
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-4
        sm:px-6
        flex
        justify-center
        items-center
        flex-col
        relative
      "
      >
        <div
          className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-10
          top-22
        "
        />
        <TitleSection
          title="Keep track of your meetings all in one place"
          subheading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
          pill="Features"
        />
        <div
          className="mt-10
          max-w-[450px]
          flex
          justify-center
          items-center
          relative
          sm:ml-0
          rounded-2xl
          border-8
          border-washed-purple-300 
          border-opacity-10
        "
        >
          <Image
            src={Cal}
            alt="Banner"
            className="rounded-2xl"
          />
        </div>
      </section>
      <section className="relative">
        <div
          className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-100
          top-56
        "
        />
        <div
          className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
        >

      <div id="steps" className="flex flex-col gap-6 container mt-20">
      <h2 className="text-5xl sm:font-semibold mb-14">How it works</h2>

      {/* Step 1 */}
      <div id="step1" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 1</span>
          <h3 className="text-4xl">Bootstrap straight from your web app</h3>
          <p className="text-lg font-light">Copy and paste your web app url into Blem. Customise your app design, app icon and window frame UI with no code.</p>
          <ul className="grid grid-cols-2 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className="flex gap-4">
                <i className="fa-solid fa-check text-gray-500"></i>
                <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Multiple windows</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-12">
        <Image
         src={Preview} 
         alt="Step 3 illustration"
         height={800}
          width={550}
          />
        </div>
      </div>

      {/* Step 2 */}
      <div id="step2" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 2</span>
          <h3 className="text-4xl">Bootstrap straight from your web app</h3>
          <p className="text-lg font-light">Copy and paste your web app url into Blem. Customise your app design, app icon and window frame UI with no code.</p>
          <ul className="grid grid-cols-2 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className="flex gap-4">
                <i className="fa-solid fa-check text-gray-500"></i>
                <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Multiple windows</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-12">
        <Image
         src={Preview} 
         alt="Step 3 illustration"
         height={800}
          width={550}
          />
        </div>
      </div>

      {/* Step 3 */}
      <div id="step3" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 3</span>
          <h3 className="text-4xl">Bootstrap straight from your web app</h3>
          <p className="text-lg font-light">Copy and paste your web app url into Blem. Customise your app design, app icon and window frame UI with no code.</p>
          <ul className="grid grid-cols-2 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className="flex gap-4">
                <i className="fa-solid fa-check text-gray-500"></i>
                <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Multiple windows</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-12">
        <Image
         src={Preview} 
         alt="Step 3 illustration"
         height={800}
          width={550}
          />
        </div>
      </div>
    </div>
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx('mt-10 flex flex-nowrap gap-6 self-start', {
                  'flex-row-reverse': index === 1,
                  'animate-[slide_250s_linear_infinite]': true,
                  'animate-[slide_250s_linear_infinite_reverse]': index === 1,
                  'ml-[100vw]': index === 1,
                }),
                'hover:paused'
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px]
                  shrink-0s
                  rounded-xl
                  dark:bg-gradient-to-t
                  dark:from-border dark:to-background
                "
                  cardHeader={
                    <div
                      className="flex
                      items-center
                      gap-4
                  "
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="mt-20
        px-4
        sm:px-6
      "
      >
         <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
       <h2 className="text-4xl text-center"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
           Our straightforward pricing plans are tailored to meet your needs. If
           {" you're"} not <br />
           ready to commit you can get started for free.
         </p>

        <div className="flex  justify-center gap-4 flex-wrap mt-6">
         {pricingCards.map((card) =>(
            
            <Card key={card.title} className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited Saas',
            })}>
              <CardHeader>
                <CardTitle className={clsx('', {
                    'text-muted-foreground': card.title !== 'Unlimited Saas',
                  })}>
                    {card.title}
                  </CardTitle>
                  <CardDescription>
                    {card.description}
                    </CardDescription>
              </CardHeader>
              <CardContent>
              <span className="text-4xl font-bold">
                  {card.price}
                </span>
                <span className="text-muted-foreground">
                  <span>/m </span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                  <div>{card.features.map((feature)=> (
                  <div key={feature}
                  className='flex gap-2 items-center'>
                    <Check className='text-muted-foreground'/>
                    <p>{feature}</p>
                  </div>
                  ))}
                  </div>

                  <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    'w-full text-center bg-primary p-2 rounded-md',
                    {
                      '!bg-muted-foreground':
                        card.title !== 'Unlimited Saas',
                    }
                  )}
                >
                  Get Started
                </Link>

              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
       
        {/* Ready to start building section */}
      <div className="rounded-2xl flex flex-col bg-black lg:flex-row mt-12 pt-6 lg:pt-10">
        <div className="flex flex-col gap-4 p-8 lg:flex-1 lg:gap-8">
          <span className="text-gray-400 font-display font-medium">READY TO START BUILDING?</span>
          <h2 className="text-4xl text-white leading-tight lg:text-5xl">Create your desktop app for free*</h2>
          <p className="text-lg font-light text-gray-400 lg:text-xl">ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>
          <Link href="/agency" className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80 flex justify-center items-center gap-4">
            <span>Get Started</span>
          </Link>
          <p className="text-gray-400 text-xs italic leading-tight">*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
        </div>
        <div className="lg:w-1/2">
        <Image
         src={Preview} 
         alt="Step 3 illustration"
         height={800}
          width={550}
          />
        </div>
      </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;