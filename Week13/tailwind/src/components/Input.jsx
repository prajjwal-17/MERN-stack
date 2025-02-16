export const Input = ({
    onClick,
    type,
    placeholder
}) => {
    return (
        <span 
            onClick={onClick} 
            className="w-[350px] rounded-md text-sm font-semibold px-2 py-2 text-white cursor-pointer bg-blue-500 flex"
        >
            <input 
                type={type} 
                placeholder={placeholder} 
                className="w-full bg-blue-500 outline-none text-black p-2"
            />
        </span>
    );
}
