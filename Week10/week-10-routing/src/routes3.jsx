import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

// Refactored to use the router array
function App() {
  const router = [
    { path: "/", element: <LandingPage /> },
    { path: "/neet/online-coaching-class-11", element: <Class11Program /> },
    { path: "/neet/online-coaching-class-12", element: <Class12Program /> },
    { path: "*", element: <ErrorPage /> },
  ];

  return (
    <div>
      <BrowserRouter>
        Common Topbar
        <Routes>
          <Route path="/" element={<Layout />}>
            {router.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
        Contact Us || Footer
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ height: "70vh", backgroundColor: "grey" }}>
        <Outlet />
      </div>
      Footer
    </div>
  );
}

function LandingPage() {
  return <div>Welcome</div>;
}

function ErrorPage() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate('/');
  }
  return (
    <div>
      404 Not Found
      <button onClick={redirectUser}>Go back to Landing Page</button>
    </div>
  );
}

function Header() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <a href="/">ALLEN(This will refetch)</a> | <Link to="/neet/online-coaching-class-11">Class11</Link> |
      <Link to="/neet/online-coaching-class-12">Class12</Link> <br />
    </div>
  );
}

function Class11Program() {
  return <div>NEET PROGRAMS for CLASS 11</div>;
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate('/');
  }

  return (
    <div>
      NEET PROGRAMS for CLASS 12 <br />
      <button onClick={redirectUser}>Go back to Landing Page</button>
    </div>
  );
}

export default App;
