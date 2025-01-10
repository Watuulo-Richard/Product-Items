import Image from 'next/image'
import ImagePicOne from '@/public/illustration-intro.svg'
import React from 'react'
export default function Hero() {
  return (
    <div>
       {/* <!-- Hero-Section --> */}
         <section id="hero" className="px-12">
            {/* <!-- Flex-container --> */}
             <div className="container flex flex-col-reverse md:flex-row items-center px-4 mx-auto mt-10 space-y-0 md:">
                {/* <!-- Left item --> */}
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1 className="text-4xl font-bold text-center md:5xl md:text-left">
                        Bring Everyone Together To Build Better Products
                    </h1>
                    <p className="text-darkGrayishBlue text-center md:text-left">Manage makes it simple for software teams to plan day to day tasks while keeping the larger team goals in view.</p>
                    <div className="flex justify-center md:justify-start">
                        <a href="#" className="py-3 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight">Get Started</a>
                    </div>
                </div>
                {/* <!-- Image --> */}
                 <div className="md:w-1/2">
                    <Image src={ImagePicOne} alt=""/>
                 </div>
             </div>
         </section>
    </div>
  )
}
