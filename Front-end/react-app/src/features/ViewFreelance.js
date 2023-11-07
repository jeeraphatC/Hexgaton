import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { Container, Card, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import getCookies from './hook/getCookies';
import arrow from "./pic/barrow.png";
import { useCookies } from 'react-cookie';

function ViewFreelance({ className }) {
  const { id } = useParams();
  const [freelance, setFreelance] = useState(null);
  const [isChatButtonClicked, setChatButtonClicked] = useState(false);
  const [freelanceImages, setFreelanceImages] = useState({});
  const [image, setImage] = useState(null);
  const imagelocation = getCookies("id");
  const [accId, setaccId] = useState();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [senderTochat,setSendertoChat] = useState();
  const [account, setaccount] = useState(' ');

  useEffect(() => {
    setaccId(getCookies("id"))
    axios.get(`https://domineering-hobbies-production.up.railway.app/getByNameAndImagelocation/account/${account}`, { responseType: 'arraybuffer' })
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
    axios.get(`https://smart-egg-production.up.railway.app/freelances/${id}`)
      .then(response => {
        setFreelance(response.data);
        setaccount(response.data.account.accountid)
        setSendertoChat(response.data.account.accountname)
        console.log(response.data.account.accountid)
        axios.get(`https://domineering-hobbies-production.up.railway.app/getByNameAndImagelocation/freelance/${id}`, { responseType: 'arraybuffer' })
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
    const test_id = getCookies("id");
    const test_name = getCookies("username");
    setCookie('senderNameToChat',senderTochat)
    console.log("hello",test_id)

    const patchData = {
      shows: "no"
    };

    axios
      .patch(`https://smart-egg-production.up.railway.app/freelances/${id}`, patchData)
      .then((patchResponse) => {
        // Handle the PATCH response if needed
        console.log("PATCH Data:", patchResponse.data);
      })
      .catch((patchError) => {
        console.error("Error sending PATCH request:", patchError);
      });

    setChatButtonClicked(true);

    const statusData = {
      status: "process",
      freelancer: {
        id: id
      },
      account_name:test_name,
      account_id:test_id
    };

    console.log(id);
    const historyData = {
      account: {
        accountid: accId,
      },
      freelance: {
        id: id
      }
    };
    console.log(historyData)
    axios
      .post(`https://smart-egg-production.up.railway.app/historys/freelance`, historyData)
      .then((historyResponse) => {
        // Handle the response if needed
        console.log("History Data:", historyResponse.data);
        axios.post(`https://smart-egg-production.up.railway.app/status`, statusData)
        .then((statusResponse) => {
          const status = statusResponse.data;
          console.log(status);
        })
        .catch(error => {
          console.error('Error updating status:', error);
        });
      });

  };

  const isOwner = getCookies("id") == freelance.account.accountid;




  return (
    <Container style={{ marginTop: 50, width: 800 }}>
      <Link to="/" style={{ fontSize: '30px', marginTop: '30px', color: '#0071BE' }}>Home</Link>
      <img src={arrow} alt="" style={{ width: '30px', marginLeft: '10px', marginBottom: '10px' }} />
      <Link to="/optionenter" style={{ fontSize: '30px', marginTop: '30px', marginLeft: '10px', color: '#808080' }}>enterprise</Link>
      <img src={arrow} alt="" style={{ width: '30px', marginLeft: '10px', marginBottom: '10px' }} />
      <Link to="/findfreelance" state={{ type: freelance.type }} style={{ fontSize: '30px', marginTop: '30px', marginLeft: '10px', color: '#808080' }}>{freelance.type}</Link>
      <div className={className}>
        <Row>
          <Col md={6}>
            <Card style={{ borderRadius: 10, backgroundColor: '#FFFBF5' }}>
              <Card.Body>
                <Card.Img variant="top" style={{ width: 420, height: 300 }} src={freelanceImages[id]} />
                <br />
                <br />
                <br />
                <h1 style={{ textAlign: 'center' }}>{freelance.name}</h1>
                <Card.Text>{freelance.description}</Card.Text>
                <Card.Text><p><strong>companyName:&emsp;</strong> {freelance.companyName}</p></Card.Text>

              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <div className='container-profile'>
                      <Link to={`/profile/${freelance.account.accountid}`}><Card.Img src={image} alt="" className="user1" /></Link>
                    </div>
                  </Col>
                  <Col md={3} style={{ marginTop: 30 }}>
                  <Link to={`/profile/${freelance.account.accountid}`}><Card.Text><strong>Name:</strong> {freelance.account.accountname}</Card.Text></Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} >
            <Card style={{ marginLeft: 250, width: "20rem", padding: 20 }}>
              <Card.Text><p><strong>Price:&emsp;</strong> {freelance.price}&nbsp;&nbsp;Baht</p></Card.Text>
              <Card.Text><p>{freelance.type}</p></Card.Text>
              <Card.Text><p><strong>Time:&emsp;</strong> {freelance.time}&nbsp;&nbsp;&nbsp;Days</p></Card.Text>
              {isChatButtonClicked ? (
                <Link to="/ChatRoom">Chat</Link> // แสดงข้อความ Chat หรือนำไปยังหน้า ChatRoom ตามที่ต้องการ
              ) : (
                isOwner ? (
                  <Link to={`/editfreelance/${freelance.id}`} className="edit"> edit </Link>
                ) : (
                  <button onClick={handleConfirmButtonClick} className="edit">Accept</button>
                )
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </Container>

  );
}


ViewFreelance.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(ViewFreelance)`

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
  text-align: center;
}

.edit:hover{
  color: #FFF;
  background: #0196FC;
  border: 2px solid #0196FC;
}
`;