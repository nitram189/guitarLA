import { useGuitar } from "@/hooks/useGuitar";
import Image from "next/image";


export default function CartCard({ productState }) {

  const { updateQuantity, deleteGuitar } = useGuitar();

  return (
    <li className="flex py-5 border-t">
      <div className="w-1/4 flex justify-center items-start">
        <Image
          src={`/images/${ productState.image }.jpg`}
          alt={`${ productState.name } guitar image`}
          width={60}
          height={60}
          className="rounded-full"/>
      </div>

      <div className="w-3/4 flex flex-col gap-2">
        <h3 className="text-xl font-medium">Guitar name: <span className="font-semibold text-amber-900">{ productState.name }</span></h3>
        <p className="text-xl font-bold text-amber-700">${ productState.price }</p>
        <div>
          <select
            value={ productState.quantity }
            onChange={ (e) => updateQuantity({
              id: productState.id,
              quantity: +e.target.value
            })}
            className="w-1/2 text-center border-2 rounded-lg py-1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
        </div>
        <p className="font-semibold text-lg">Subtotal: ${ productState.quantity * productState.price }</p>
      </div>
      
      <div>
        <button
          onClick={ () => deleteGuitar( productState.id ) }
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
      </div>
    </li>

  )
}
