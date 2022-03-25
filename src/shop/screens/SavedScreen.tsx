import { SavedHeader, SavedProduct } from '../components';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/interface/IRootState';


export const SavedScreen = () => {

    const savedProducts = useSelector((state: IRootState) => state.saved);


    return (
        <div className="px-12 max-w-[1200px] mx-auto">
            <SavedHeader />

            <div className="max-w-[1000px] mx-auto flex flex-col gap-16 items-center">
                {
                    savedProducts.length !== 0
                        ? (
                            savedProducts.map(({ id, name, price }) => (
                                <SavedProduct key={id} id={id} name={name} price={price} />
                            ))
                        )
                        : <h1 className="bg-gradient-to-r from-[#FA9630] to-[#FF6042] font-title text-[25px] text-white px-8 py-4 rounded-[10px] w-full text-center max-w-[550px]">No hay productos guardados</h1>
                }
            </div>
        </div>
    )
}
