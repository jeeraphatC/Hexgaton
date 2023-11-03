import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from "styled-components";
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
        <h1 style={{ margin: '100px 20px 20px 20px',color:'#0196FC'}}>Find jobs (ALL)</h1>
        <div className="develop" style={{ margin: '10px 20px 20px 20px',fontSize:'25px',width:'120%'}} >
            <Link to="/develop" style={{ margin: '20px',fontSize:'25px'}} state={{  type:  "develop" }}>Develop</Link>
            <Link to="/web" style={{ margin: '20px',fontSize:'25px'}} state={{  type:  "web" }}>Web</Link>
            <Link to="/mobile" style={{ margin: '20px',fontSize:'25px'}} state={{  type:  "mobile" }}>Mobile</Link>
            <Link to="/graphic" style={{ margin: '20px',fontSize:'25px'}} state={{  type:  "graphic" }}>Graphic</Link>
            <Link to="/logodesign" style={{ margin: '20px',fontSize:'25px'}} state={{  type:  "logodesign" }}>Logo design</Link>
            <Link to="/stickerdesign" style={{ margin: '20px',fontSize:'25px'}} state={{  type:  "stickerdesign" }}>Sticker design</Link>
            <Link to="/characterdesign" style={{ margin: '20px',fontSize:'25px'}} state={{  type:  "characterdesign" }}>Character design</Link>
            <Link to="/drawcartoon" style={{ margin: '20px',fontSize:'25px'}} state={{  type:  "drawcartoon" }}>Draw</Link>

            <Link to="/3dmodel" style={{ margin: '20px',fontSize:'25px'}} state={{  type:  "3dmodel" }}>3D model</Link>

            <Link to="/banner" style={{ margin: '20px',fontSize:'25px'}} state={{  type:  "banner" }}>banner</Link>

            <Link to="/music" style={{ margin: '20px',fontSize:'25px'}} state={{  type:  "music" }}>music</Link>

            <Link to="/beat" style={{ margin: '20px',fontSize:'25px'}} state={{  type:  "beat" }}>beat</Link>
          </div>
         
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