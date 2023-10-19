'use client';

import { GuitarForm } from "@/components";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GuitarUrl({ params }) {

  const [ guitar, setGuitar ] = useState({});

  const { slug } = params;
  
  useEffect(() => {

    const guitarSlugRef = doc(db, 'guitars', slug);

    getDoc(guitarSlugRef)
      .then((resp) => {
        setGuitar({ ...resp.data(), id: resp.id })
      })
      
  }, [ slug ]);
  

  return (
    <main className="w-full px-10 lg:w-3/4 mx-auto">

      <div>
        <Link
          href='/guitars'
          className="flex items-center gap-3 mt-5 border-2 w-fit px-4 py-1 rounded-lg text-red-800 font-bold border-red-800 hover:text-red-700 hover:border-red-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
          </svg>
          back to guitars
        </Link>
      </div>

      <section className="my-5 rounded-xl bg-white px-5 py-10">

        <h3 className="text-4xl font-bold">{ guitar?.name } signature guitar.</h3>
        <p className="lg:text-4xl text-3xl font-bold text-amber-600">
              <span className="text-lg align-top">$</span>
                { guitar?.price }</p>

        <div className="sm:flex gap-5 items-center">
          <div className="sm:w-1/3">
            <Image
              src={`/images/${ guitar?.image }.jpg`}
              alt={`${ guitar?.name } image`}
              width={400}
              height={500}/>
          </div>

          <div className="sm:w-2/3 p-5">
            <p className="font-bold text-xl lg:text-2xl text-black mb-3">Guitar description:</p>
            <p className="text-gray-700 text-justify lg:text-lg">{ guitar?.description }</p>

            <GuitarForm
              guitar={ guitar }/>
            
          </div>
        </div>
      </section>
    </main>
  )
}
