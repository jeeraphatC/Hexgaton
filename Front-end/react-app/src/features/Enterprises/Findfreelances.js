import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from "styled-components";
import search4 from "../pic/search4.png";
import PropTypes from 'prop-types';
function FindFreelances({ className }) {
  const location = useLocation();
  const type = location.state.type;
  const type2 = location.state.type2;
  console.log(type)
  console.log(type2)
  const [freelances, setFreelance] = useState([]);
  let path;
  if (type2 == null) {
    path = `http://localhost:8082/freelances/type/${type}`
  }
  else {
    path = `http://localhost:8082/freelances/type/${type}/${type2}`
  }

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  function develop() {
    if (type === 'develop') {
      return (
        <div className={className} style={{
          marginTop: 0
        }}>
          <Col md={6} >
            <Link to="/findfreelance" state={{ type: "develop" }}>
              <Button style={{ marginBottom: 10 }}>Developer</Button>
            </Link>
            <Link to="/findfreelance" state={{ type: "develop", type2: "web" }}>
              <Button style={{ marginBottom: 10 }}>Web</Button>
            </Link>

            <Link to="/findfreelance" state={{ type: "develop", type2: "mobile" }}>
              <Button style={{ marginBottom: 10 }}>Mobile</Button>
            </Link>

            <Link to="/findfreelance" state={{ type: "develop", type2: "desktop" }}>
              <Button style={{ marginBottom: 10 }}>Desktop</Button>
            </Link>
          </Col>
        </div>
      );
    }
    else if (type === 'graphic') {
      return (
        <div style={{
          marginTop: 0
        }}>
          <Col md={10}>
            <Link to="/findfreelance" state={{ type: "graphic" }}>
              <Button style={{ marginBottom: 10 }}>Graphic</Button>
            </Link>
            <Link to="/findfreelance" state={{ type: "graphic", type2: "logos" }}>
              <Button style={{ marginBottom: 10 }}>Logo Design</Button>
            </Link>
            <Link to="/findfreelance" state={{ type: "graphic", type2: "sticker" }}> <Button style={{ marginBottom: 10 }}>Sticker Design</Button></Link>
            <Link to="/findfreelance" state={{ type: "graphic", type2: "character" }}> <Button style={{ marginBottom: 10 }}>Character Design</Button></Link>
            <Link to="/findfreelance" state={{ type: "graphic", type2: "draw-cartoon" }}> <Button style={{ marginBottom: 10 }}>Draw cartoons</Button></Link>
            <Link to="/findfreelance" state={{ type: "graphic", type2: "3d-models" }}> <Button style={{ marginBottom: 10 }}>3D Models</Button></Link>
            <Link to="/findfreelance" state={{ type: "graphic", type2: "banner" }}> <Button style={{ marginBottom: 10 }}>Banner advertising design</Button></Link>
          </Col>
        </div>
      );
    }
    else if (type === 'music') {
      return (
        <Col md={4} >
          <Link to="/findfreelance" state={{ type: "music" }}>
            <Button style={{ marginBottom: 10 }}>Music</Button>
          </Link>
          <Link to="/findfreelance" state={{ type: "music", type2: "beat" }}>
            <Button style={{ marginBottom: 10 }}>beat</Button>
          </Link>
        </Col>
      )
    }



    return null;
  }
  useEffect(() => {
    axios.get(path)
      .then(response => {
        setFreelance(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [type, type2]);

  return (
    <div>
      <Container style={{ marginTop: 50 }}>
        <h1 style={{ margin: '100px 20px 20px 20px', color: '#0196FC' }}>Find jobs (ALL)</h1>
        <Row style={{ marginBottom: 50 }}>
          <Col md={10} >
            {develop()}
            <Button variant="success" className='btn-add-first'>
              <Link to='/Postjob' className='btn-add-sec'>For Freelance ADD Job</Link>
            </Button>
          </Col>
        </Row>
        <Row >
          {freelances.map(freelance => (
            <Col md={4} key={freelance.id}>
              <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
                <Card.Body>
                  <Link to={`/Freelance/${freelance.id}`}>
                    <img src={search4} alt="View Details" className='jobdetail' style={{ width: '50px', height: '50px', margin: '105px 0px 0px 300px', position: 'absolute' }} />
                  </Link>
                  <Card.Title><strong>Name:</strong> {freelance.name}</Card.Title>
                  <Card.Text><strong>Price:</strong> {freelance.price}</Card.Text>
                  <Card.Text><strong>Time:</strong> {freelance.time}</Card.Text>
                  <Card.Text><strong>Description:</strong>{truncateText(freelance.description, 40)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}




FindFreelances.propTypes = {
  className: PropTypes.string.isRequired,
};
export default styled(FindFreelances)`
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
  Link{
    color: #FFFFFF;
  }

  Button{
    
    margin-top: 0px;
    margin-right: 5px;
  }
`;
