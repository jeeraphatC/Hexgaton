import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Card,Button } from 'react-bootstrap';
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

        <h1 style={{ textAlign: 'center' }}>รายชื่อ Freelances</h1>
        <Row>

          {this.state.freelances.map(freelance => (
            <Col md={4} key={freelance.id}>
              <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
                <Card.Body>
                  <Card.Title><strong>Name:</strong> {freelance.name}</Card.Title>
                  <Card.Text><strong>Price:</strong> {freelance.price}</Card.Text>
                  <Card.Text><strong>Time:</strong> {freelance.time}</Card.Text>
                  <Card.Text><strong>Description:</strong> {freelance.description}</Card.Text>
                  <Button><Link to={`/editfreelance/${freelance.id}`} style={{color : 'white'}}>Edit</Link></Button>
                  <Button><Link to={`/view/${freelance.id}`} style={{color : 'white'}}>View Details</Link></Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container >
    );
  }
}

export default FindFreelance;
