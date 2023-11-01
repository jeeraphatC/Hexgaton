import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from "styled-components";
import search4 from "../pic/search4.png";
import pen2 from "../pic/pen2.png";
import getCookies from '../hook/getCookies';
class Mywork extends Component {
  state = {
    enterprises: [],
  };

  componentDidMount() {
    // เรียก API ที่มีข้อมูล Enterprises ที่คุณต้องการดึง
    axios.get('http://localhost:8082/freelances')
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
        <h1 style={{ margin: '100px 20px 20px 20px',color:'#0196FC'}}>My Postfreelance</h1>
          <Row>
          {this.state.enterprises.map(freelances => (
  <Col md={4} key={freelances.id}>
    {getCookies("id") == freelances.account.accountid ? (
      <Card className="cardWithCSS">
        <Card.Body>
          <Link to={`/edit/${freelances.id}`}>
            <img src={pen2} alt="View Details" className='jobdetail' style={{ width: '40px', height: '40px', margin: '115px 0px 0px 255px', position: 'absolute' }} />
          </Link>
          <Link to={`/enterprises/${freelances.id}`}>
            <img src={search4} alt="View Details" className='jobdetail' style={{ width: '50px', height: '50px', margin: '105px 0px 0px 300px', position: 'absolute' }} />
          </Link>
          <Card.Title><strong>Name:</strong> {freelances.name}</Card.Title>
          <Card.Text><strong>Price:</strong> {freelances.price}</Card.Text>
          <Card.Text><strong>Time:</strong> {freelances.time}</Card.Text>
          <Card.Text><strong>Description:</strong> {truncateText(freelances.description, 40)}</Card.Text>
        </Card.Body>
      </Card>
    ) : ""}
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
export default styled(Mywork)`

  
`;