import { Saved } from '../savedSlice';

export const alreadySaved = (id: number) => {
    
    const savedProducts = localStorage.getItem("saved");
    const products = JSON.parse(savedProducts!);

    const exist = products.find((product: Saved) => product.id === id);

    if (exist) {
        return true;
    }

    return false;

}