import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bg2 from './pic/bg2.jpg';
import getCookies from './hook/getCookies';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function EditProfile({ className }) {
  const [id, setId] = useState();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [formData, setFormData] = useState({
    accountid: '',
    accountname: '',
    descrip: '',
    email: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  useEffect(() => {
    const setIdFromCookies = getCookies('id');
    setFormData({
      ...formData,
      accountid: setIdFromCookies,
    });
    setId(setIdFromCookies);

    // Make sure to include id in the dependency array to trigger the effect when id changes.
    axios.get(`http://localhost:8085/api/v1/accounts/list/${setIdFromCookies}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching Account data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const account_id = id; // Retrieve account_id from the formData

    try {
      if (account_id) {
        axios.put(`http://localhost:8085/api/v1/accounts/list/${account_id}`, formData)
          .then((accountResponse) => {
            console.log('Account updated successfully!', accountResponse.data);
            console.log(formData);
            setCookie('username', formData.accountname);
            setCookie('email', formData.email);
            
            setSuccessMessage('Account updated successfully'); // Set the success message
          })
          .catch((error) => {
            console.error('Error updating', error.message);
          });
      } else {
        console.error('Account ID is undefined');
      }
    } catch (error) {
      console.error('Error updating account:', error);
    }
  };

  return (
    <Container>
      <div className={className}>
        <img src={bg2} alt="" className="bg1" />
        <div className="container-edit">
        {successMessage && <div className="success-message">{successMessage}</div>}
          <div className="edit-Box">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username :</label>
                <input
                  type="text"
                  name="accountname"
                  value={formData.accountname}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Your Description :</label>
                <input
                  type="text"
                  name="descrip"
                  value={formData.descrip}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Email :</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <Button variant="success" type="submit" style={{ width: 150 }}>
                  Confirm
                </Button>
              </div>
            </form>

          
          </div>
        </div>
      </div>
    </Container>
  );
}

export default styled(EditProfile)`
  .bg1 {
    height: 350px;
  }

  .edit-Box {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .success-message {
    color: green;
    margin-top: 10px;
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

`;