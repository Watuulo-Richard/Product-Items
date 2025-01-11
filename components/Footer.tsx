import React from 'react'
import { FaFacebook, FaLinkedinIn, FaSnapchat, FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import ImageLogo from '@/public/logo.svg'
import { PiInstagramLogo } from 'react-icons/pi';
export default function Footer() {
  return (
    <div className=''>
        <footer id="footer" className='bg-veryDarkBlue'>
            {/* Flex-Container */}
            <div className="container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                {/* Logo and Social Links */}
                <div className="flex flex-col items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    {/* Logo */}
                    <div className="w-42">
                        <a href="#">
                            <Image src={ImageLogo} alt="" className='w-full h-full'/>
                        </a>
                    </div>
                    {/* Social Links Container */}
                    <div className="flex justify-center space-x-4 py-4">
                        <a href="#" className='text-brightRedSupLight text-3xl'>
                        <FaFacebook />
                        </a>
                        <a href="#" className='text-brightRedSupLight text-3xl'>
                        <PiInstagramLogo/>
                        </a>
                        <a href="#" className='text-brightRedSupLight text-3xl'>
                        <FaWhatsapp />
                        </a>
                        <a href="#" className='text-brightRedSupLight text-3xl'>
                        <FaLinkedinIn />
                        </a>
                        <a href="#" className='text-brightRedSupLight text-3xl'>
                        <FaSnapchat />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    </div>
  )
}
