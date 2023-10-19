
import Link from "next/link";

export default function HomeCourse() {

  return (
    <section className='course'> 
        
        <div className='flex flex-col gap-5 w-full mx-auto sm:w-11/12 lg:w-3/4'>
          <div className="sm:w-1/2 w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-10">Courses with up to 30% discount</h2>
          
            <p className="text-xl text-white">All courses are included, online, and with the best instructors. Learn the top techniques developed by our team of musicians and collaborators.</p>
          </div> 

          <Link
            href='/'
            className="course-button sm:w-1/3 lg:w-1/4">
              Go to courses
          </Link>
        </div>
       
      </section>
  )
}
