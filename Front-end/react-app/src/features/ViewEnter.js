import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import getCookies from './hook/getCookies';
function ViewEnter({className}) {
  const { id } = useParams();
  const [enterprise, setEnterprise] = useState(null);
  const [isChatButtonClicked, setChatButtonClicked] = useState(false);
  const [enterpriseImages, setEnterpriseImages] = useState({});
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState({
    status: '',
  });
  const [account, setaccount] = useState();

  useEffect(() => {
    axios.get(`http://localhost:2023/getByNameAndImagelocation/account/${account}`, { responseType: 'arraybuffer' })
      .then(response => {
        const base64 = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        const imageSrc = `data:image/jpeg;base64,${base64}`;
        setImage(imageSrc);

      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, [account]);


  useEffect(() => {
    axios.get(`http://localhost:8090/enterprises/${id}`)
      .then(response => {
        setEnterprise(response.data);
        setaccount(response.data.account.accountid)

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
    const response = axios.post('http://localhost:8082/historys/freelance')
      .then((responsedata) => {



      })
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
      <div className={className}>
        <Card style={{ alignItems: "center" }}>
          <Card.Body>
          <h1 style={{ textAlign: 'center' }}>{enterprise.name}</h1>            <Card.Img variant="top" style={{ width: 420, height: 300 }} src={enterpriseImages[id]} />
            <br />
            <br />
            <br />
            <Card.Text><p><strong>Price:&emsp;</strong> {enterprise.price}&nbsp;&nbsp;Baht</p></Card.Text>
            <Card.Text><p><strong>Time:&emsp;</strong> {enterprise.time}&nbsp;&nbsp;&nbsp;Days</p></Card.Text>
            <Card.Text><p><strong>Description:&emsp;</strong> {enterprise.description}</p></Card.Text>

            {isChatButtonClicked ? (
              <Link to="/chatroom">Chat</Link>
            ) : (
              isOwner ? (
                <Link to={`/edit/${enterprise.id}`} className="edit"> edit </Link>
              ) : (
                <button onClick={handleConfirmButtonClick} className="edit">Accept</button>
              )
            )}
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Row>
              <Col md={3}>
                <div className='container-profile'>
                  <Card.Img src={image} alt="" className="user1" />
                </div>
              </Col>
              <Col md={3} style={{ marginTop: 30 }}>
                <Card.Text><strong>Name:</strong> {enterprise.account.accountname}</Card.Text>
              </Col>
            </Row>
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

.container-profile {
  margin: 15px 43px;
  position: relative;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  overflow: hidden;
}

.user1{
  display: block;
  width: 60;
  height: 60;
  object-fit: cover;
  margin-top:0
}
h1 {
  color: #25daf9; 
  background: linear-gradient(to right, #0196fc, #25daf9); 
  -webkit-background-clip: text;
  color: transparent; 
  background-size: 200% 100%; 
  background-clip: text;
}
p{
  font-size: 20px;
}
.edit{
  color: #0196FC;
  padding:0px 30px 0px 30px ;
  border: 2px solid #000;
  transition: all 0.3s;
  border-radius: 5px;
  font-size:25px;
}

.edit:hover{
  color: #FFF;
  background: #0196FC;
  border: 2px solid #0196FC;
}
`;