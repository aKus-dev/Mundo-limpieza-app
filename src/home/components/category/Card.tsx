import { Link } from 'react-router-dom';
import { ButtonGradient } from '../';

interface CardProps {
    img: string;
    title: string;
    text: string;
}

export const Card = ({ img, title, text }: CardProps) => {

    return (
        <div className="min-h-[450px] w-[80%] max-w-[350px] flex flex-col md:duration-300 md:hover:scale-105 bg-white rounded-[30px] shadow-2xl ">

            <div className="bg-gradient-to-b from-[#FA9630] to-[#FF6042]  rounded-t-[30px] rounded-b-[50%] flex items-center justify-center flex-grow" >

                <img
                    className="h-[150px]"
                    src={img}
                    alt={title}
                />

            </div>

            <div className="rounded-b-[30px] min-h-[200px] text-center p-8 flex flex-col items-center gap-6">
                <h2 className="font-title text-[2rem] text-primary">{title}</h2>
                <p className="text-[1.5rem]">{text}</p>

                <Link to={`/shop?category=${title.toLowerCase()}`} className="w-full">
                    <ButtonGradient text="Ver productos" />
                </Link>

            </div>
        </div>
    )
}
