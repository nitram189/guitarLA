"use client"
import Image from "next/image";
import Link from "next/link";

export default function HomeGuitars() {

  return (
    <section
      id='guitars'
      className='sm:flex sm:items-center gap-10 px-10 pb-20 mx-auto sm:w-11/12 lg:w-3/4'> 
       
       <div className="flex justify-center md:justify-start w-full md:w-1/2">
         <Image
           src='/img/three-guitars.png'
           alt='home guitars logo'
           width={400}
           height={600}
           />
       </div>
        
        <div className='flex flex-col gap-5 w-full md:w-1/2'>

          <h2 className="text-4xl md:text-5xl font-bold"><span className="text-amber-900">Guitars.<br/></span> Discover our best collection.</h2>
          
          <p className="text-xl">{`Discover the perfect match for you, whether you're a beginner or a professional guitarist. Explore and select the one that resonates with you.`}</p>
          
          <Link
            href='/guitars'
            className='home-button w-1/2'>
              See guitars
          </Link>
        </div>
      </section>
  )
}
