import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function EditFreelance() {
  const { id } = useParams();
  const [freelance, setFreelance] = useState({
    name: '',
    price: '',
    time: '',
    description: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8082/freelances/${id}`)
      .then(response => {
        setFreelance(response.data);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล Freelance:', error);
      });
  }, [id]);

  const { name, price, time, description } = freelance;

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

  // สร้างฟังก์ชันเพื่ออัปเดตข้อมูลไปยังเซิร์ฟเวอร์
  const handleSave = () => {
    axios.put(`http://localhost:8082/freelances/${id}`, freelance)
      .then(response => {
        console.log('บันทึกข้อมูลสำเร็จ');
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', error);
      });
  };

  return (
    <div>
      <Container>
        <h1>Edit Freelance</h1>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Price:</label>
            <input type="text" value={price} onChange={handlePriceChange} />
          </div>
          <div>
            <label>Time:</label>
            <input type="text" value={time} onChange={handleTimeChange} />
          </div>
          <div>
            <label>Description:</label>
            <textarea value={description} onChange={handleDescriptionChange} />
          </div>
          <button type="button" onClick={handleSave}>Save</button>
        </form>
      </Container>
    </div>
  );
}

export default EditFreelance;
