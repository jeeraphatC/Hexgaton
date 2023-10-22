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
import FindJob from './features/FindJob';
import ChatRoom from './features/chatRoom';
import FreelanceForm from './features/Postfreelance';
import PostJob from './features/PostJob';
import EditJob from './features/EditJob';
import EditFreelance from './features/EditFreelance';
import Profile from './features/Fprofile';
import Options from './features/Options';
import Graphic from './features/features-navbar/Graphic';
import Music from './features/features-navbar/Music';
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
            <Route path="/graphic" element={<Graphic />} />
            <Route path="/music" element={<Music />} />
            <Route path="/findfreelance" element={<FindFreelance />} />
            <Route path="/findjob" element={<FindJob />} />
            <Route path="/FreelanceForm" element={<FreelanceForm />} />
            <Route path="/Postjob" element={<PostJob />} />
            <Route path="/edit/:id" element={<EditJob />} />
            <Route path="/editfreelance/:id" element={<EditFreelance />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Options" element={<Options />} />
            <Route path="/ChatRoom" element={<ChatRoom /> }></Route>
            
          </Routes>
        </Container>  
      
    </>
  );
}

export default App;
