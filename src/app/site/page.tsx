import Image from 'next/image'
import clsx from 'clsx'
import { Car, Check } from 'lucide-react'
import Link from 'next/link'
import { pricingCards } from '@/lib/constants'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Footer from '@/components/global/Footer'

export default async function Home() {
  return (
    <>
      <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col ">
       
   {/* Light Mode Background */}
   <div className="absolute inset-0 -z-10 size-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:hidden"></div>
   {/* <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_40%_800px,#0056b3,transparent)] dark:hidden" /> */}
        {/* Dark Mode Background */}
       
<div className="relative size-full bg-slate-950">
  <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
  <div className="absolute bottom-0 right-[-20%] top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
</div>

        {/* Different text content for light and dark modes */}
        <p className="font-bold text-2xl text-[#0056b3] dark:hidden text-center">Blem is easy-to-use, zero-clutter CRM built for the way small business actually sell:</p>
        <p className="font-bold text-2xl hidden dark:block text-[#ffffff] text-center">Fast, all-in-one Sales Communication</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[300px]">
            Blem
          </h1>
          </div>
          <div className="flex justify-center items-center relative md:mt-[-70px]">
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={1000}
            width={1000}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
          </div>
      </section>
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
      <Footer/>

      </>
  )
}

