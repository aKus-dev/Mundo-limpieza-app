import { MenuMobile, MenuDesktop } from '../';

export const Header = () => {
    return (
        <div className="px-6 pt-8 max-w-[1300px] mx-auto md:px-0">
           <MenuMobile />
           <MenuDesktop />
        </div>
    )
}
