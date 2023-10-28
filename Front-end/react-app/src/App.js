import React from 'react';
import Navbar from './features/Navbar';
import Home from './features/Home';
import GlobalStyle from './features/Style/GlobalStyle';
import Container from './features/Container';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'; // Removed 'Switch'
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
import getCookies from './features/hook/getCookies';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login';
  const showNavbar1 = location.pathname !== '/register';
  const username = getCookies('username'); 
  return (
    <>
      <GlobalStyle />
      {showNavbar1 && showNavbar && <Navbar />}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {username  ? (
            <Route path="/develop" element={<Develop />} />
          ) : (<Navigate to="/login" replace />
          )}
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
