function App(){
    // conditional logic when screen is small it will be blue
    // when screen is small it will be red and when big it will be blue
    // bg-red-500 - unprefixed utility   unprefixed is default  implies mobile-> tablet > desktop 
    //  sm:bg-blue-500 - prefixed  -utility    prefixed utility take effect on specific break point and above      
    return <div className="grid grid-cols-12 ">
         <div className="col-span-12  sm:col-span-5 bg-red-300">Hey1</div>
         <div className="col-span-12  sm:col-span-5 bg-green-300">Hey2</div>
         <div className="col-span-12  sm:col-span-2 bg-blue-300">Hey3</div>
  
    </div>
   }
  
  export default App;
  
  
  /*
  return <div className="grid grid-cols-1 sm:flex justify-normal ">
         <div className="bg-red-500 col-span-1">Hey1</div>
         <div className="bg-green-500 col-span-1">Hey2</div>
         <div className="bg-blue-500 col-span-1">Hey3</div>
  
    </div>
   }  the error i made
  
  */ 