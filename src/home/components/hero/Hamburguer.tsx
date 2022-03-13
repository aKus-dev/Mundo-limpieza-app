import { useHamburguer } from '../../hooks';

export const Hamburguer = () => {

    const {
        span1, span2, span3,
        handleHamburguer
    } = useHamburguer();
   
    return (
        <div className="flex flex-col gap-[6px] cursor-pointer" onClick={handleHamburguer}>
            <span ref={span1} className="h-[2px] w-[25px] bg-white duration-300"></span>
            <span ref={span2} className="h-[2px] w-[15px] bg-white duration-300"></span>
            <span ref={span3} className="h-[2px] w-[25px] bg-white duration-300"></span>
        </div>
    )
}
