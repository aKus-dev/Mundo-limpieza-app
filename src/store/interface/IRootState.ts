export interface IRootState {
    saved: Saved[];
}

interface Saved {
    id: number;
    price:number;
    name:string;
}