import { createContext } from "react";

interface IProductButtons {
    quantity:number;
    setQuantity: (amount:number) => void
}

export const ProductButtonsContext = createContext({} as IProductButtons);