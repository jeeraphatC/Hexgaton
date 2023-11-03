import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from "styled-components";
import search4 from "../pic/search4.png";
import pen2 from "../pic/pen2.png";
class FindFreelance extends Component {
  state = {
    freelances: [],
  };

  componentDidMount() {
    // เรียก API ที่มีข้อมูล Freelances ที่คุณต้องการดึง
    axios.get('http://localhost:8082/freelances')
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

      <h1 style={{ margin: '100px 20px 20px 20px',color:'#0196FC'}}>Find Freelance (ALL)</h1>
        <Row>

          {this.state.freelances.map(freelance => (
            <Col md={4} key={freelance.id}>
              <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
                <Card.Body>
                  <Link to={`/freelances/${freelance.id}`}>
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
