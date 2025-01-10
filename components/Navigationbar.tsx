import React from 'react'
import Image from 'next/image'
import ImagePic from '@/public/logo.svg'
import Link from 'next/link'

export default function NavigationBar() {
  return (
    <div>
        {/* <!-- Navbar --> */}
        <nav className="relative container mx-auto p-4">
            {/* <!-- Flex-container --> */}
            <div className="flex items-center justify-between">
                {/* <!-- Logo --> */}
                <Link href="#" className="logo">
                    <div className="logo-image-container">
                        <Image src={ImagePic} alt=""/>
                    </div>
                </Link>
                {/* <!-- Menu-Items --> */}
                 <div className="hidden md:flex space-x-6">
                    <Link href="#" className="hover:text-darkBlue">Pricing</Link>
                    <Link href="#" className="hover:text-darkBlue">Product</Link>
                    <Link href="#" className="hover:text-darkBlue">About Us</Link>
                    <Link href="#" className="hover:text-darkBlue">Careers</Link>
                    <Link href="#" className="hover:text-darkBlue">Community</Link>
                 </div>
                 <Link href="" className="hidden md:block py-3 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight">Get Started</Link>
            </div>
        </nav>
    </div>
  )
}
