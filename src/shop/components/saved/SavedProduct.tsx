import { CartProductImage, SavedProductInfo, SavedProductImage } from '..';

export const SavedProduct = () => {
    return (
        <article className="flex gap-8 max-w-[520px] w-full">
            <SavedProductImage />
            <SavedProductInfo />
        </article>
    )
}
