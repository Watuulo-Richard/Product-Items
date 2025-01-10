import React from 'react'

export default function Features() {
  return (
    <div>
        {/* <!-- Features Section --> */}
          <section id="features" className="px-12">
            {/* <!-- Flex-container --> */}
             <div className="container flex flex-col mx-auto space-y-12 md:space-y-0 md:flex-row">
                {/* <!-- What's Different --> */}
                 <div className="flex flex-col space-y-12 justify-center text-center md:w-1/2 md:justify-start md:text-start">
                    <h1 className="text-3xl font-bold">What's different about manage?</h1>
                    <p className="text-darkGrayishBlue">Mana provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams</p>
                 </div>
                {/* <!-- Numbered List --> */}
                 <div className="flex flex-col items-center md:w-1/2 md:space-y-12">
                    {/* <!-- List Item 1 --> */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-start md:justify-start space-x-6">
                        {/* <!-- Heading-left --> */}
                        <div className="flex items-center  md:transparent bg-brightRedLight rounded-full">
                            <p className="text-brightRedSupLight text-2xl font-bold px-4 py-2 bg-brightRed rounded-full">01</p>
                        </div>
                        {/* <!-- Text-content Right --> */}
                        <div className="">
                            <h3 className="text-2xl text-darkBlue font-bold mb-4">Track company-wide progress</h3>
                            <p className="text-darkGrayishBlue ">See how you day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                        </div>
                    </div>
                     {/* <!-- List Item 2 --> */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-start md:justify-start space-x-6">
                        {/* <!-- Heading-left --> */}
                        <div className="flex items-center  md:transparent bg-brightRedLight rounded-full">
                            <p className="text-brightRedSupLight text-2xl font-bold px-4 py-2 bg-brightRed rounded-full">02</p>
                        </div>
                        {/* <!-- Text-content Right --> */}
                        <div className="">
                            <h3 className="text-2xl text-darkBlue font-bold mb-4">Advanced built-in reports</h3>
                            <p className="text-darkGrayishBlue ">Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                        </div>
                    </div>
                    {/* <!-- List Item 3 --> */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-start md:justify-start space-x-6">
                        {/* <!-- Heading-left --> */}
                        <div className="flex items-center  md:transparent bg-brightRedLight rounded-full">
                            <p className="text-brightRedSupLight text-2xl font-bold px-4 py-2 bg-brightRed rounded-full">03</p>
                        </div>
                        {/* <!-- Text-content Right --> */}
                        <div className="">
                            <h3 className="text-2xl text-darkBlue font-bold mb-4">Everything you need in one place</h3>
                            <p className="text-darkGrayishBlue ">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                        </div>
                    </div>
                 </div>
             </div>
          </section>

    </div>
  )
}
