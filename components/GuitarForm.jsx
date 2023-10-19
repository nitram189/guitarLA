"use client"

import { useGuitar } from "@/hooks/useGuitar";
import Link from "next/link";
import { useState } from "react";

export default function GuitarForm({ guitar }) {

  const { id, name, price, image } = guitar;

  const [ quantity, setQuantity ] = useState(0);
  const { addToCart } = useGuitar();

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if( quantity === 0 ) return;

    const selectedGuitar = {
        id,
        name,
        price,
        quantity,
        image,
    }
    addToCart( selectedGuitar )

  }

  return (
    <form
      onSubmit={ handleSubmit }
      className="mt-10 flex flex-col gap-3">
  
      <label
      htmlFor="quantity"
      className="font-semibold text-lg">Quantity:</label>
  
      <select
        id="quantity"
        value={ quantity }
        onChange={ e => setQuantity( +e.target.value )}
        className="w-1/2 text-center border-2 rounded-lg py-1">
            <option value="0">-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
      </select>
  
      <button
        type="submit"
        className="home-button w-1/2">
          Add to cart
      </button>
      
      <Link
        href='/cart'
        className="card-button w-1/2">
          Go to cart
      </Link>

</form>
  )
}
