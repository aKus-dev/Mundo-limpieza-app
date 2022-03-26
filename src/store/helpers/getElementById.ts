import products from '../data/data.json'

export const getElementById = (id:number) => {
    return products.find(product => product.id === id)
}