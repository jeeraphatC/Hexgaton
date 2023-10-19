import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          navigate('/home' , { state: { email } } );
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
    <div>
      <div class="container">
        <div class="row">
          <h2>Login</h2>
          <hr />
        </div>
        <div class="row">
          <div class="col-sm-6">

            <form>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter Name"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}

                />
              </div>
              <div class="form-group">
                <label>password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter Fee"

                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}

                />
              </div>
              <button type="submit"  onClick={login} >Login</button>
              <Link to="/register">
              <button type="submit" >Register</button>
              </Link>
            </form>
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
  padding: 4rem 0;
  #re{
    background-color: red;
  }
`;
