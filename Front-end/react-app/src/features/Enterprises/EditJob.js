import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams , useNavigate  } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import big_logo from "../pic/big_logo.png";
import PropTypes from 'prop-types';
function EditJob({ className }) {
  const { id } = useParams();
  const [enterprise, setEnterprise] = useState({
    name: '',
    price: '',
    time: '',
    description: '',
    type: '',
    subtype: '',
    location: '',
    workprocess: '',
    examplejob: '',
    fixtime: '',
  });
  const navigate=useNavigate();
  useEffect(() => {
    // เรียก API ดึงข้อมูล Enterprise ตาม ID ที่ถูกส่งมาจาก URL
    axios.get(`https://smart-egg-production.up.railway.app/enterprises/${id}`)
      .then(response => {
        setEnterprise(response.data);
        
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล Enterprise:', error);
      });
  }, [id]);

  const handleNameChange = (event) => {
    setEnterprise({ ...enterprise, name: event.target.value });
  };

  const handlePriceChange = (event) => {
    setEnterprise({ ...enterprise, price: event.target.value });
  };

  const handleTimeChange = (event) => {
    setEnterprise({ ...enterprise, time: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setEnterprise({ ...enterprise, description: event.target.value });
  };

  const handleTypeionChange = (event) => {
    setEnterprise({ ...enterprise, type: event.target.value });
  };

  const handleSubTypeChange = (event) => {
    setEnterprise({ ...enterprise, subtype: event.target.value });
  };

  const handleLocationChange = (event) => {
    setEnterprise({ ...enterprise, location: event.target.value });
  };

  const handleWorkChange = (event) => {
    setEnterprise({ ...enterprise, workprocess: event.target.value });
  };

  const handleExampleChange = (event) => {
    setEnterprise({ ...enterprise, examplejob: event.target.value });
  };

  const handleFixtimeChange = (event) => {
    setEnterprise({ ...enterprise, fixtime: event.target.value });
  };

  // ฟังก์ชันที่จะอัปเดตข้อมูลในเซิร์ฟเวอร์
  const updateEnterprise = () => {
    axios.put(`https://smart-egg-production.up.railway.app/enterprises/${id}`, enterprise)
      .then(response => {
        // อัปเดตสถานะหรือทำสิ่งที่คุณต้องการหลังจากการอัปเดตข้อมูลเสร็จสมบูรณ์
        console.log('อัปเดตข้อมูลเรียบร้อยแล้ว');
        navigate(`/enterprises/${id}`)
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการอัปเดตข้อมูล:', error);
      });
  };

  return (
    <div className={className}>
      <Container>
        <div>
        <h1 className='EditFreelanceh1'>Edit Your job</h1>
        <h2 style={{ marginTop: 10,color: '#9C9C9C',fontSize:'30px' }}> เปลี่ยนแปลงข้อมูลงานของเรา เพื่อให้freelanceมารับงาน</h2>
          <form>
            <div>
              <label>Name:</label>
              <input type="text" value={enterprise.name} onChange={handleNameChange} />
            </div>
            <div>
              <label>Price:</label>
              <input type="number" min="500" value={enterprise.price} onChange={handlePriceChange} />
            </div>
            <div>
              <label>Time:</label>
              <input type="number" min="1" value={enterprise.time} onChange={handleTimeChange} />
            </div>
            <div>
              <label>Description:</label>
              <textarea value={enterprise.description} onChange={handleDescriptionChange} />
            </div>
            <div>
              <label>Workprocess:</label>
              <textarea
                name="workprocess"
                value={enterprise.workprocess}
                onChange={handleWorkChange}
              />
            </div>
            <div>
              <label>examplejob:</label>
              <textarea
                name="examplejob"
                value={enterprise.examplejob}
                onChange={handleExampleChange}
              />
            </div>
            <div>
              <label>Fix time:</label>
              <input
                type="number"
                name="fixtime"
                value={enterprise.fixtime}
                onChange={handleFixtimeChange}
              />
            </div>
            <div>
              <label>Type:</label>
              <select
                name="type"
                value={enterprise.type}
                onChange={handleTypeionChange}
              >
                <option value=" ">Select Type</option>
                <option value="develop">Develop</option>
                <option value="graphic">Graphic</option>
                <option value="music">Music</option>
              </select>
            </div>
            {enterprise.type === 'develop' && (
              <>
                <label>Subtype for develop:</label>
                <select
                  name="subtype"
                  value={enterprise.subtype}
                  onChange={handleSubTypeChange}
                >
                  <option value=" ">Select Type</option>
                  <option value="web">Web</option>
                  <option value="mobile">Mobile</option>
                  <option value="desktop">Desktop</option>
                </select>
              </>
            )}
            {enterprise.type === 'graphic' && (
              <>
                <label>Subtype for graphic:</label>
                <select
                  name="subtype"
                  value={enterprise.subtype}
                  onChange={handleSubTypeChange}
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
            {enterprise.type === 'music' && (
              <>
                <label>Subtype for music:</label>
                <select
                  name="subtype"
                  value={enterprise.subtype}
                  onChange={handleSubTypeChange}
                >
                  <option value=" ">Select Type</option>
                  <option value="beat">Beat</option>
                </select>
              </>
            )}

            <div>
              <label>Location:</label>
              <select
                name="location"
                value={enterprise.location}
                onChange={handleLocationChange}
              >
                <option value=" ">Select Location</option>
                <option value="onsite">onsite</option>
                <option value="online">online</option>
              </select>
            </div>

            <button type="button" className="custom-button3" onClick={updateEnterprise}>Save</button>
          </form>
        </div>
      </Container>
      <footer>
        <div class="footer-content" style={{marginTop:'1800px'}}>
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


EditJob.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(EditJob)`
margin:50px 300px 0px 400px;
.custom-button3{
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
  h2 {
    margin-top: 60px;
    color: #0196FC;
    font-size: 80px;
  }

  p {
    color: #9C9C9C;
    font-size: 50px;
    
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