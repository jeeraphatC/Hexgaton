import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import PropTypes from 'prop-types';
import big_logo from "../pic/big_logo.png";
function EditFreelance({ className }) {
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
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://apathetic-laborer-production.up.railway.app/freelances/${id}`)
      .then(response => {
        setFreelance(response.data);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล Freelance:', error);
      });
  }, [id]);

  const { name, price, time, description, type, subtype, companyName } = freelance;

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
    axios.put(`https://apathetic-laborer-production.up.railway.app/freelances/${id}`, freelance)
      .then(response => {
        console.log('บันทึกข้อมูลสำเร็จ');
        console.log(response.data.id)
        const imgfree_id = response.data.id;

        const name = "freelance";
        const imageFormData = new FormData();
        imageFormData.append('image', selectedImage);
        imageFormData.append('imagelocation', imgfree_id);
        imageFormData.append('name', "freelance");
        console.log("image", imgfree_id)
        axios.put(`https://dapper-advertisement-production.up.railway.app/update/${name}/${imgfree_id}`, imageFormData)
          .then(response => {
            console.log('Image updated successfully.');
          })
          .catch(error => {
            console.error('Error updating image:', error);
          });

        navigate(`/Freelance/${id}`)
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', error);
      });
  };

  return (
    <div className={className}>
      
      <Container style={{}}>
        <h1 className='EditFreelanceh1'>Edit Your Profile</h1>
        <h2 style={{ marginTop: 10, color: '#9C9C9C', fontSize: '30px' }}> เปลี่ยนแปลงโปรไฟลของเรา เพื่อให้Enterpriseเห็นโปรไฟลของเรา</h2>
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
              type="number" min="1"
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
          <div class="form-group">
            <input type="file" onChange={handleImageChange} />
          </div>
        </form>
      </Container>
      <button type="button" className="custom-button2" onClick={handleSave}>Save</button>
      <footer>
        <div class="footer-content" style={{ marginTop: '1800px' }}>
          <img src={big_logo} alt="" className="big_logofooter" />
          <p className="footertext1">
            Norrapat Sai-ai 652110289<br></br>
            Samitthichai Peeragun 652110309<br></br>
            Sivasith Singkaew 652110308<br></br>
            Jeeraphat Chantra 652110318<br></br>
          </p>
        </div>
      </footer>
    </div>

  );
}


EditFreelance.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(EditFreelance)`
.custom-button2 {
  margin-left: 300px;
  margin-top: 60px;
  width: 130px;
  height:40px;
  border: 0px;
  border-radius: 10px;
  background: #0071BE;
  color: #FFF;

}
.EditFreelanceh1{
  font-size: 80px;
  color: #0071BE;
}
margin:50px 300px 0px 400px;
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