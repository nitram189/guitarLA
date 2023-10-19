import { GuitarContext } from "@/app/GuitarContext";
import { useContext } from "react";

export const useGuitar = () => {
    return useContext( GuitarContext )
}