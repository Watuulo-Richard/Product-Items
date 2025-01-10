import React from 'react'

export default function Cta() {
  return (
    <div>
        {/* <!-- CTA-Section --> */}
           <section id="cta" className="bg-brightRed">
            {/* <!-- Flex-Container --> */}
            <div className="container flex flex-col items-center justify-between px-6 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                <h3 className="text-3xl font-bold text-brightRedSupLight">Simplify how your team works today</h3>
                <a href="" className="hidden md:block py-3 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight">Get Started</a>
            </div>
           </section>
    </div>
  )
}
