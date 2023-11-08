import React, { Component  } from 'react';
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
    axios.get('https://apathetic-laborer-production.up.railway.app/status')
      .then(response => {
        this.setState({ status: response.data });
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  }

  FinishEnterprise = (id) => {
    // Show a confirmation dialog
    const confirmFinish = window.confirm('Are you sure you want to finish this item?');
  
    if (confirmFinish) {
      // User confirmed, proceed with the action
  
      // สร้างอ็อบเจ็กต์ที่จะส่งไปยัง API
      const updatedStatus = {
        status: "Finish"
      };
  
      // ส่งคำขอ PUT ไปยัง API เพื่ออัพเดตสถานะของ Enterprise
      axios.patch(`https://apathetic-laborer-production.up.railway.app/status/${id}`, updatedStatus)
        .then(response => {
          // หากอัพเดตสำเร็จ, คุณสามารถทำอะไรสักอย่าง (เช่น อัพเดตสถานะในสถานะของคอมโพนนี้)
          console.log('อัพเดตสถานะสำเร็จ');
          window.location.reload();
        })
        .catch(error => {
          console.error('เกิดข้อผิดพลาดในการอัพเดตสถานะ:', error);
        });
    }
  }
  


  render() {

    return (
      <div >
        <Container style={{ marginTop: 50 }}>
          <h1 style={{ margin: '100px 20px 20px 20px', color: '#0196FC' }}>My Work</h1>
          <p>งานที่รับทำ</p>
          <Row>
          {this.state.status.map(status => (
   status.enterprise !== null && getCookies("id") == status.enterprise.account.accountid && status.status === "process" ? (
    <Col md={4} key={status.id}>
      <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
        <Card.Body>
          <Card.Title><strong>Name:</strong> {status.enterprise.name}</Card.Title>
          <Card.Title><strong>Price:</strong> {status.enterprise.price}</Card.Title>
          <Card.Title><strong>Time:</strong> {status.enterprise.time}</Card.Title>
          <Card.Title><strong>Type:</strong> {status.enterprise.type}</Card.Title>
          <Card.Title><strong>Subtype:</strong> {status.enterprise.subtype}</Card.Title>
          <Card.Title><strong>CompanyName:</strong> {status.enterprise.companyName}</Card.Title>
          <Card.Title><strong>Description:</strong> {status.enterprise.description}</Card.Title>
          <Card.Title><strong>Enterprise:</strong> {status.account_name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  ) : (
    status.freelancer != null && getCookies("id") == status.account_id && status.status == "process" ? (
      <Col md={4} key={status.id}>
        <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
          <Card.Body>
          <Card.Title><strong>Name:</strong> {status.freelancer.name}</Card.Title>
          <Card.Title><strong>Price:</strong> {status.freelancer.price}</Card.Title>
          <Card.Title><strong>Time:</strong> {status.freelancer.time}</Card.Title>
          <Card.Title><strong>Type:</strong> {status.freelancer.type}</Card.Title>
          <Card.Title><strong>Subtype:</strong> {status.freelancer.subtype}</Card.Title>
          <Card.Title><strong>CompanyName:</strong> {status.freelancer.companyName}</Card.Title>
          <Card.Title><strong>Description:</strong> {status.freelancer.description}</Card.Title>
          <Card.Title><strong>Freelance:</strong> {status.account_name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ) : null
  )
))}
          </Row>
        </Container>

        <Container style={{ marginTop: 50 }}>
          <h1 style={{ margin: '100px 20px 20px 20px', color: '#0196FC' }}>In process</h1>
          <p>งานที่จ้าง</p>
          <Row>
          {this.state.status.map(status => (
  status.freelancer != null && getCookies("id") == status.freelancer.account.accountid && status.status == "process" ? (
    <Col md={4} key={status.id}>
      <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
        <Card.Body>
          <Card.Title><strong>Name:</strong> {status.freelancer.name}</Card.Title>
          <Card.Title><strong>Price:</strong> {status.freelancer.price}</Card.Title>
          <Card.Title><strong>Time:</strong> {status.freelancer.time}</Card.Title>
          <Card.Title><strong>Type:</strong> {status.freelancer.type}</Card.Title>
          <Card.Title><strong>Subtype:</strong> {status.freelancer.subtype}</Card.Title>
          <Card.Title><strong>CompanyName:</strong> {status.freelancer.companyName}</Card.Title>
          <Card.Title><strong>Description:</strong> {status.freelancer.description}</Card.Title>
          <Card.Title><strong>Freelance:</strong> {status.account_name}</Card.Title>
          <Button onClick={() => this.FinishEnterprise(status.id)} variant="danger">Finish</Button>
        </Card.Body>
      </Card>
    </Col>
  ) : (
    status.enterprise != null && getCookies("id") == status.account_id && status.status == "process" ? (
      <Col md={4} key={status.id}>
        <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
          <Card.Body>
            <Card.Title><strong>Name:</strong> {status.enterprise.name}</Card.Title>
            <Card.Title><strong>Price:</strong> {status.enterprise.price}</Card.Title>
            <Card.Title><strong>Time:</strong> {status.enterprise.time}</Card.Title>
            <Card.Title><strong>Type:</strong> {status.enterprise.type}</Card.Title>
            <Card.Title><strong>Subtype:</strong> {status.enterprise.subtype}</Card.Title>
            <Card.Title><strong>CompanyName:</strong> {status.enterprise.companyName}</Card.Title>
            <Card.Title><strong>Description:</strong> {status.enterprise.description}</Card.Title>
            <Card.Title><strong>Enterprise:</strong> {status.account_name}</Card.Title>
            <Button onClick={() => this.FinishEnterprise(status.id)} variant="danger">Finish</Button>
          </Card.Body>
        </Card>
      </Col>
    ) : null
  )
))}

          </Row>
        </Container>


<Container style={{ marginTop: 50 }}>
          <h1 style={{ margin: '100px 20px 20px 20px', color: '#0196FC' }}>Complete</h1>
          <p>งานที่เสร็จแล้ว</p>
          <Row>
          {this.state.status.map(status => (
  status.freelancer != null && getCookies("id") == status.freelancer.account.accountid && status.status == "Finish" ? (
    <Col md={4} key={status.id}>
      <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
        <Card.Body>
        <Card.Title><strong>Name:</strong> {status.freelancer.name}</Card.Title>
          <Card.Title><strong>Price:</strong> {status.freelancer.price}</Card.Title>
          <Card.Title><strong>Time:</strong> {status.freelancer.time}</Card.Title>
          <Card.Title><strong>Type:</strong> {status.freelancer.type}</Card.Title>
          <Card.Title><strong>Subtype:</strong> {status.freelancer.subtype}</Card.Title>
          <Card.Title><strong>CompanyName:</strong> {status.freelancer.companyName}</Card.Title>
          <Card.Title><strong>Description:</strong> {status.freelancer.description}</Card.Title>
          <Card.Title><strong>Freelance:</strong> {status.account_name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  ) : (
    status.enterprise != null && getCookies("id") == status.account_id && status.status == "Finish" ? (
      <Col md={4} key={status.id}>
        <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
          <Card.Body>
            <Card.Title><strong>Name:</strong> {status.enterprise.name}</Card.Title>
            <Card.Title><strong>Price:</strong> {status.enterprise.price}</Card.Title>
            <Card.Title><strong>Time:</strong> {status.enterprise.time}</Card.Title>
            <Card.Title><strong>Type:</strong> {status.enterprise.type}</Card.Title>
            <Card.Title><strong>Subtype:</strong> {status.enterprise.subtype}</Card.Title>
            <Card.Title><strong>CompanyName:</strong> {status.enterprise.companyName}</Card.Title>
            <Card.Title><strong>Description:</strong> {status.enterprise.description}</Card.Title>
            <Card.Title><strong>Enterprise:</strong> {status.account_name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ) : null
  )
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