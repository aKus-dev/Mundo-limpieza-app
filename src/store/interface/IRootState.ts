export interface IRootState {
    saved: Saved[];
    cart: Cart[];
}

export interface Saved {
    id: number;
    price:number;
    name:string;
}

export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface Product {
    id: number;
    desc:string;
    shortDesc:string;
    price:number;
    name:string;
    categories:string[];
}