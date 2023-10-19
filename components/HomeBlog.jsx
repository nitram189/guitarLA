"use client"
import Image from "next/image";
import Link from "next/link";

export default function HomeBlog() {


  return (
    <section
      id='guitars'
      className='sm:flex sm:items-center gap-5 p-10 mx-auto sm:w-11/12 lg:w-3/4'> 
       
       <div className="flex justify-center md:justify-start w-full md:w-1/2">
         <Image
           src='/img/exploded.png'
           alt='home guitars logo'
           width={400}
           height={600}
           />
       </div>
        
        <div className='flex flex-col gap-5 w-full md:w-1/2'>

          <h2 className="text-4xl md:text-5xl font-bold"><span className="text-amber-900">Blog.<br/></span> Easy learning through good practices.</h2>
          
          <p className="text-xl">Have a look at our experts recommendations about choosing a guitar as well as different aspects of getting the best sound from your guitar and its parts.</p>
          
          <Link
            href='/blog'
            className='home-button w-1/2'>
              Read blog
          </Link>
        </div>
      </section>
  )
}
