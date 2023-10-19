'use client';

import { useEffect, useState } from "react";
import GuitarCard from "@/components/GuitarCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";


const metadata = {
  title: 'GuitarLA - Guitars',
  description: 'Electric guitar e-shop. Well-known guitarist brands and the best deals all over internet'
}

export default function Guitars() {

  const [ guitarArray, setGuitarArray ] = useState([]);

 useEffect(() => {
  
  const guitarRef = collection(db, "guitars");

  getDocs( guitarRef )
  .then(( resp ) => {

    setGuitarArray(
      resp.docs.map(( guitar ) => {
  
        return { ...guitar.data(), id: guitar.id }
      })
    )
  })
 }, []);
  
  return (
    <main className="flex flex-col gap-3 w-full mx-auto px-10 lg:w-3/4 py-5">

      <div
        id="top-guitar"
        className="bg-cover bg-center h-96 flex flex-col justify-end p-7 rounded-xl lg:mt-10"
        style={{ backgroundImage: `linear-gradient( to right, rgb(0 0 0 / .7), rgb(0 0 0 / .8)), url(/img/bg-guitar.jpg)` }}>

        <h2 className="text-5xl font-bold text-white mb-2">Guitars.</h2>
        <h4 className="text-xl font-medium text-amber-600">{`Immerse yourself in a world of exquisite craftsmanship and unparalleled sound. Our knowledgeable staff will help you, whether you're a seasoned strummer or a first-time player. Explore a diverse range of brands, styles, and tones, each waiting to be plucked and played.`}</h4>
        
      </div>

      <ul className="grid gap-10 py-10 md:grid-cols-2">
      { guitarArray?.map(( guitar ) => (
          <li key={ guitar.id }>
            <GuitarCard
              guitar={ guitar }/>
          </li>
      ))}
      </ul>

    </main>
  )
}
