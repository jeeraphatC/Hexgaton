import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from "styled-components";
import getCookies from './hook/getCookies';

class Status extends Component {
  state = {
    status: [],
  };

  componentDidMount() {
    // เรียก API ที่มีข้อมูล Enterprises ที่คุณต้องการดึง
    axios.get('http://localhost:8082/status')
      .then(response => {
        this.setState({ status: response.data });
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  }

  FinishEnterprise = (id) => {
    // สร้างอ็อบเจ็กต์ที่จะส่งไปยัง API
    const updatedStatus = {
        status: "Finish"
    };
  
    // ส่งคำขอ PUT ไปยัง API เพื่ออัพเดตสถานะของ Enterprise
    axios.patch(`http://localhost:8082/status/${id}`, updatedStatus)
      .then(response => {
        // หากอัพเดตสำเร็จ, คุณสามารถทำอะไรสักอย่าง (เช่น อัพเดตสถานะในสถานะของคอมโพนนี้)
        console.log('อัพเดตสถานะสำเร็จ');
        window.location.reload();
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการอัพเดตสถานะ:', error);
      });
   
  }
  


  render() {

    return (
      <div >
        <Container style={{ marginTop: 50 }}>
          <h1 style={{ margin: '100px 20px 20px 20px', color: '#0196FC' }}>Work status</h1>
          <Row>
            {this.state.status.map(status => (
              <Col md={4} key={status.id}>
                 {getCookies("id") == status.enterprise.account.accountid ? (
                  <Card style={{ width: 400, padding: 20, marginBottom: 20 }} >
                    <Card.Body>
                      <Card.Title><strong>Name:</strong> {status.enterprise.name}</Card.Title>
                      <Card.Title><strong>Price:</strong> {status.enterprise.price}</Card.Title>
                      <Card.Title><strong>Time:</strong> {status.enterprise.time}</Card.Title>
                      <Card.Title><strong>Workprocess:</strong> {status.enterprise.workprocess}</Card.Title>
                      <Card.Title><strong>Type:</strong> {status.enterprise.type}</Card.Title>
                      <Card.Title><strong>Subtype:</strong> {status.enterprise.subtype}</Card.Title>
                      <Card.Title><strong>Location:</strong> {status.enterprise.location}</Card.Title>
                      <Card.Title><strong>Description:</strong> {status.enterprise.description}</Card.Title>
                      <Card.Title><strong>Freelance:</strong> {status.freelancer}</Card.Title>
                      <Card.Title><strong>Status:</strong> {status.status}</Card.Title>
                      <Button onClick={() => this.FinishEnterprise(status.id)} variant="danger">Finish</Button>
                    </Card.Body>
                  </Card>
                 ) : null}
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
export default styled(Status)`

  
`;