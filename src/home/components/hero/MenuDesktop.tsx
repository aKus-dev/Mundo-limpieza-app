import Star from '../../assets/star.svg';

export const MenuDesktop = () => {
  return (
    <div className="hidden md:flex md:justify-between md:items-center md:px-4">
       <img src={Star} alt="Logo" />

      <div className="text-black-50 uppercase">
        <ul className="flex gap-6">
          <li className="cursor-pointer hover:text-white duration-300">Inicio</li>
          <li className="cursor-pointer hover:text-white duration-300">Productos</li>
          <li className="cursor-pointer hover:text-white duration-300">Información</li>
        </ul>
      </div>

      <div className="flex gap-4">
        <i className="fa fa-magnifying-glass text-[20px] cursor-pointer"></i>
        <i className="fa-solid fa-cart-shopping text-[20px] cursor-pointer"></i>
      </div>
    </div>
  )
}
