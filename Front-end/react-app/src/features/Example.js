import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from "react";
import mlogo from "./pic/mini_logo.png";
import ologo from "./pic/option.png";
import chat from "./pic/chat.png";
import login from "./pic/login.png";
import getCookies from './hook/getCookies';
import removeAllCookies from './hook/removeAllCookies';
import { Link } from "react-router-dom";

function BasicExample() {


  const username = getCookies('username');
  const isUserLoggedIn = username !== undefined;
  const handleRemoveAllCookies = () => {
    removeAllCookies();
  }

  return (

    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid >
        <Navbar.Brand ><Link to="/" ><img src={mlogo} alt="โลโก้" style={{ maxWidth: 100 }} /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">

          <Nav className="me-auto" >
            <Nav.Link style={{ marginRight: 50 , marginTop:10 }}><Link to="/optionfree" ><h4>Freelance</h4></Link></Nav.Link>
            <Nav.Link style={{ marginRight: 50 , marginTop:10 }}><Link to="/optionenter"><h4>Entrepreneur</h4></Link></Nav.Link>


          </Nav>
          <Nav.Link style={{ marginRight: 50 }}>
            <Link to="/chatroom">
              <img src={chat} alt="" style={{ maxWidth: 30 }} />
            </Link>
          </Nav.Link>
          <Nav.Link style={{ marginRight: 50 }}>
            <Link to="/options">
              <img src={ologo} alt="" style={{ maxWidth: 30 }} />
            </Link>
          </Nav.Link>

          <NavDropdown style={{ marginRight: 30 }} title={isUserLoggedIn ? (
            <Link to="/profile"  >
              Sign in :  {getCookies("username")}
            </Link>
          )  
            : (
              <Link to="/register" className="text1">
                <img src={login} alt="" className="login-logo" />
              </Link>
            )} id="basic-nav-dropdown">
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              <Link to="/login" onClick={handleRemoveAllCookies}>LOG OUT</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>



      </Container>
    </Navbar>








  );
}

export default BasicExample


