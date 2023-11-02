import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { Container, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
function ViewFreelance({className}) {
  const { id } = useParams();
  const [freelance, setFreelance] = useState(null);
  const [isChatButtonClicked, setChatButtonClicked] = useState(false);
  const [freelanceImages, setFreelanceImages] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8082/freelances/${id}`)
      .then(response => {
        setFreelance(response.data);
        axios.get(`http://localhost:2023/getByNameAndImagelocation/freelance/${id}`, { responseType: 'arraybuffer' })
          .then(imageResponse => {
            const base64 = btoa(new Uint8Array(imageResponse.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
            const imageSrc = `data:image/jpeg;base64,${base64}`;
            setFreelanceImages({ [id]: imageSrc });
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!freelance) {
    return <div>Loading...</div>;
  }

  const handleConfirmButtonClick = () => {
    setChatButtonClicked(true); // เปลี่ยนสถานะปุ่มเป็น "แชท"
  };

  return (
    <div className={className}>
      <Container style={{ marginTop: 50, marginLeft: 400, width: 800 }}>
        <div>
          <Card>
            <Card.Body>
              <Card.Title style={{textAlign : 'center'}}>{freelance.name}</Card.Title>
              <Card.Img variant="top" style={{ width: 420, height: 300 }} src={freelanceImages[id]} />
              <br />
              <br />
              <br />

              <Card.Text><strong>Price:</strong> {freelance.price}&nbsp;&nbsp;Baht</Card.Text>
              <Card.Text><strong>Time:</strong> {freelance.time}&nbsp;&nbsp;&nbsp;Days</Card.Text>
              <Card.Text><strong>Description:</strong> {freelance.description}</Card.Text>

              {isChatButtonClicked ? (
                <p>Chat</p> // แสดงข้อความ Chat หรือนำไปยังหน้า ChatRoom ตามที่ต้องการ
              ) : (
                <button onClick={handleConfirmButtonClick}>ยืนยัน</button>
              )}
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text><strong>Name:</strong> {freelance.account.accountname}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}


ViewFreelance.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(ViewFreelance)`
 
`;