import React from 'react';
import Navbar from './features/Navbar';
import Home from './features/Home';
import GlobalStyle from './features/Style/GlobalStyle';
import Container from './features/Container';
import { Route, Routes, useLocation } from 'react-router-dom'; // Removed 'Switch'
import Login from './features/Login-Register/Login';
import Develop from './features/features-navbar/develop';
import Register from './features/Login-Register/Regis';
import FindFreelance from './features/Enterprises/Findfreelances';
import FindJob from './features/Enterprises/FindJob';
import ChatRoom from './features/chatRoom';
import FreelanceForm from './features/Freelance/Postfreelance';
import PostJob from './features/Enterprises/PostJob';
import EditJob from './features/Enterprises/EditJob';
import EditFreelance from './features/Freelance/EditFreelance';
import Profile from './features/Freelance/Fprofile';
import Options from './features/Options';
import Graphic from './features/features-navbar/Graphic';
import Music from './features/features-navbar/Music';
import Pro from './features/Freelance/Pro';
import Compare from './features/Compare';
import ViewFreelance from './features/ViewFreelance';
import ViewEnter from './features/ViewEnter';
function App() {
  const location = useLocation();

  // Determine whether to show the Navbar based on the current route
  const showNavbar = location.pathname !== '/';
  const showNavbar1 = location.pathname !== '/register';
  return (
    <>
      <GlobalStyle />
      {showNavbar1 && showNavbar && <Navbar />}
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
          <Route path="/ChatRoom" element={<ChatRoom />}></Route>
          <Route path="/fix" element={<Pro />}></Route>
          <Route path="/Compare" element={<Compare />}></Route>
          <Route path="/Freelance/:id" element={<ViewFreelance />} />
          <Route path="/enterprises/:id" element={<ViewEnter />} />
        </Routes>
      </Container>

    </>
  );
}

export default App;
