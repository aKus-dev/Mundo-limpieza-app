import { useState, useEffect } from 'react';
import { Product } from '../../store/interface/IRootState';
import { useParams } from 'react-router-dom';
import { getElementById } from '../../store/helpers/getElementById';

export const useProduct = () => {
    
    const [product, setProduct] = useState({} as Product);

    const { id } = useParams();

    useEffect(
        () => {
            if (id) {
                const item = getElementById(parseInt(id));

                if (item) {
                    setProduct(item);
                }
            }
        }, [id]
    )

    return product;

}