import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class FindJob extends Component {
  state = {
    enterprises: [],
  };

  componentDidMount() {
    // เรียก API ที่มีข้อมูล Enterprises ที่คุณต้องการดึง
    axios.get('http://localhost:8090/enterprises')
      .then(response => {
        this.setState({ enterprises: response.data });
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  }

  
  render() {
    return (
      <div>
        <Container style={{ marginTop: 50 }}>
          <h1 style={{ textAlign : 'center'}}>รายชื่อ Enterprises</h1>
          <Row>


            
              {this.state.enterprises.map(enterprise => (
                <Col md={4} key={enterprise.id}>
                  <Card style={{width : 400 , padding : 20 , marginBottom : 20}}>
                    <Card.Body>

                      <Card.Title><strong>Name:</strong> {enterprise.name}</Card.Title>
                      <Card.Text><strong>Price:</strong> {enterprise.price}</Card.Text>
                      <Card.Text><strong>Time:</strong> {enterprise.time}</Card.Text>
                      <Card.Text><strong>Description:</strong>{truncateText(enterprise.description, 40)}</Card.Text>
                      <Button ><Link to={`/edit/${enterprise.id}`} style={{ color : "white"}}>Edit</Link></Button> 
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
export default FindJob;
