import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import blogo from "../pic/big_logo.png";
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
  max-width: 500px;
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
`;
