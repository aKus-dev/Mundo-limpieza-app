import { Cart } from '../slices/cartSlice';

export const alreadyInTheCart = (id: number) => {

    let products;
    const cartProducts = localStorage.getItem("cart");

    if (!cartProducts) return false;

    products = JSON.parse(cartProducts);
    const exist = products.find((product: Cart) => product.id === id);
  

    if (exist) {
        return true;
    }

    return false;

}