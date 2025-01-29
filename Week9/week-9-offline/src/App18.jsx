import React, { Component } from 'react';

const App=()=>{
  return(  
     <div>
         <ErrorBoundary>
             <Card1></Card1>
         </ErrorBoundary>
             <Card2></Card2>
     </div>
     );
  
};


function Card1() {
     
     throw new Error("Error While Rendering")  

     return <div style={{background:"aqua",padding:20,margin:20}}>
         Hey There
     </div>
}
function Card2() {
     return <div style={{background:"aqua",padding:20,margin:20}}>
         Happy Diwali
     </div>
}
class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      return { hasError: true };
  }

  componentDidCatch(error, info) {
      console.error("Error caught:", error, info);
  }

  render() {
      if (this.state.hasError) {
        return <div style={{background:"aqua",padding:20,margin:20}}>
        Something Went Wrong
    </div>
      }

      return this.props.children; 
  }
}




export default App;