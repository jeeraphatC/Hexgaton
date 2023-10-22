// src/components/FreelanceForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
const FreelanceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    time: '',
    description: '',
    type: ''
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
      setFormData({
        name: '',
        price: '',
        time: '',
        description: '',
        type: '',
      });
    } catch (error) {
      console.error('Error creating freelance:', error);
    }
  };

  return (
    <Container style={{ marginTop: 60 }}>
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
          <label>Time:</label>
          <input
            type="date"
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
            <option value="">Select Type</option>
            <option value="develop">Develop</option>
            <option value="graphic">Graphic</option>
            <option value="music">Music</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button variant="success" type="submit" style={{width : 150}}>Submit</Button>
        </div>

      </form>
    </Container>
  );
};

export default FreelanceForm;
