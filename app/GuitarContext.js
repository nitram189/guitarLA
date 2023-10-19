'use client'

import { createContext, useEffect, useState } from "react";

export const GuitarContext = createContext({});

export const GuitarProvider = ({ children }) => {

    const cartLS = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('cart')) || [];

    const [ cart, setCart ] = useState( cartLS );
    const [ isPageReady, setIsPageReady ] = useState( false );

    useEffect(() => {
      setIsPageReady( true )
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [ cart ])


    const addToCart = ( product ) => {
      if( cart.some( productState => productState.id === product.id )) {
        
        const updatedCart = cart.map( productState => productState.id === 
        product.id ? product : productState )
        
        setCart( updatedCart )
      }
      else {
        setCart([ ...cart, product ])
      }
    }

    const updateQuantity = ({ id, quantity }) => {
        const updatedCart = cart.map(( productState ) => {
          if( productState.id === id ) {
            productState.quantity = quantity
          }
          return productState
        })
        setCart( updatedCart )
    }
    
    const deleteGuitar = ( id ) => {
      const updatedCart = cart.filter(( productState ) => productState.id !== id )

      setCart( updatedCart )
    }

    const handleCheckout = () => {
      setCart([])
    }
  
  return (
    isPageReady
    ? <GuitarContext.Provider
        value={{
          addToCart,
          cart,
          updateQuantity,
          deleteGuitar,
          handleCheckout
        }}>
          { children }
      </GuitarContext.Provider>
    : null
  )}


