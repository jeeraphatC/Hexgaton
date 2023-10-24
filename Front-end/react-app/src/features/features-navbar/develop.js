import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Develop = ({ className }) => {
  const [enterprises, setEnterprises] = useState([]);
  const [freelance, setFreelance] = useState([]);
  const [fetchData, setFetchData] = useState('enterprises'); // Default to enterprises

  const toggleFetchData = () => {
    setFetchData(fetchData === 'enterprises' ? 'freelance' : 'enterprises');
  };


  useEffect(() => {
    if (fetchData === 'enterprises') {
      axios.get('http://localhost:8090/enterprises/type/develop')
        .then(response => {
          setEnterprises(response.data);
        })
        .catch(error => {
          console.error('Error fetching enterprises:', error);
        });
    } else if (fetchData === 'freelance') {
      axios.get('http://localhost:8082/freelances/type/develop')
        .then(response => {
          setFreelance(response.data);
        })
        .catch(error => {
          console.error('Error fetching freelancers:', error);
        });
    }
  }, [fetchData]);

  return (
    <div className={className}>
      <div>
        <Container style={{ padding: 20, marginTop: 20 }}>
          <div className="switch">
            <Button variant="primary" onClick={toggleFetchData} className={fetchData === 'enterprises' ? "active" : ""}>
              <span className="toggle-text">{fetchData === 'enterprises' ? "Enterprise" : "Freelance"}</span>
            </Button>
          </div>
          <br />
          <h3 style={{ textAlign: 'center' }}>DO you need Develop?</h3>
          {fetchData === 'enterprises' && (
            <Button variant="success" className='btn-add-first'>
              <Link to='/Postjob' className='btn-add-sec'>ADD</Link>
            </Button>
          )}

          {fetchData === 'freelance' && (
            <Button variant="success" className='btn-add-first'>
              <Link to='/FreelanceForm' className='btn-add-sec'>ADD</Link>
            </Button>
          )}

          <br />
          <Row>
            {fetchData === 'enterprises' && (
              enterprises.map((enterprise, index) => (
                <Col md={4} key={index}>
                  <Card style={{ padding: 20, width: 400, marginBottom: 20 }}>
                    <Card.Body>
                      <Card.Img variant="top" src={enterprise.image} />
                      <br />
                      <Card.Title>{enterprise.name}</Card.Title>
                      <Card.Text>{enterprise.price}</Card.Text>
                      <Card.Text>{enterprise.time}</Card.Text>
                      <Card.Text>{enterprise.description}</Card.Text>
                      <Card.Text>{enterprise.type}</Card.Text>
                      <Button variant='success'>
                        <Link to={`/edit/${enterprise.id}`}>Edit</Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
            {fetchData === 'freelance' && (
              freelance.map((freelancer, index) => (
                <Col md={4} key={index}>
                  <Card style={{ padding: 20, width: 400, marginBottom: 20 }}>
                    <Card.Body>
                      <Card.Img variant="top" src={freelancer.image} />
                      <br />
                      <Card.Title>{freelancer.name}</Card.Title>
                      <Card.Text>{freelancer.price}</Card.Text>
                      <Card.Text>{freelancer.time}</Card.Text>
                      <Card.Text>{freelancer.description}</Card.Text>
                      <Card.Text>{freelancer.type}</Card.Text>
                      <Button variant='success'>
                        <Link to={`/edit/${freelancer.id}`}>Edit</Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}







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

  .switch {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 40px;
    background-color: #ccc;
    border-radius: 20px;
    overflow: hidden;
  }

  .switch Button {
    width: 50%;
    height: 100%;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: inherit;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }

  .switch Button.active {
    transform: translateX(100%);
  }

  .switch .toggle-text {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
  }

  .switch Button.active .toggle-text {
    transform: translateX(-100%);
  }
`;
