function App(){
    const [darkMode,setDarkMode]=useState(true);
    return(
      <div className={`h-screen ${darkMode ?"bg-gray-700":"bg-white"}`}>
        <button onClick={()=>setDarkMode(!darkMode)}>Toggle Theme</button>
      </div>
    )
 }
 export default App;