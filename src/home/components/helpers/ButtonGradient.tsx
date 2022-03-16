
interface ButtonGradientProps {
    text:string;
}

export const ButtonGradient = ({text}: ButtonGradientProps) => {
  return (
    <button className="bg-gradient-to-r from-[#FA9630] to-[#FF6042] py-2 px-8 rounded-[10px] text-white font-text font-bold w-[60%] max-w-[250px] text-[20px] md:duration-300 cursor-pointer md:hover:scale-105">
        {text}
    </button>
  )
}
