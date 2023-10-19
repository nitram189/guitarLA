'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import CartCard from "@/components/CartCard";
import { useGuitar } from "@/hooks/useGuitar";



export default function Page() {

    const [ total, setTotal ] = useState(0)

    const { cart, handleCheckout } = useGuitar();

    useEffect(() => {
      const totalToPay = cart.reduce(( total, item ) => total + ( item.price * item.quantity ), 0 )
      setTotal( totalToPay )
    }, [ cart ])

  return (
    <main>
      <section className="w-full lg:w-3/4 mx-auto sm:p-10 p-3 ">

        <h1 className="text-4xl font-bold">Shopping cart.</h1>

        <div className="sm:flex gap-10 py-5">

          <div className="sm:w-2/3 w-full bg-white rounded-lg p-5">
            <h2 className="text-2xl font-semibold pb-5">List of products</h2>
            { cart.length === 0
              ? <div className="w-full flex flex-col gap-10 items-center">
                  <p className="text-lg">Your shopping cart is empty :/ you want see some guitars?</p>
                  <Link
                    href='/guitars'
                    className="home-button w-3/4">
                      Go to guitars
                  </Link>
                </div>
              : ( 
                <ul>
                 { cart.map(( productState ) => (
                    <CartCard
                      key={ productState.id }
                      productState={ productState }/>
                 ))}
                </ul>
                )}
          </div>

          <aside className="bg-gray-200 p-5 rounded-lg sm:w-1/3 w-full mt-5 sm:mt-0">
            <h3 className="pb-3 text-2xl font-semibold">Summary</h3>
            
            <p className="text-lg font-medium">Total to pay: <span className="text-2xl font-bold text-amber-600">${ total }</span>
            </p>
            
            { cart.length === 0
              ? ''
              : <a
                  href='#'
                  onClick={ handleCheckout }
                  className="home-button w-full mt-5"
                  type="button">
                    Go to checkout
                </a> }
          </aside>
        </div>
      </section>
    </main>
  )
}
