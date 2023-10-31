import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ViewEnter() {
  const { id } = useParams();
  const [enterprise, setenterprise] = useState(null);
  const [isChatButtonClicked, setChatButtonClicked] = useState(false);

  
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

  const handleConfirmButtonClick = () => {
    // ทำสิ่งที่คุณต้องการเมื่อคลิกปุ่มยืนยัน
    // เช่น ส่งคำขอหรือดำเนินกิจกรรมที่เกี่ยวข้อง
    setChatButtonClicked(true); // เปลี่ยนสถานะปุ่มเป็น "แชท"
  };
  
  return (
    <Container style={{ marginTop: 50 , width : 800 }}>
      <div>
        
            <Card>
            <Card.Body>
  <Card.Title>{enterprise.name}</Card.Title>
  <Card.Text><strong>Price:</strong> {enterprise.price}</Card.Text>
  <Card.Text><strong>Time:</strong> {enterprise.time}</Card.Text>
  <Card.Text><strong>Description:</strong> {enterprise.description}</Card.Text>
  <Card.Text><strong>Name:</strong> {enterprise.account.accountname}</Card.Text>
  {isChatButtonClicked ? (
    <Link to="/chatRoom">Chat</Link> // ลิ้งไปที่หน้า Home.js
  ) : (
    <button onClick={handleConfirmButtonClick}>ยืนยัน</button>
  )}
</Card.Body>


            </Card>

      </div>
    </Container>
  );
}

export default styled(ViewEnter)`



`;