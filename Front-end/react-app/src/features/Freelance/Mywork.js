import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from "styled-components";
import search4 from "../pic/search4.png";
import pen2 from "../pic/pen2.png";
import getCookies from '../hook/getCookies';
class MyworkEnter extends Component {
  state = {
    enterprises: [],
    freelances: [],
  };
  deleteEnterprise2 = (id) => {
    axios.delete(`https://smart-egg-production.up.railway.app/freelances/id/${id}`)
      .then(response => {
        // Remove the deleted enterprise from the state
        this.setState(prevState => ({
          freelances: prevState.freelances.filter(freelance => freelance.id !== id)
        }));
      })
      .catch(error => {
        console.error('Error deleting enterprise:', error);
      });
  }

  componentDidMount() {
    // เรียก API ที่มีข้อมูล Enterprises ที่คุณต้องการดึง
    axios.get('https://smart-egg-production.up.railway.app/enterprises')
      .then(response => {
        this.setState({ enterprises: response.data });
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
      axios.get('https://smart-egg-production.up.railway.app/freelances')
      .then(response => {
        this.setState({ freelances: response.data });
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  }

  deleteEnterprise = (id) => {
    axios.delete(`https://smart-egg-production.up.railway.app/enterprises/id/${id}`)
      .then(response => {
        // Remove the deleted enterprise from the state
        this.setState(prevState => ({
          enterprises: prevState.enterprises.filter(enterprise => enterprise.id !== id)
        }));
      })
      .catch(error => {
        console.error('Error deleting enterprise:', error);
      });
  }


  render() {

    return (
      <div >
        <Container style={{ marginTop: 50 }}>
          <h1 style={{ margin: '100px 20px 20px 20px', color: '#0196FC' }}>My Post Enterpise</h1>
          <Row>
          {this.state.enterprises.map(enterprises => (
              getCookies("id") == enterprises.account.accountid && enterprises.shows != "no" ? (
              <Col md={4} key={enterprises.id}>
                  <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
                    <Card.Body>
                      <Link to={`/edit/${enterprises.id}`}>
                        <img src={pen2} alt="View Details" className='jobdetail' style={{ width: '40px', height: '40px', margin: '115px 0px 0px 255px', position: 'absolute' }} />
                      </Link>
                      <Link to={`/enterprises/${enterprises.id}`}>
                        <img src={search4} alt="View Details" className='jobdetail' style={{ width: '50px', height: '50px', margin: '105px 0px 0px 300px', position: 'absolute' }} />
                      </Link>
                      <Card.Title><strong>Name:</strong> {enterprises.name}</Card.Title>
                      <Card.Text><strong>Price:</strong> {enterprises.price}</Card.Text>
                      <Card.Text><strong>Time:</strong> {enterprises.time}</Card.Text>
                      <Card.Text><strong>Description:</strong> {truncateText(enterprises.description, 40)}</Card.Text>
                      <Button onClick={() => this.deleteEnterprise(enterprises.id)} variant="danger">Delete</Button>
                    </Card.Body>
                  </Card>
              </Col>
                 ) : ""
            ))}


          </Row>
        </Container>
        <Container style={{ marginTop: 50 }}>
          <h1 style={{ margin: '100px 20px 20px 20px', color: '#0196FC' }}>My Postfreelance</h1>
          <Row>
            {this.state.freelances.map(freelances => (
              getCookies("id") == freelances.account.accountid && freelances.shows != "no" ? (
              <Col md={4} key={freelances.id}>
                  <Card style={{ width: 400, padding: 20, marginBottom: 20 }}>
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
                      <Button onClick={() => this.deleteEnterprise2(freelances.id)} variant="danger">Delete</Button>
                    </Card.Body>
                  </Card>
              </Col>
                 ) : ""
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
export default styled(MyworkEnter)`

  
`;