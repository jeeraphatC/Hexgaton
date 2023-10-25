import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
function ViewEnter() {
  const { id } = useParams();
  const [enterprise, setenterprise] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8090/enterprises/${id}`)
      .then(response => {
        setenterprise(response.data);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  }, [id]);

  if (!enterprise) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className=''>{enterprise.name}</h1>
      <p><strong>Price:</strong> {enterprise.price}</p>
      <p><strong>Time:</strong> {enterprise.time}</p>
      <p><strong>Description:</strong> {enterprise.description}</p>
    </div>
  );
}

export default styled(ViewEnter)`



`;