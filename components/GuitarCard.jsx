import Image from "next/image";
import Link from "next/link";


export default function GuitarCard({ guitar }) {

    const { id, name, price, description, image } = guitar;
  
  return (
    <div
      id="guitarCard"
      className="flex py-5 px-3 shadow-lg rounded-lg bg-white">
      <div className="w-1/2">
        <Image
          src={`/images/${ image }.jpg`}
          alt={`${ name } guitar image`}
          width={250}
          height={300}
          className="rounded-lg w-full "/>
      </div>

      <div className="flex flex-col justify-around w-1/2">
        <div className="flex flex-col gap-8">
            <h3 className="xl:text-4xl text-3xl font-bold">{ name }</h3>
            <p className="guitar-description text-gray-700 text-sm lg:text-base">{ description }</p>
            <p className="lg:text-4xl text-3xl font-bold text-amber-600"><span className="text-lg align-top">$</span>{ price }</p>
        </div>

   
          <Link
            href={`/guitars/${ id }`}
            className="card-button">
              See guitar
          </Link>

      </div>

    </div>
  )
}

