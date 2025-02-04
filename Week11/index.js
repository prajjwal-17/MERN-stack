let currentClock;
function searchBackend(){
    console.log("request sent to backend")
    //fetch()
}

function deBouncedSearchBackend(){
  clearTimeout(currentClock) 
  currentClock= setTimeout(searchBackend,30) //start a clock for 30ms

}

deBouncedSearchBackend()
deBouncedSearchBackend()
deBouncedSearchBackend()
deBouncedSearchBackend()
deBouncedSearchBackend()
deBouncedSearchBackend()
deBouncedSearchBackend()