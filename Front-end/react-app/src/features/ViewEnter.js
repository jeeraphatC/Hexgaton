import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { Container, Row, Col, Card } from 'react-bootstrap';
function ViewEnter() {
  const { id } = useParams();
  const [enterprise, setenterprise] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8090/enterprises/${id}`)
      .then(response => {
        setenterprise(response.data);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  }, [id]);

  if (!enterprise) {
    return <div>Loading...</div>;
  }

  return (
    <Container style={{ marginTop: 50 , width : 800 }}>
      <div>
        
            <Card>
              <Card.Body>
                <Card.Title>{enterprise.name}</Card.Title>
                <Card.Text><strong>Price:</strong> {enterprise.price}</Card.Text>
                <Card.Text><strong>Time:</strong> {enterprise.time}</Card.Text>
                <Card.Text><strong>Description:</strong> {enterprise.description}</Card.Text>
              </Card.Body>
            </Card>
         
      </div>
    </Container>
  );
}

export default styled(ViewEnter)`



`;