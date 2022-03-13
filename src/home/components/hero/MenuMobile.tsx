import Star from '../../assets/star.svg';
import { Hamburguer } from '../'

export const MenuMobile = () => {
  return (
    <div className="md:hidden flex justify-between items-center">
        <img src={Star} alt="Logo" />
        <Hamburguer />
    </div>
  )
}
