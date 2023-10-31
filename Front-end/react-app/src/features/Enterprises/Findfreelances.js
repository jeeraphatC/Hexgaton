import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Card,Button } from 'react-bootstrap';
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
        this.setState({ freelances: response.data });
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  }

  render() {
    return (
      <Container style={{ marginTop: 50 }}>

      <h1 style={{ margin: '100px 20px 20px 20px',color:'#0196FC'}}>Find Freelance (ALL)</h1>
        <Row>

          {this.state.freelances.map(freelance => (
            <Col md={4} key={freelance.id}>
              <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
                <Card.Body>
                <a href={`/editfreelance/${freelance.id}`}>
                        <img src={pen2} alt="View Details" className='jobdetail' style={{ width: '40px', height: '40px', margin: '115px 0px 0px 255px', position:'absolute' }} />
                      </a>
                      <a href={`/Freelance/${freelance.id}`}>
                        <img src={search4} alt="View Details" className='jobdetail' style={{ width: '50px', height: '50px', margin: '105px 0px 0px 300px', position:'absolute' }} />
                      </a>
                  <Card.Title><strong>Name:</strong> {freelance.name}</Card.Title>
                  <Card.Text><strong>Price:</strong> {freelance.price}</Card.Text>
                  <Card.Text><strong>Time:</strong> {freelance.time}</Card.Text>
                  <Card.Text><strong>Description:</strong>{truncateText(freelance.description, 40)}</Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>  
          ))}
        </Row>

      </Container >
    );
  }
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

export default FindFreelance;
