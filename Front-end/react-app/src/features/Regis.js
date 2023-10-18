import { useState } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from "axios";
import { Link } from "react-router-dom";

function Register({ className }) {

    const [accountname, setAccountname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isFormValid = accountname && email && password;

    async function save(event) {
        event.preventDefault();
        try {

            await axios.post("http://localhost:8085/api/v1/accounts/save", {
                accountname: accountname,
                email: email,
                password: password,
            });
            alert("Employee Registation Successfully");

        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <div class="container mt-4" >
                <div class="card">
                    <h1>Student Registation</h1>

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
                            <label>password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter password"

                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                required
                            />
                        </div>
                        <button type="submit" class="btn btn-primary mt-4" onClick={save} disabled={!isFormValid} >Save</button>
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