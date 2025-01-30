import './App.css'
import {BrowserRouter, Routes, Route, Link, useNavigate, redirect, Outlet} from "react-router-dom";

//refecth is a bad way and doesnt follow principle for single page application
//earlier we used "<a href="/">ALLEN(THis will refetch)</a>|    <Link to={"/neet/online-coaching-class-11"}>Class11</Link>  | Class12 
// || Common Topbar" this line above browser router but links cannot be used outside browser router
function App(){
  return <div>
    
    <BrowserRouter>
     || Common Topbar
       <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}/>
          <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          
       </Routes>
    Contact Us || Footer
    </BrowserRouter>
  </div>
}

function Layout(){
  return <div style={{height:"100vh"}}>
     <Header></Header>
     Header
        <div style={{height: "70vh",backgroundColor:"grey"}}>
          <Outlet/>
        </div>
     footer
  </div>
}

function LandingPage(){
  return <div>
    Welcome
  </div>
}

function ErrorPage(){
  const navigate=useNavigate();

  function redirectUser(){
    navigate('/')
  }
  return <div>

    404 Not Found
    <button onClick={redirectUser}>Go back to Landing Page</button>
  </div>
}

function Header(){
   return <div style={{backgroundColor:"red"}}>
    <a href="/">ALLEN(THis will refetch)</a>|    <Link to={"/neet/online-coaching-class-11"}>Class11</Link>  |
    <Link to={"/neet/online-coaching-class-12"}>Class12</Link> <br />
   </div>
}

function Class11Program(){
  return <div>
    NEET PROGRAMS for CLASS 11
  </div>
}

function Class12Program(){
  const navigate=useNavigate();

  function redirectUser(){
    navigate('/')
  }

  return <div>
    NEET PROGRAMS for CLASS 12 <br />
    <button onClick={redirectUser}>Go back to Landing Page</button>
    
  </div>
}



export default App;