'use client';

import { useEffect, useState } from "react";
import { dateFormat } from "@/helpers";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";


export default function BlogUrl({ params }) {

  const [post, setPost] = useState({});
  
  const { slug } = params;

  useEffect(() => {
    const postSlugRef = doc(db, 'blog', slug)
    getDoc( postSlugRef )
      .then((resp) => {
        setPost({ ...resp.data(), id: resp.id })
      })

  }, [ slug ])


  const { title, content, image, publishedAt } = post;

  return (
    <main>

     <section className="w-full px-10 lg:w-3/4 mx-auto">

      <Link
          href='/blog'
          className="flex items-center gap-3 mt-5 border-2 w-fit px-4 py-1 rounded-lg text-red-800 font-bold border-red-800 hover:text-red-700 hover:border-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
            </svg>
              back to the blog
      </Link>

      <div className="bg-cover bg-center h-80 flex flex-col justify-end p-5 mt-10 rounded-xl"
        style={{ backgroundImage: `linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(/images/${ image }.jpg)`}}>
        
        <h3 className="text-4xl font-bold text-white mb-3">{ title }</h3>  
        <p className="text-amber-600 font-semibold">Published on: { dateFormat( publishedAt ) }</p>
      </div>

      <div className="flex flex-col gap-3 w-full">

        <p className="text-base leading-relaxed text-gray-700 my-5">{ content }</p>

      </div>

     </section>
  </main>
  )
}
