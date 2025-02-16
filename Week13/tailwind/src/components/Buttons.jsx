export const Button = ({
    disabled,
    children,
    onClick
})=>{
    return <span onClick={onClick} className={` rounded-md text-md font-bold px-24 py-6  text-white cursor-pointer ${disabled? "bg-blue-200" : "bg-green-400"}`}>
         {children}
    </span>
}