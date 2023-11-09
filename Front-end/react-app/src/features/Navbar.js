import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import mlogo from "./pic/mini_logo.png";
import ologo from "./pic/option.png";
import chat from "./pic/chat.png";
import login from "./pic/login.png";
import getCookies from './hook/getCookies';
import removeAllCookies from './hook/removeAllCookies';
import {signOut} from "firebase/auth"
import { auth } from "./firebase";

function Navbar({ className }) {
  const [developmentHovered, setDevelopmentHovered] = useState(false);
  const [graphicHovered, setGraphicHovered] = useState(false);
  const [musicHovered, setMusicHovered] = useState(false);
  const [nameAccount, setNameAccount] = useState("Guest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navagate = useNavigate();
  const username = getCookies('username');
  const isUserLoggedIn = username !== undefined;


  const clickhandle = (e) => {
    navagate("/devlop")
  }
 

  const handleRemoveAllCookies = () => {
    signOut(auth)
    removeAllCookies();
  }

  return (
    <header className={className}>
      <Link to="/">
        {" "}
        <img src={mlogo} alt="โลโก้" className="min-logo" />
      </Link>

      <Link to="/optionfree">
        <h4>Entrepreneur</h4>
      </Link>
      <Link to="/optionenter">
        <h4>Freelance</h4>
      </Link>
      <Link to="/options">
        <img src={ologo} alt="" className="ologo" />
      </Link>
      {/* <Link to="/ChatRoom" className="notice">
        <img src={chat} alt="" className="ologo" />

      </Link> */}


      {isUserLoggedIn ? (
        <Link to="/profile" className="navname">
          {getCookies("username")}
        </Link>
      )  // or you can use any other component/message when the user is logged in
        : (
          <Link to="/register" className="text1">
            <img src={login} alt="" className="login-logo" />
          </Link>
        )}

      <Link to="/login" onClick={handleRemoveAllCookies}>LOG OUT</Link>


    </header>
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Navbar)`
.navname{
  font-size:25px;
  font-weight: bold;
  color:#0071BE;
  margin:20px;
}
.login-logo{
  max-width:80px;
  margin:20px;
}
h4{
  font-size:20px;
  font-weight: bold;
  margin-top: 10px;
  color:#0196FC;
}
.notice{

}

h4:hover{
  color:#0071BE;
}
  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
  height: 48px;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #dee2e6;
  box-shadow: 0 0.2px 0.25px rgba(0, 0, 0, 0.25);
  top: 0;
  /* padding: 2rem; */
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;

  .min-logo {
    max-width: 100px;
    top: 0;
    margin-top: -5px;
  }

  .text {
    color: black;
    padding: 10px;
    transition: background-color 0.3s, color 0.3s;
    transition: all 0.2s;
  }

  .music {
    margin-right: 300px;
    text-decoration: none;
    padding: 10px;
    transition: background-color 0.3s, color 0.3s;
    transition: all 0.2s;
  }
  .picture {
    margin-right: -100px;
    text-decoration: none;
    padding: 10px;
    transition: background-color 0.3s, color 0.3s;
    transition: all 0.2s;
  }
  .picture1 {
    margin-right: -50px;
    text-decoration: none;
    padding: 10px;
    transition: background-color 0.3s, color 0.3s;
    transition: all 0.2s;
  }
  .text:hover,
  .music:hover,
  .picture:hover,
  .picture1:hover {
    background-color: #0196fc;
    color: white;
  }

  .text.hovered {
    position: relative;
  }

  .submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 1px solid #dee2e6;
  }

  .text.hovered .submenu {
    width: 180px;
    display: block;
  }

  .submenu a {
    display: block;
    padding: 5px 10px;
    color: black;
    text-decoration: none;
  }

  .submenu a:hover {
    background-color: #0196fc;
    color: #fff;
  }

  .ologo {
    max-width: 30px;
  }

  .develop {
    cursor: pointer;
  }
`;