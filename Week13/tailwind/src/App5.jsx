function App(){
    // conditional logic when screen is small it will be blue
    // when screen is small it will be red and when big it will be blue
    // bg-red-500 - unprefixed utility   unprefixed is default  implies mobile-> tablet > desktop 
    //  sm:bg-blue-500 - prefixed  -utility    prefixed utility take effect on specific break point and above      
    return( 
       <>
        <div className="sm:bg-blue-500 bg-red-500">
           Helllo mate
        </div>
        <br />
        <div className="md:bg-green-500 sm:bg-blue-500 bg-red-500">
           Helllo mate 2
        </div>
        
    </>)
   }
  
  export default App;