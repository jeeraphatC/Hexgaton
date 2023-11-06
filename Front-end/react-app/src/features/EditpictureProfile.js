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
    const [image, setImage] = useState();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [formData, setFormData] = useState({
        accountid: '',
        accountname: '',
        descrip: '',
        email: '',
    });

    const [successMessage, setSuccessMessage] = useState(''); // State for success message
    const [selectedImage, setSelectedImage] = useState(null);
    const image_id = getCookies('image_id');
    useEffect(() => {
        const setIdFromCookies = getCookies('id');
        setFormData({
            ...formData,
            accountid: setIdFromCookies,
        });
        setId(setIdFromCookies);

        axios.get(`https://smart-egg-production.up.railway.app/api/v1/accounts/list/${setIdFromCookies}`)
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
        const account_id = id;


        try {
            if (account_id) {
                if (selectedImage) {

                    if (image_id) {
                        const imageFormData = new FormData();
                        imageFormData.append('image', selectedImage);
                        imageFormData.append('imagelocation', account_id);
                        imageFormData.append('name', "account");

                        axios.put(`https://domineering-hobbies-production.up.railway.app/update?id=${image_id}`, imageFormData)
                            .then(response => {
                                console.log('Image updated successfully.');
                            })
                            .catch(error => {
                                console.error('Error updating image:', error);
                            });
                    } else {
                        alert("for update plese post image on edit profile");    
                        console.error('imageId is null or invalid. Cannot update the image.');
                                      
                    }
                }
            } else {
                console.error('Account ID is undefined');
            }
        } catch (error) {
            console.error('Error updating account:', error);
        }
    };


    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    return (
        <Container>
            <div className={className}>
                <img src={bg2} alt="" className="bg1" />
                <div className="container-edit">
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    <div className="edit-Box">
                        <form onSubmit={handleSubmit}>
                            <div >
                                <input type="file" onChange={handleImageChange} />
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