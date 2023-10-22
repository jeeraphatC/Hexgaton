
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
const Develop = ({ className }) => {
  const [enterprises, setEnterprises] = useState([]);

  useEffect(() => {
    // Make an API call when the component mounts
    axios.get('http://localhost:8090/enterprises/type/develop')
      .then(response => {
        setEnterprises(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className={className}>
      <div >
        <Container style={{ padding: 20, marginTop: 20 }}>
          <br />
          <h3 style={{ textAlign: 'center' }}>DO you need Develop?</h3>
          <br />
          <Row>
         
          {enterprises.map((enterprise, index) => (
              <Col md={4} key={index}>
                <Card style={{ padding: 20, width: 400 }}>
                  <Card.Body>
                    <Card.Img variant="top" src={enterprise.image} />
                    <br />
                    <Card.Title>{enterprise.name}</Card.Title>
                    <Card.Text>{enterprise.price}</Card.Text>
                    <Card.Text>{enterprise.time}</Card.Text>
                    <Card.Text>{enterprise.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};



Develop.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Develop)`
width: 100%;
  margin-top: 50px;
  background-color: azure;
`;