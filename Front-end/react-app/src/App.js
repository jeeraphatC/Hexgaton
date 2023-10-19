import React from 'react';
import Navbar from './features/Navbar';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';
import Container from './features/Container';
import { Route, Routes , useLocation } from 'react-router-dom'; // Removed 'Switch'
import Login from './features/Login';
import Develop from './features/features-navbar/develop';
import Register from './features/Regis';
import FindFreelance from './features/Findfreelances';
function App() {
  const location = useLocation();

  // Determine whether to show the Navbar based on the current route
  const showNavbar = location.pathname !== '/';
  const showNavbar1 = location.pathname !== '/register';
  return (
    <>
      <GlobalStyle />
      { showNavbar1 && showNavbar && <Navbar />}
        <Container>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/develop" element={<Develop />} />
            <Route path="/findfreelance" element={<FindFreelance />} />
          </Routes>
        </Container>
      
    </>
  );
}

export default App;
