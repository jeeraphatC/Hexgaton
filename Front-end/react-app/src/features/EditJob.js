import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditJob() {
  const { id } = useParams();
  const [enterprise, setEnterprise] = useState({
    name: '',
    price: '',
    time: '',
    description: '',
  });

  useEffect(() => {
    // เรียก API ดึงข้อมูล Enterprise ตาม ID ที่ถูกส่งมาจาก URL
    axios.get(`http://localhost:8080/enterprises/${id}`)
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

  // ฟังก์ชันที่จะอัปเดตข้อมูลในเซิร์ฟเวอร์
  const updateEnterprise = () => {
    axios.put(`http://localhost:8080/enterprises/${id}`, enterprise)
      .then(response => {
        // อัปเดตสถานะหรือทำสิ่งที่คุณต้องการหลังจากการอัปเดตข้อมูลเสร็จสมบูรณ์
        console.log('อัปเดตข้อมูลเรียบร้อยแล้ว');
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการอัปเดตข้อมูล:', error);
      });
  };

  return (
    <div>
      <h1>Edit Enterprise</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={enterprise.name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" value={enterprise.price} onChange={handlePriceChange} />
        </div>
        <div>
          <label>Time:</label>
          <input type="text" value={enterprise.time} onChange={handleTimeChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={enterprise.description} onChange={handleDescriptionChange} />
        </div>
        <button type="button" onClick={updateEnterprise}>Save</button>
      </form>
    </div>
  );
}

export default EditJob;
