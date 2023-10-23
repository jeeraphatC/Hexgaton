import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import blogo from "../pic/big_logo.png";
import mlogo from "../pic/mini_logo.png";
function Login({ className }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/accounts/login", {
        email: email,
        password: password,
      }).then((res) => {
        console.log(res.data);
        
        if (res.data.message === "Email not exits") {
          alert("Email not exits");
        }
        else if (res.data.message === "Login Success") {
          navigate('/home', { state: { email } });
          
        }
        else {
          alert("Incorrect Email and Password not match");
        }
      }, fail => {
        console.error(fail); // Error!
      });
    }

    catch (err) {
      alert(err);
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
      <a href="/home">
        <img src={mlogo} alt="" className="homelogo" />
      </a>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">

            <div class="card">
              <div className="biglogo-container">
                <img src={blogo} alt="โลโก้" className="big-logo" />
              </div>
              <Link to="/register">
                <a className="alogin">Signup</a>
              </Link>
              <div className="asignup">Login</div>
              <div className="form-container">
                <form>
                  <div class="form-group">
                    {/* <label className="form-text">email</label> */}
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
                  <button type="submit" onClick={login} >Login</button>
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
    margin-left:150px;
    width: 250px;
  }

  form button:hover{
    background-color: blue;
  }

  .form-group{
    width: 500px;
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
`;
