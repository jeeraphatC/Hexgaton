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
  const handleDevelopmentMouseEnter = () => {
    setDevelopmentHovered(true);
  };

  const handleDevelopmentMouseLeave = () => {
    setDevelopmentHovered(false);
  };
  const handleGraphicMouseEnter = () => {
    setGraphicHovered(true);
  };

  const handleGraphicMouseLeave = () => {
    setGraphicHovered(false);
  };
  const handleMusicMouseEnter = () => {
    setMusicHovered(true);
  };

  const handleMusicMouseLeave = () => {
    setMusicHovered(false);
  };

  const location = useLocation();



  return (
    <header className={className}>
      <Link to="/">
        {" "}
        <img src={mlogo} alt="โลโก้" className="min-logo" />
      </Link>

      <div
        onMouseEnter={handleDevelopmentMouseEnter}
        onMouseLeave={handleDevelopmentMouseLeave}
        className={`text ${developmentHovered ? "hovered" : ""}`}
      >
        <Link to="/develop"
          state={{ type: "develop" }}
        // className="develop"
        >
          Development
        </Link>
        {developmentHovered && (
          <div className="submenu">
            <Link to="/web">Web</Link>
            <Link to="/mobile">Mobile</Link>
            <Link to="/desktop">Desktop</Link>
          </div>
        )}
      </div>

      <div
        onMouseEnter={handleGraphicMouseEnter}
        onMouseLeave={handleGraphicMouseLeave}
        className={`text ${graphicHovered ? "hovered" : ""}`}
      >
        <Link to="/develop"
          state={{ type: "graphic" }}>Graphic</Link>
        {graphicHovered && (
          <div className="submenu">
            <Link to="/logo">Logo Design</Link>
            <Link to="/sticker">Sticker Design</Link>
            <Link to="/character">Character Design</Link>
            <Link to="/draw-cartoon">Draw cartoons</Link>
            <Link to="/3d-models">3D Models</Link>
            <Link to="/banner">Banner advertising design</Link>
          </div>
        )}
      </div>

      <div
        onMouseEnter={handleMusicMouseEnter}
        onMouseLeave={handleMusicMouseLeave}
        className={`text ${musicHovered ? "hovered" : ""}`}
      >
        <Link to="/develop"
          state={{ type: "music" }}>Music</Link>
        {musicHovered && (
          <div className="submenu">
            <Link to="/beat">Beat</Link>
          </div>
        )}
      </div>
      <Link to="/findjob">
        <h4>Findjob</h4>
      </Link>
      <Link to="/findfreelance">
        <h4>Entrepreneur</h4>
      </Link>
      <Link to="/Compare">
        <h4>Compare</h4>
      </Link>
      <Link to="/options">
        <img src={ologo} alt="" className="ologo" />
      </Link>
      <Link to="/chatroom">
        <img src={chat} alt="" className="ologo" />
      </Link>


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
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
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
