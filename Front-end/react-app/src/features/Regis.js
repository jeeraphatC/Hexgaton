import { useState } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
        return accountname.length > 0 && email.length > 0 && numberCard.length > 0 && password.length > 0;
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
            navigate("/");
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
            <div class="container mt-4" >
                <div class="card">
                    <h1>Student Registation</h1>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    <form>
                        <div class="form-group">
                            <label>Employee name</label>
                            <input type="text" class="form-control" id="employeename" placeholder="Enter Name"
                                value={accountname}
                                onChange={(event) => {
                                    setAccountname(event.target.value);
                                }}
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter Email"

                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                required
                            />

                        </div>

                        <div class="form-group">
                            <label>numberCard</label>
                            <input type="text" class="form-control" id="idcard" placeholder="Enter IDCard"

                                value={numberCard}
                                onChange={(event) => {
                                    setnumberCard(event.target.value);
                                }}
                                required
                            />

                        </div>

                        <div class="form-group">
                            <label>password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter password"

                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                required
                            />
                        </div>
                        <button type="submit" class="btn btn-primary mt-4" onClick={save}  >Save</button>
                        <Link to="/">
                            <button type="submit" >Login</button>
                        </Link>

                    </form>
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