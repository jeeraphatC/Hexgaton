import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import mlogo from "../pic/mini_logo.png";
import blogo from "../pic/big_logo.png";

function Register({ className }) {
  const [accountname, setAccountname] = useState("");
  const [email, setEmail] = useState("");
  const [numberCard, setnumberCard] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const namePattern = /^[A-Za-z\s]+$/; // Allows only letters and spaces
  const emailPattern = /.*@gmail\.com$/;
  const passwordPattern = /^.{6,}$/;
  const numberCardPattern = /^\d{13}$/;
  const validateForm = () => {
    return (
      accountname.length > 0 &&
      email.length > 0 &&
      numberCard.length > 0 &&
      password.length > 0
    );
  };

  const validateForm2 = () => {
    const validName = namePattern.test(accountname);
    const validEmail = emailPattern.test(email);
    const validPassword = passwordPattern.test(password);
    const validnumbercard = numberCardPattern.test(numberCard);

    return validName && validEmail && validnumbercard && validPassword;
  };

  async function save(event) {
    event.preventDefault();

    const isFormValid = validateForm(); // Define isFormValid here

    if (!isFormValid) {
      setErrorMessage("Please fill out all fields.");
      return;
    }
    const isFormValid2 = validateForm2(); // Define isFormValid2 here

    if (!isFormValid2) {
      setErrorMessage("Please fill out all fields correctly.");
      return;
    }

    try {
      await axios.post("http://localhost:8085/api/v1/accounts/save", {
        accountname: accountname,
        email: email,
        numberCard: numberCard,
        password: password,
      });

      alert("Account Registration Successful");
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setErrorMessage(err.response.data);
      } else {
        console.error(err);
      }
    }
  }

  return (
    <div>
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
      <a href="/login">
        <img src={mlogo} alt="" className="homelogo" />
      </a>
      </div>
      <div class="containermt-4">
        <div class="card">
          <div className="biglogo-container">
            <img src={blogo} alt="โลโก้" className="big-logo" />
          </div>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <Link to="/login">
            <a className="alogin">Login</a>
          </Link>
          <div className="asignup">Signup</div>
          <div className="form-container">
            <form>
              <div class="form-group">
                {/* <label className="form-text">Employee name</label> */}
                <input
                  type="text"
                  class="form-control"
                  id="employeename"
                  placeholder="Name"
                  value={accountname}
                  onChange={(event) => {
                    setAccountname(event.target.value);
                  }}
                  required
                />
              </div>
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
                {/* <label className="form-text">numberCard</label> */}
                <input
                  type="text"
                  class="form-control"
                  id="idcard"
                  placeholder="IDCard"
                  value={numberCard}
                  onChange={(event) => {
                    setnumberCard(event.target.value);
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
              <div class="btnrge">
                <buttonrge
                  type="submit"
                  class="btn btn-primary mt-4 btn-large"
                  onClick={save}
                >
                  Register
                </buttonrge>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Register)`
  max-width: 500px;
  margin: 0 auto;
  padding: 4rem 0;
  
`;
