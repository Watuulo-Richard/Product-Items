import Image from 'next/image'
import React from 'react'
import ImagePicTwo from '@/public/avatar-ali.png'
import ImagePicThree from '@/public/avatar-anisha.png'
import ImagePicFour from '@/public/avatar-richard.png'
export default function Card() {
  return (
    <div>
       {/* <!-- Testimonials --> */}
           <section id="testimonials" className="px-12">
            {/* <!-- Container to heading and testimonial blocks --> */}
             {/* <!-- Heading --> */}
             <h2 className="text-center text-4xl font-bold my-4">What's Different About Manage?</h2>
                <div className="max-w-6xl mx-auto flex flex-col space-y-6 md:flex-row md:space-x-6">
                    {/* <!-- Testimonial Container --> */}
                     <div className="flex flex-col my-6 md:flex-row md:space-x-6"></div>
                     {/* <!-- Testimonial-1 --> */}
                      <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                        <div className="testimonial-image-container w-24">
                            <Image className="w-96" src={ImagePicTwo} alt=""/>
                        </div>
                        <div className="testimonial-text text-center">
                            <h5 className="text-lg font-bold">Richard</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
                            </p>
                        </div>
                      </div>

                      {/* <!-- Testimonial-2 --> */}
                      <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                        <div className="testimonial-image-container w-24">
                            <Image className="w-96" src={ImagePicThree} alt=""/>
                        </div>
                        <div className="testimonial-text text-center">
                            <h5 className="text-lg font-bold">Anisha</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
                            </p>
                        </div>
                      </div>

                      {/* <!-- Testimonial-3 --> */}
                      <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                        <div className="testimonial-image-container w-24">
                            <Image className="w-96" src={ImagePicFour} alt=""/>
                        </div>
                        <div className="testimonial-text text-center">
                            <h5 className="text-lg font-bold">Ali Bravo</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                "We have been able to cancel so many other subscriptions since Manage. There is no more cross-channel confusion and everyone is much more focused."
                            </p>
                        </div>
                      </div>
                </div>
                {/* <!-- Button --> */}
                 <div className="my-2 md:my-12 flex justify-center">
                    <a href="" className="hidden md:block py-3 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight">Get Started</a>
                 </div>
           </section>
    </div>
  )
}
