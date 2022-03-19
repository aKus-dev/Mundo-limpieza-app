import { Card } from '../components';
import { Header } from '../components';

export const CategoryScreen = () => {
    return (
        <div>

            <Header />

            <div className="min-h-screen pt-10 pb-16 px-8 flex flex-wrap gap-24 justify-center items-center">
                <Card img="./assets/home.png" title="Hogar"  />
                <Card img="./assets/company.png" title="Empresas"  />
            </div>
        </div>
    )
}
