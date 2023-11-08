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
import FindJob from './features/Freelance/FindJob';
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
import { useCookies } from 'react-cookie';
import EditProfile from './features/EditProfile';
import Myworkenterpise from './features/Enterprises/Myworkenterpise';
import Mywork from './features/Freelance/Mywork';
import OptionsFreelance from './features/Options-freelance';
import OptionsEnter from './features/Options-enter';
import BasicExample from './features/Example';
import Status from './features/Status';
import HomeChat from './features/chatRoom';
import EditpictureProfile from './features/EditpictureProfile';
import History from './features/History';
import Forget from './features/Login-Register/Forget';
function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login';
  const showNavbar1 = location.pathname !== '/register';
  const forget = location.pathname !== '/forget';
  const username = getCookies('username');

  const isUserLoggedIn = username !== undefined;
  const [cookies, setCookie, removeCookie] = useCookies();
  return (
    <>

      <GlobalStyle />
      {showNavbar1 && showNavbar && forget&&<BasicExample />}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/develop"
            element={isUserLoggedIn ? <Develop /> : <Navigate to="/login" />}
          />
          <Route path="/graphic" element={isUserLoggedIn ? <Graphic /> : <Navigate to="/login" />} />
          <Route path="/music" element={isUserLoggedIn ? <Music /> : <Navigate to="/login" />} />
          <Route path="/findfreelance" element={isUserLoggedIn ? <FindFreelance /> : <Navigate to="/login" />} />
          <Route path="/findjob" element={isUserLoggedIn ? <FindJob /> : <Navigate to="/login" />} />
          <Route path="/FreelanceForm" element={isUserLoggedIn ? <FreelanceForm /> : <Navigate to="/login" />} />
          <Route path="/Postjob" element={isUserLoggedIn ? <PostJob /> : <Navigate to="/login" />} />
          <Route path="/edit/:id" element={isUserLoggedIn ? <EditJob /> : <Navigate to="/login" />} />
          <Route path="/editfreelance/:id" element={isUserLoggedIn ? <EditFreelance /> : <Navigate to="/login" />} />
          <Route path="/Profile/:ids" element={isUserLoggedIn ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/Profile" element={isUserLoggedIn ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/Options" element={isUserLoggedIn ? <Options /> : <Navigate to="/login" />} />
          <Route path="/ChatRoom" element={isUserLoggedIn ? <HomeChat /> : <Navigate to="/login" />}></Route>
          <Route path="/fix" element={isUserLoggedIn ? <Pro /> : <Navigate to="/login" />}></Route>
          <Route path="/Compare" element={isUserLoggedIn ? <Compare /> : <Navigate to="/login" />}></Route>
          <Route path="/Freelance/:id" element={isUserLoggedIn ? <ViewFreelance /> : <Navigate to="/login" />} />
          <Route path="/enterprises/:id" element={isUserLoggedIn ? <ViewEnter /> : <Navigate to="/login" />} />
          <Route path="/editprofile/:id" element={isUserLoggedIn ? <EditProfile /> : <Navigate to="/editprofile" />} />
          <Route path="/myworkenterpise" element={isUserLoggedIn ? <Myworkenterpise /> : <Navigate to="/login" />} />
          <Route path="/optionfree" element={isUserLoggedIn ? <OptionsFreelance /> : <Navigate to="/login" />} />
          <Route path="/optionenter" element={isUserLoggedIn ? <OptionsEnter /> : <Navigate to="/login" />} />
          <Route path="/mywork" element={isUserLoggedIn ? <Mywork /> : <Navigate to="/login" />} />
          <Route path="/status" element={isUserLoggedIn ? <Status /> : <Navigate to="/login" />} />
          <Route path="/profilefree/:id" element={isUserLoggedIn ? <EditpictureProfile /> : <Navigate to="/login" />} />
          <Route path="/history" element={isUserLoggedIn ? < History/> : <Navigate to="/login" />} />
          <Route path="/forget" element={isUserLoggedIn ? < Forget/> : <Navigate to="/login" />} />
        </Routes>
      </Container>

    </>
  );
}

export default App;
