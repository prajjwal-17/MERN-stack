// export function SidebarClass1(){
//     return <div className="flex">
//         <div className="bg-red-500 w-[20%] h-screen">
//             Sidebar
//         </div>
//         <div className="bg-green-500 w-[80%] h-screen ">
//             Content
//         </div>
//     </div>
// } basic sidebar 
export function SidebarClass1(){
    return <div className="flex">
        <div className="transition-all ease-in-out duration-500 h-screen w-0 md:w-96 ">
            {/* -translate for opposte direction */}
            Sidebar
        </div>
        <div className="bg-green-300 w-full h-screen ">
            Content
        </div>
    </div>
}