import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from "styled-components";
import search4 from "../pic/search4.png";

function FindJob() {
  const location = useLocation();
  const type = location.state.type;

  const [enterprises, setEnterprises] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:8090/enterprises/type/${type}`)
      .then(response => {
        setEnterprises(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [type]);

  return (
    <div>
      <Container style={{ marginTop: 50 }}>
        <h1 style={{ margin: '100px 20px 20px 20px', color: '#0196FC' }}>Find jobs (ALL)</h1>
        <Row style={{marginBottom : 50}}>
          <Col md={2}>
            <Button Link to="/findjob" style={{marginBottom : 10}} state={{ type: "develop" }}>Developer</Button>
            <Button Link to="/findjob" style={{marginBottom : 10}} state={{ type: "web" }}>Web</Button><br />
            <Button variant="success" className='btn-add-first'>
              <Link to='/FreelanceForm' className='btn-add-sec'>For Freelance ADD Job</Link>
            </Button>
          </Col>
        </Row>
        <Row>
          {enterprises.map(enterprise => (
            <Col md={4} key={enterprise.id}>
              <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
                <Card.Body>
                  <Link to={`/enterprises/${enterprise.id}`}>
                    <img src={search4} alt="View Details" className='jobdetail' style={{ width: '50px', height: '50px', margin: '105px 0px 0px 300px', position: 'absolute' }} />
                  </Link>
                  <Card.Title><strong>Name:</strong> {enterprise.name}</Card.Title>
                  <Card.Text><strong>Price:</strong> {enterprise.price}</Card.Text>
                  <Card.Text><strong>Time:</strong> {enterprise.time}</Card.Text>
                  <Card.Text><strong>Description:</strong>{truncateText(enterprise.description, 40)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

export default styled(FindJob)`
.selected-items button {
  margin: 5px; 
  color: #FFFFFF;
  background-color : #0196FC;
  border: 0px;
  border-radius: 3px;
  padding: 5px;
}
.selected-items {
  position: fixed;
  top:70px; 
  right: 20px; 
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 240px;
  text-align: center;
}
 width: 100%;
  margin-top: 50px;
  background-color: azure;

  .btn-add-first   {
    float : right ;
    background-color : #0196FC;
    border: 2px solid #0196FC;
    
  }
  .btn-add-first:active 
 {
 
    float : right ;
    border: 2px solid #0071BE;
  }
`;
