import { useNavigate, Link } from 'react-router-dom';

interface BackButtonProps {
    colorMobile:string;
    fixed?:boolean
}


export const BackButton = ({colorMobile, fixed}: BackButtonProps) => {

    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <Link to="/shop" onClick={handleBackButton}>
            <i className={`fa-solid fa-angle-left text-[3.5rem] ${colorMobile} lg:text-orange-500 cursor-pointer ${fixed && 'fixed left-12 top-8'}`}></i>
        </Link>
    )
}
