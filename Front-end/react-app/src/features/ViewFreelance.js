import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ViewFreelance() {
  const { id } = useParams();
  const [freelance, setFreelance] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8082/freelances/${id}`)
      .then(response => {
        setFreelance(response.data);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  }, [id]);

  if (!freelance) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{freelance.name}</h1>
      <p><strong>Price:</strong> {freelance.price}</p>
      <p><strong>Time:</strong> {freelance.time}</p>
      <p><strong>Description:</strong> {freelance.description}</p>
    </div>
  );
}

export default ViewFreelance;
