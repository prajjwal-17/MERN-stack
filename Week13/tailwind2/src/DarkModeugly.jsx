function App(){
    const [darkMode,setDarkMode]=useState(true);
    return(
      <div className={`h-screen ${darkMode ?"bg-gray-700":"bg-white"}`}>
        <button onClick={()=>setDarkMode(!darkMode)}>Toggle Theme</button>
      </div>
    )
 }
 export default App;

//  function App() {
//     return (
//       <div className="h-screen bg-white dark:bg-gray-700 text-black dark:text-white">
//         <button
//           onClick={() => {
//             document.querySelector("html").classList.toggle("dark");
//           }}
//         >
//           Click Me
//         </button>
//       </div>
//     );
//   }