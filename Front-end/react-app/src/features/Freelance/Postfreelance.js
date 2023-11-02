// src/components/FreelanceForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import getCookies from '../hook/getCookies';
const FreelanceForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    time: '',
    description: '',
    type: '',
    subtype: ' '
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name === '' ||
      formData.price === '' ||
      formData.time === '' ||
      formData.description === '' ||
      formData.type.trim() === ''
    ) {
      alert('Please fill in all the required fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8082/freelances', formData);
      console.log('Freelance created:', response.data);

      const accoun_id = getCookies('id');
      axios.get(`http://localhost:8085/api/v1/accounts/list/${accoun_id}`)
        .then((accountResponse) => {
          const accountData = accountResponse.data;
          console.log('Account data retrieved successfully:', accountData);

          const jobDataToUpdate = {
            id: response.data.id, // Replace with the job ID you want to update
            name: response.data.name,
            price: response.data.price,
            time: response.data.time,
            description: response.data.description,
            type: response.data.type,
            subtype: response.data.subtype,
            account: {
              accountname: accountData.accountname,
              email: accountData.email,
              password: accountData.password,
              numberCard: accountData.numberCard,
              accountid: accoun_id
            }
          };


          axios.put(`http://localhost:8082/freelances/${jobDataToUpdate.id}`, jobDataToUpdate)
            .then((jobResponse) => {
              console.log('Job updated successfully!', jobResponse.data);
              const updatedJobId = jobResponse.data.id; // Store the updated job ID

              if (selectedImage) {
                const formData = new FormData();
                formData.append('image', selectedImage);

                axios.post('http://localhost:2023/add', formData)
                  .then(imageResponse => {
                    console.log('Image uploaded successfully.');
                    const imageId = imageResponse.data;
                    console.log(imageId);

                    if (imageId) {
                      const imageFormData = new FormData();
                      imageFormData.append('image', selectedImage);
                      imageFormData.append('imagelocation', updatedJobId);
                      imageFormData.append('name', "freelance");

                      axios.put(`http://localhost:2023/update?id=${imageId}`, imageFormData)
                        .then(response => {
                          console.log('Image updated successfully.');
                        })
                        .catch(error => {
                          console.error('Error updating image:', error);
                        });
                    } else {
                      console.error('imageId is null or invalid. Cannot update the image.');
                    }
                  })
                  .catch(error => {
                    console.error('Error uploading image:', error);
                  });
              }
            })
            .catch((jobError) => {
              console.error('Error updating job:', jobError);
            });
        })
        .catch((accountError) => {
          console.error('Error retrieving account data:', accountError);
        });
    } catch (error) {
      console.error('Error creating freelance:', error);
    }

    // Reset the form data here
    setFormData({
      id: '',
      name: '',
      price: '',
      time: '',
      description: '',
      type: '',
    });

    // Clear selectedImage
    setSelectedImage(null);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  return (
    <Container style={{ width: 800, marginTop: 60 }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number" min="1"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Number of Day:</label>
          <input
            type="number"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value=" ">Select Type</option>
            <option value="develop">Develop</option>

            <option value="graphic">Graphic</option>
            <option value="music">Music</option>
          </select>
        </div>

        {formData.type === 'develop' && (
          <select
            name="subtype"
            value={formData.subtype}
            onChange={handleChange}
          >
            <option value=" ">Select Type</option>
            <option value="web">Web</option>
            <option value="mobile">Mobile</option>
            <option value="desktop">Desktop</option>
          </select>
        )}
        {formData.type === 'graphic' && (
          <select
            name="subtype"
            value={formData.subtype}
            onChange={handleChange}
          >
            <option value=" ">Select Type</option>
            <option value="logos">Logo Design</option>
            <option value="sticker">Sticker Design</option>
            <option value="character">Character Design</option>
            <option value="draw-cartoon">Draw cartoons</option>
            <option value="3d-models">3D Models</option>
            <option value="banner">Banner advertising design</option>
          </select>
        )}
        {formData.type === 'music' && (
          <select
            name="subtype"
            value={formData.subtype}
            onChange={handleChange}
          >
            <option value=" ">Select Type</option>
            <option value="beat">Beat</option>
          </select>
        )}

        <div>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div style={{ textAlign: "center" }}>
          <Button variant="success" type="submit" style={{ width: 150 }}>Submit</Button>
        </div>

      </form>
    </Container>
  );
};

export default FreelanceForm;
