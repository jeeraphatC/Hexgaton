import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams , useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import PropTypes from 'prop-types';
function EditFreelance({className}) {
  const { id } = useParams();
  const [freelance, setFreelance] = useState({
    name: '',
    price: '',
    time: '',
    description: '',
    type: '',
    subtype: '',
    companyName: '',
  });
const navigate=useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8082/freelances/${id}`)
      .then(response => {
        setFreelance(response.data);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล Freelance:', error);
      });
  }, [id]);

  const { name, price, time, description,type,subtype,companyName } = freelance;

  const handleNameChange = (event) => {
    setFreelance({ ...freelance, name: event.target.value });
  };

  const handlePriceChange = (event) => {
    setFreelance({ ...freelance, price: event.target.value });
  };

  const handleTimeChange = (event) => {
    setFreelance({ ...freelance, time: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setFreelance({ ...freelance, description: event.target.value });
  };
  const handleTypeChange = (event) => {
    setFreelance({ ...freelance, type: event.target.value });
  };
  const handleSubtypeChange = (event) => {
    setFreelance({ ...freelance, subtype: event.target.value });
  };
  const handleCompanyChange = (event) => {
    setFreelance({ ...freelance, companyName: event.target.value });
  };

  // สร้างฟังก์ชันเพื่ออัปเดตข้อมูลไปยังเซิร์ฟเวอร์
  const handleSave = () => {
    axios.put(`http://localhost:8082/freelances/${id}`, freelance)
      .then(response => {
        console.log('บันทึกข้อมูลสำเร็จ');
        navigate(`/Freelance/${id}`)
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', error);
      });
  };

  return (
    <div className={className}>
      <Container style={{ width: 800, marginTop: 50 }}>
        <h1 className='EditFreelanceh1'>Edit Freelance</h1>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Price:</label>
            <input type="number" min="500" value={price} onChange={handlePriceChange} />
          </div>
          <div>
            <label>Description:</label>
            <textarea value={description} 
            onChange={handleDescriptionChange} 
            />
          </div>

          <div>
            <label>Type:</label>
            <select
              name="type"
              value={type}
              onChange={handleTypeChange}
            >
              <option value=" ">Select Type</option>
              <option value="develop">Develop</option>
              <option value="graphic">Graphic</option>
              <option value="music">Music</option>
            </select>
          </div>
          {type === 'develop' && (
            <>
              <label>Subtype for develop:</label>
              <select
                name="subtype"
                value={subtype}
                onChange={handleSubtypeChange}
              >
                <option value=" ">Select Type</option>
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="desktop">Desktop</option>
              </select>
            </>
          )}
          {type === 'graphic' && (
            <>
              <label>Subtype for graphic:</label>
              <select
                name="subtype"
                value={subtype}
                onChange={handleSubtypeChange}
              >
                <option value=" ">Select Type</option>
                <option value="logos">Logo Design</option>
                <option value="sticker">Sticker Design</option>
                <option value="character">Character Design</option>
                <option value="draw-cartoon">Draw cartoons</option>
                <option value="3d-models">3D Models</option>
                <option value="banner">Banner advertising design</option>
              </select>
            </>
          )}
          {type === 'music' && (
            <>
              <label>Subtype for music:</label>
              <select
                name="subtype"
                value={subtype}
                onChange={handleSubtypeChange}
              >
                <option value=" ">Select Type</option>
                <option value="beat">Beat</option>
              </select>
            </>
          )}
          <div>
            <label>Number of Day:</label>
            <input
              type="number"
              name="time"
              value={time}
              onChange={handleTimeChange}
            />
          </div>
          <div>
            <label>companyName:</label>
            <textarea
              name="companyName"
              value={companyName}
              onChange={handleCompanyChange}
            />
          </div>

          <button type="button" onClick={handleSave}>Save</button>
        </form>
      </Container>
    </div>
  );
}


EditFreelance.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(EditFreelance)`
 margin: 50px 400px 0px 400px;
  .custom-button {
    margin-top: 30px;
    margin-left: 900px;
  }
  input[type="file"] {
    font-size: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 20px;
  }
  select {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  label{
    font-size: 20px;
    margin-top: 20px;
  }
  textarea {
    width: 100%;
    height: 100px;
    font-size: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
  }
`;