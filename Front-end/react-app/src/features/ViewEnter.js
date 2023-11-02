import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function ViewEnter() {
  const { id } = useParams();
  const [enterprise, setEnterprise] = useState(null);
  const [isChatButtonClicked, setChatButtonClicked] = useState(false);
  const [enterpriseImages, setEnterpriseImages] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8090/enterprises/${id}`)
      .then(response => {
        setEnterprise(response.data);
        
        // Fetch enterprise image
        axios.get(`http://localhost:2023/getByNameAndImagelocation/enterprises/${id}`, { responseType: 'arraybuffer' })
          .then(imageResponse => {
            const base64 = btoa(new Uint8Array(imageResponse.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
            const imageSrc = `data:image/jpeg;base64,${base64}`;
            setEnterpriseImages({ [id]: imageSrc });
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
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
    <Container style={{ marginTop: 50, width: 800 }}>
      <div>
        <Card>
          <Card.Body>
            <Card.Img variant="top" style={{ width: 300, height: 200 }} src={enterpriseImages[id]} />
            <br />
            <Card.Title>{enterprise.name}</Card.Title>
            <Card.Text><strong>Price:</strong> {enterprise.price}</Card.Text>
            <Card.Text><strong>Time:</strong> {enterprise.time}</Card.Text>
            <Card.Text><strong>Description:</strong> {enterprise.description}</Card.Text>
            <Card.Text><strong>Name:</strong> {enterprise.account.accountname}</Card.Text>
            {isChatButtonClicked ? (
              <p>Chat</p> // แสดงข้อความ Chat หรือนำไปยังหน้า ChatRoom ตามที่ต้องการ
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