import Link from "next/link";

export const metadata = {
  title: 'GuitarLA - About',
  description: 'History of GuitarLA Los Angeles California since 1989'
}


export default function about() {

    return (
      
      <main className="flex flex-col gap-3 w-full mx-auto px-10 lg:w-3/4 py-5">
  
        <div
          id="top-about"
          className="bg-cover bg-center h-96 flex flex-col justify-end p-5 rounded-xl lg:mt-10"
          style={{ backgroundImage: `linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(/img/old-studio.jpg)` }}>
  
          <h2 className="text-5xl font-bold text-white mb-2">About us.</h2>
          <h4 className="text-xl font-semibold text-amber-600/90">The beginnings of Guitar LA in Los Angeles, California.</h4>
          
        </div>
  
        <div className="flex flex-col gap-5 py-10 text-gray-700">
          <p>Once upon a time in the vibrant and eclectic city of Los Angeles, during the year 1989, there existed a group of talented and passionate musicians who shared a common dream. These musicians were not only skilled in playing their instruments, but they also had a burning desire to share their knowledge and expertise with aspiring guitarists from all walks of life.</p>
  
          <p>The group consisted of four friends: Alex, a virtuoso on the electric guitar; Lily, a gifted acoustic guitarist with a penchant for songwriting; Max, a versatile bassist with an ear for funky grooves; and Sarah, a dynamic drummer known for her impeccable rhythm. They had met through various gigs, open mic nights, and music schools around the city, and their shared passion for music had solidified their friendship.</p>
  
          <p>{`One evening, while jamming in Max's garage studio, they struck upon an idea that would change their lives forever. With the advent of the internet, they saw an opportunity to reach out to aspiring guitarists not only in Los Angeles but around the world. They envisioned a website that would serve as a hub for learning guitar, complete with comprehensive courses, insightful blogs, and an interactive community.`}</p>
  
          <p>{`After weeks of brainstorming, planning, and late-night discussions fueled by coffee and creativity, the quartet unveiled their masterpiece: "GuitarLA." The website boasted a sleek design with a touch of '80s flair, paying homage to the era while embracing the technological advancements of the time.`}</p>
  
          <p>{`Alex's intricate guitar solos, Lily's heartfelt strumming, Max's thumping basslines, and Sarah's rhythmic patterns became the core of their video-based courses. They meticulously crafted lessons that catered to beginners and advanced players alike, covering a wide array of genres and techniques. From blues to rock, fingerstyle to shredding, GuitarLA had it all.`}</p>
  
          <p>The website also featured a blog section where the musicians shared their personal insights, musical inspirations, and behind-the-scenes stories from their journey. This not only provided valuable content but also added a personal touch that resonated with their growing community.</p>
  
          <p>{`Their vision didn't stop there. The quartet decided to organize a series of online workshops, where they would teach live, interactive classes to students from across the globe. These workshops allowed them to connect with their students in real-time, answering questions, providing instant feedback, and forging genuine connections.`}</p>
  
          <p>{`Word spread quickly about GuitarLA. Musicians and guitar enthusiasts from all corners of the world flocked to the website to learn from these talented individuals who had created a unique blend of '80s nostalgia and modern educational tools. As the community grew, so did the support for the musicians, enabling them to continually improve their offerings and expand their reach.`}</p>
  
          <p>{`With time, the success of GuitarLA not only fulfilled the quartet's dreams of imparting musical knowledge but also solidified their place in the music industry. They were invited to perform at festivals, collaborate with renowned artists, and even produce their own albums, infusing their signature styles into the music world.`}</p>
  
          <p>And so, in the year 1989, in the heart of Los Angeles, four friends united by their passion for music and their desire to teach, transformed the world of guitar education and left an indelible mark on the music scene. GuitarLA became a testament to the power of creativity, collaboration, and the pursuit of dreams in an era of burgeoning technological innovation.</p>
        </div>
  
        <Link
          href='#top-about'
          className="flex items-center gap-3 border-2 w-fit px-4 py-1 rounded-lg text-red-800 font-bold border-red-800 hover:text-red-700 hover:border-red-700 mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3" />
            </svg>
              back to the top
        </Link>
      </main>
    )
  }
  

