import { footerLinks } from "@/constants";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="sm:flex bg-black w-full py-10 px-10">

      <div className="sm:w-3/4 sm:flex justify-evenly py-10 sm:py-0">
        { footerLinks.map((link) => (
          <div
            key={ link.title }
            className="flex flex-col gap-3"
            >
              <h5 className="text-sm uppercase font-bold text-yellow-500">{ link.title }</h5>
              { link.links.map((link) => (
                  <Link
                    key={ link.title }
                    href={ link.url }
                    target="_blank"
                    className="text-xs font-medium uppercase text-gray-500 hover:text-yellow-400 transition ease-in duration-200 last-of-type:mb-6"
                    >
                      { link.title }
                  </Link>
              ))}
          </div>
        ))}
      </div>

      <div className="sm:w-1/4 flex text-gray-400">
        <h4 className="text-xs uppercase">
          © 2023 - Guitar LA<br/>All rights reserved
        </h4>
      </div>

    </footer>
  )
}
