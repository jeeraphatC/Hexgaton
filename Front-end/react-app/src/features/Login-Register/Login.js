import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import blogo from "../pic/big_logo.png";
import mlogo from "../pic/mini_logo.png";
import mail from "../pic/mail.png";
import padlock from "../pic/padlock.png";
import SockJS from 'sockjs-client';
import { useCookies } from 'react-cookie';

function Login({ className }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [nameAccount, setNameAccount] = useState("Guest");
  
    /**cookies */
    const [cookies, setCookie, removeCookie] = useCookies();
  async function login(event) {


    event.preventDefault();
    try {
      const loginResponse = await axios.post("https://apathetic-laborer-production.up.railway.app/api/v1/accounts/login", {
        email: email,
        password: password,
       
      });
  
      const responseData = loginResponse.data;
  
      if (responseData.message === "Email not exists") {
        alert("Email does not exist");
      } else if (responseData.message === "Login Success") {
        const accountsResponse = await axios.get("https://apathetic-laborer-production.up.railway.app/api/v1/accounts/list");
        const accounts = accountsResponse.data;
  
        const accountWithMatchingEmail = accounts.find((account) => account.email === email);
  
        if (accountWithMatchingEmail) {
          setNameAccount(accountWithMatchingEmail.accountname);
          setCookie('username', accountWithMatchingEmail.accountname ); 
          setCookie('email',accountWithMatchingEmail.email);
          setCookie('id',accountWithMatchingEmail.accountid);
          /*connect chat*/
          // let Sock = new SockJS('http://localhost:8080/ws');
          // setCookie('sock',Sock);
          setCookie("connectChat",true)
          navigate('/', { state: { email } });
        } else {
          alert("Account not found for the provided email");
        }
      } else {
        alert("Incorrect Email and Password do not match");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again later.");
    }

  }
  return (
    <div className={className}>
      <div class="svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 156 150"
          fill="none"
          class="svg2"
        >
          <ellipse cx="78.0146" cy="75" rx="77.5444" ry="75" fill="#0196FC" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 132 127"
          fill="none"
          class="svg3"
        >
          <ellipse
            cx="65.6543"
            cy="63.5"
            rx="65.6543"
            ry="63.5"
            fill="#0196FC"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="156"
          height="150"
          viewBox="0 0 156 150"
          fill="none"
          class="svg4"
        >
          <ellipse cx="78.186" cy="75" rx="77.5444" ry="75" fill="#0196FC" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="104"
          viewBox="0 0 90 104"
          fill="none"
          class="svg5"
        >
          <ellipse cx="54.2358" cy="52" rx="53.7641" ry="52" fill="#0196FC" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="290.533px"
          height="400"
          viewBox="0 0 156 150"
          fill="none"
          class="svg6"
        >
          <ellipse cx="78.186" cy="75" rx="77.5444" ry="75" fill="#0196FC" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="132"
          height="127"
          viewBox="0 0 132 127"
          fill="none"
          class="svg7"
        >
          <ellipse
            cx="65.6543"
            cy="63.5"
            rx="65.6543"
            ry="63.5"
            fill="#0196FC"
          />
        </svg>
      </div>
      <div className="app-container">
      <a href="/">
        <img src={mlogo} alt="" className="homelogo" />
      </a>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">

            <div class="card" className="card">
              <div className="biglogo-container">
                <img src={blogo} alt="โลโก้" className="big-logo" />
              </div>
              <a href="/register"  className="regtext2">Register</a>
          <a href="/login" className="logintext2"style={{}}>Login</a>
              
              <div className="form-container">
                <form>
                  <div class="form-group">
                    {/* <label className="form-text">email</label> */}
                    <img src={mail} alt="" className="mail-logo" />
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      required
                    />
                    
                  </div>
                  <div class="form-group">
                    {/* <label className="form-text">password</label> */}
                    <img src={padlock} alt="" className="mail-logo" />
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      required
                    />
                  </div>
                  <div class="btnrge">
                  <Link to="/forget">
                    <h1 className='forgetpass'>Forget password</h1>
                  </Link>
                    <h1 className='forgetpass3'>|</h1>
                    <Link to="/register">
                    <h1 className='forgetpass2'>Register</h1>
                    </Link>
                <buttonrge
                  type="submit"
                  class="btn btn-primary mt-4 btn-large"
                  onClick={login}
                >
                  Login
                </buttonrge>
                
              </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


Login.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Login)`

@media (max-width: 600px) {

  margin-Top: 300px;
  width:80%;
  form button {
    font-size: 1rem;
    line-height: 1.5;
    padding: 0.5rem 0.7rem 0.7rem 0.7rem;
    margin-bottom: 20px;
    cursor: pointer;
    color: #ffffff;
    background-color: #28a745;
    border-radius: 0.25rem;
    border: none;
    margin-left:150px;
    width: 250px;
  }

  form button:hover{
    background-color: blue;
  }
  
}

  @media (min-width: 601px) {
    margin: 0 auto;
 
    justify-content: center;
    align-items: center;
  
   .container{
    display: flex;
      justify-content: center;
      padding:20px;
   }
  
  
   form button {
      font-size: 1rem;
      line-height: 1.5;
      padding: 0.5rem 0.7rem 0.7rem 0.7rem;
      margin-bottom: 20px;
      cursor: pointer;
     
      color: #ffffff;
      background-color: #28a745;
      border-radius: 0.25rem;
      border: none;
      margin-left:200px;
      width: 250px;
      display: flex;
    justify-content: center;
    margin-bottom: 40px;
    }
  
    form button:hover{
      background-color: blue;
    }
  
    .form-group{
      width: 90%;
      margin-left:40px;
      margin-top:30px;
    }
    .svg-container {
      display: flex;
      flex-wrap: wrap;
    }
    
    .svg-container svg {
      width: 10%;
      height: 10%;
    }
    svg{
      position:absolute;
      
    }
    .svg2{
      height: auto;
      margin-top: 10%;
    }
    .svg3{
      margin-top: 35%;
      margin-left: 3%;
    }
    .svg4{
      margin-top: 20%;
      margin-left: 65%;
    }
    .svg5{
  
      margin-top: 30%;
      margin-left: 80%;
    }
    .svg6{
      margin-top: 30%;
      margin-left: 20%;
    }
    .svg7{
      margin-top: -3%;
      margin-left: 70%;
    }
  }
 
`;
