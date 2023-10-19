'use client';

import { useEffect, useState } from "react";
import { BlogCard } from "@/components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";


const metadata = {
  title: 'GuitarLA - Blog',
  description: 'Blog based on delivering valuable knowledge and skills through a range of effective and good practices.'
}

export default function Blog() {

  const [ blogArray, setBlogArray ] = useState([]);

  useEffect(() => {
    
    const blogRef = collection(db, "blog");

    getDocs( blogRef )
      .then(( resp ) => {

      setBlogArray(
        resp.docs.map(( blog ) => {
    
          return { ...blog.data(), id: blog.id }
        })
    )
  })
  }, [])

  return (
    <main className="flex flex-col gap-3 w-full mx-auto px-10 lg:w-3/4 py-5">
      <div
        id="top-blog"
        className="bg-cover bg-left h-96 flex flex-col justify-end p-7 rounded-xl lg:mt-10"
        style={{ backgroundImage: `linear-gradient( to right, rgb(0 0 0 / .7), rgb(0 0 0 / .8)), url(/img/cursos_bg.jpg)` }}>

        <h2 className="text-5xl font-bold text-white mb-2">Blog.</h2>
        <h4 className="text-xl font-medium text-amber-600">Facilitating effortless and accessible learning experiences for individuals of all backgrounds and ages by delivering valuable knowledge and skills through a range of effective and good practices, regardless of where you are or what time it is.</h4>
        
      </div>

      <ul className="grid gap-10 py-10 sm:grid-cols-2">
      { blogArray?.map(( post ) => (
          <li key={ post.id }>
            <BlogCard
              post={ post }/>
          </li>
      ))}
      </ul>

    </main>
  )
}