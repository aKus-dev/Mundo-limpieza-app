import { ProductButtonsContext } from './ProductButtonsContext';
import { useState } from 'react';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const ProductButtonsProvider = ({children}: Props) => {

    const [quantity, setQuantity] = useState(1);

    return (
        <ProductButtonsContext.Provider value={{
            quantity, setQuantity
        }}>
            {children}
        </ProductButtonsContext.Provider>
    )
}
