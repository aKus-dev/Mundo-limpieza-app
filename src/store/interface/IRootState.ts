export interface IRootState {
    saved: Saved[];
}

export interface Saved {
    id: number;
    price:number;
    name:string;
}

export interface Product {
    id: number;
    desc:string;
    shortDesc:string;
    price:number;
    name:string;
    categories:string[];
}