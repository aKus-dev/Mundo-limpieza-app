import { Card } from '../components';

export const CategoryScreen = () => {
    return (
        <div className="min-h-screen py-16 flex flex-wrap gap-24 justify-center items-center">
            <Card img="./assets/home.png" title="Hogar" text="Ve nuestros productos de limpieza para el hogar" />
            <Card img="./assets/company.png" title="Empresas" text="Ve nuestros productos de limpieza para  empresas" />
        </div>
    )
}
