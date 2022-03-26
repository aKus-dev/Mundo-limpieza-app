interface ProductInfoProps {
    name:string;
    desc:string;
}

export const ProductInfo = ({name, desc}: ProductInfoProps) => {
    return (
        <div className="text-center mt-8 px-4 max-w-[650px] mx-auto">
            <h1 className="font-title text-[22px] text-primary">{name}</h1>
            <p className="mt-2 font-text text-[16px] leading-[1.5]">{desc}</p>
        </div>
    )
}
