import { dateFormat } from "@/helpers";
import Image from "next/image";
import Link from "next/link";


export default function BlogCard({ post }) {

  const { id, title, content, slug, publishedAt, image } = post;

  return (
    <div className="flex flex-col shadow-lg rounded-md bg-gray-200/50">

      <Image
        src={`/images/${ image }.jpg`}
        alt={`${ title } image`}
        width={250}
        height={300}
        className="rounded-t-md w-full"
        />


      <div className="p-4 flex flex-col gap-2">

        <h3 className="text-2xl font-bold">{ title }</h3>

        <p className="text-sm text-amber-700 font-semibold">
          { dateFormat( publishedAt ) }
        </p>

        <p className="description text-gray-700">{ content }</p>

       <div className="mt-5">
        <Link
          href={`/blog/${ id }`}
          className="card-button">
            Read more
        </Link>
       </div>
      </div>

      
    </div>
  )
}
