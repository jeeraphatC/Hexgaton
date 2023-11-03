import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from "styled-components";
import axios from 'axios';
import search4 from "../pic/search4.png";
import pen2 from "../pic/pen2.png";
class FindJob extends Component {
  state = {
    enterprises: [],
  };

  componentDidMount() {
    // เรียก API ที่มีข้อมูล Enterprises ที่คุณต้องการดึง
    axios.get('http://localhost:8090/enterprises')
      .then(response => {
        setEnterprises(response.data);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  }

  
  render() {
    return (
      <div>
        <Container style={{ marginTop: 50 }}>
        <h1 style={{ margin: '100px 20px 20px 20px',color:'#0196FC'}}>Find jobs (ALL)</h1>

          <Row>


            
              {this.state.enterprises.map(enterprise => (
                <Col md={4} key={enterprise.id}>
                  <Card style={{width : 400 , padding : 20 , marginBottom : 20}}>
                    <Card.Body>
      
                      <Link to={`/enterprises/${enterprise.id}`}>
                        <img src={search4} alt="View Details" className='jobdetail' style={{ width: '50px', height: '50px', margin: '105px 0px 0px 300px', position:'absolute' }} />
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
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

export default styled(FindJob)`

`;
