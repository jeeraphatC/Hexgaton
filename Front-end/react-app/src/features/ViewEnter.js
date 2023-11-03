import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import getCookies from './hook/getCookies';
function ViewEnter() {
  const { id } = useParams();
  const [enterprise, setEnterprise] = useState(null);
  const [isChatButtonClicked, setChatButtonClicked] = useState(false);
  const [enterpriseImages, setEnterpriseImages] = useState({});
  const [status, setStatus] = useState({
    status: '',
  });

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
    setChatButtonClicked(true); 
    const statusData = {
      status: "process",
      enterprise: {
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
  const isOwner = getCookies("id") == enterprise.account.accountid;

  return (
    <Container style={{ marginTop: 50, marginLeft: 400, width: 800 }}>
      <div>
        <Card style={{ alignItems:"center" }}>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>{enterprise.name}</Card.Title>
            <Card.Img variant="top" style={{ width: 420, height: 300 }} src={enterpriseImages[id]} />
            <br />
            <br />
            <br />
            <Card.Text><strong>Price:</strong> {enterprise.price}</Card.Text>
            <Card.Text><strong>Time:</strong> {enterprise.time}</Card.Text>
            <Card.Text><strong>Description:</strong> {enterprise.description}</Card.Text>
            <Card.Text><strong>Name:</strong> {enterprise.account.accountname}</Card.Text>
            {isChatButtonClicked ? (
              <Link to="/chatroom">Chat</Link>
            ) : (
              isOwner ? (
                <Link to={`/edit/${enterprise.id}`}> edit </Link>
              ) : (
                <button onClick={handleConfirmButtonClick}>ยืนยัน</button>
              )
            )}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

ViewEnter.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(ViewEnter)`



`;