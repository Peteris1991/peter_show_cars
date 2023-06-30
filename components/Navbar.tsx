import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full apsolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 border-b border-gray-200'>
            <Link href="/" className='flex justify-center items-center'>
                <Image 
                  src='/logo.svg'
                  alt='Car Logo'
                  width={118}
                  height={18}
                  className='object-contain'
                />
            </Link>

            <CustomButton 
              title="Sign In"
              btnType="button"
              containerStyles='text-white bg-primary-blue rounded-full min-w-[130px]'
            />
        </nav>
    </header>
  )
}

export default Navbar