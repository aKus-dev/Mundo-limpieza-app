import { SavedHeader, SavedProduct } from '../components';

export const SavedScreen = () => {
    return (
        <div className="px-12 max-w-[1200px] mx-auto">
            <SavedHeader />

            <div className="max-w-[1000px] mx-auto flex flex-col gap-16 items-center">
                <SavedProduct />
            </div>
        </div>
    )
}
