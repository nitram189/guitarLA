"use client"

import { navLinks } from '@/constants';
import Image from 'next/image'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {

  const [ isOpen, setIsOpen ] = useState(false);

  const pathname = usePathname();

  const toggleButton = () => {
    setIsOpen( !isOpen )
  }
  const toggleLinks = () => {
    if( isOpen ) {
      toggleButton();
    }
  }

  return (
    <header className='flex justify-between items-center header p-5 sm:p-12'>
      <div>
        <Image
          src='/img/logo.png'
          alt='guitarLA logo'
          width={300}
          height={200}
          className='w-48 sm:w-80'
        />
      </div>

      <button
        type='button'
        className={`text-yellow-400 ${ isOpen ? 'hidden' : 'block lg:hidden'}`}
        onClick={ toggleButton }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <nav className={`fixed ${ isOpen
          ? 'opacity-100 visible top-0 right-0 bottom-0 bg-black/80 backdrop-blur-sm p-10 sidebar w-1/2 ease-in duration-200'
          : 'opacity-0 invisible lg:opacity-100 lg:visible lg:relative'}`}>

        <button
          type='button'
          onClick={ toggleButton }
          className={`text-yellow-400 ${ isOpen ? 'block' : 'hidden'} absolute top-20 right-12`} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <ul className={`flex gap-5 ${ isOpen ? 'flex-col items-center pt-20' : 'flex-row' }`}>
         
         { navLinks.map(( link ) => (
             <li key={ link.title }>
                <Link
                  href={ link.url }
                  onClick={ toggleLinks }
                  className={`text-white font-semibold uppercase hover:text-yellow-400 transition ease-in duration-200 ${ pathname === link.url ? 'text-yellow-400' : ''}`}
                  >
                    { link.title }
                </Link>
           </li>
          ))}
        </ul>
      </nav>


    </header>
  )
}
