import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { Container, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import getCookies from './hook/getCookies';
function ViewFreelance({ className }) {
  const { id } = useParams();
  const [freelance, setFreelance] = useState(null);
  const [isChatButtonClicked, setChatButtonClicked] = useState(false);
  const [freelanceImages, setFreelanceImages] = useState({});
  const [image, setImage] = useState(null);
  const imagelocation = getCookies("id");
  useEffect(() => {
    axios.get(`http://localhost:2023/getByNameAndImagelocation/account/${imagelocation}`, { responseType: 'arraybuffer' })
      .then(response => {
        const base64 = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        const imageSrc = `data:image/jpeg;base64,${base64}`;
        setImage(imageSrc);

      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, []);

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
    setChatButtonClicked(true);
    const statusData = {
      status: "process",
      freelancer: {
        id: id
      }
    };

    axios.post(`http://localhost:8082/status`, statusData)
      .then((statusResponse) => {
        const status = statusResponse.data;
        console.log(status);
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  };
  const isOwner = getCookies("id") == freelance.account.accountid;


  return (
    <div className={className}>
      <Container style={{ marginTop: 50, marginLeft: 400, width: 800 }}>
        <div>
          <Card style={{ alignItems: "center" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>{freelance.name}</Card.Title>
              <Card.Img variant="top" style={{ width: 420, height: 300 }} src={freelanceImages[id]} />
              <br />
              <br />
              <br />

              <Card.Text><strong>Price:</strong> {freelance.price}&nbsp;&nbsp;Baht</Card.Text>
              <Card.Text><strong>Time:</strong> {freelance.time}&nbsp;&nbsp;&nbsp;Days</Card.Text>
              <Card.Text><strong>Description:</strong> {freelance.description}</Card.Text>
              <Card.Text><strong>companyName:</strong> {freelance.companyName}</Card.Text>

              {isChatButtonClicked ? (
                <Link to="/chatroom">Chat</Link> // แสดงข้อความ Chat หรือนำไปยังหน้า ChatRoom ตามที่ต้องการ
              ) : (
                isOwner ? (
                  <Link to={`/editfreelance/${freelance.id}`}> edit </Link>
                ) : (
                  <button onClick={handleConfirmButtonClick}>ยืนยัน</button>
                )
              )}
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text><strong>Name:</strong> {freelance.account.accountname}</Card.Text>
              <Card.Img src={image} alt="" className="user1" />
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