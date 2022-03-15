

export const Input = () => {
    return (
        <div className="flex-grow border-[2px] border-orange-500 border-solid rounded-[50px] flex items-center gap-4 px-8 py-2">
            <i className="fa-solid fa-magnifying-glass text-[1.5rem] text-orange-600"></i>
            <input
                className="flex-grow text-[1.65rem] outline-none caret-orange-500 w-ful"
                type="text"
                placeholder="Busca un producto..."
            />
        </div>
    )
}
