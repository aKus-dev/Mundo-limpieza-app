import { Saved } from '../slices/savedSlice';

export const alreadySaved = (id: number) => {

    let products;
    const savedProducts = localStorage.getItem("saved");

    if (!savedProducts) return false;

    products = JSON.parse(savedProducts);

    const exist = products.find((product: Saved) => product.id === id);

    if (exist) {
        return true;
    }

    return false;

}