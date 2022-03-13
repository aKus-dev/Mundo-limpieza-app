import { Card } from '../components';

export const CategoryScreen = () => {
    return (
        <div className="min-h-screen py-16 flex flex-wrap gap-20 justify-center items-center">
            <Card img="https://cdn-icons-png.flaticon.com/512/602/602175.png" title="Hogar" text="Ve nuestros productos de limpieza para el hogar" />

            <Card img="https://cdn-icons.flaticon.com/png/512/3073/premium/3073443.png?token=exp=1647211311~hmac=48842d200e415dcb94a1a21bb6d6138b" title="Empresas" text="Ve nuestros productos de limpieza para  empresas" />

            <Card img="https://cdn-icons.flaticon.com/png/512/1065/premium/1065711.png?token=exp=1647211350~hmac=efd2181ffb7b5ab04e1bbb42aae91848" title="Cocina" text="Ve nuestros productos de limpieza para la cocina" />
        
        </div>
    )
}
