
import PropTypes from 'prop-types';
import styled from 'styled-components';

import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
const Counter = ({ className }) => {
  return (
    <div className={className}>
      <div >
        <Container style={{ padding: 20, marginTop: 20 }}>
          <br />
          <h3 style={{ textAlign: 'center' }}>skfhkjdshfkjsdhkfhsdkhfkjdshfkjdshfkjhskfhskfhskhfdkjhfkjs</h3>
          <br />
          <Row>
          <Col md={4}>
              <Card style={{ padding: 20, width: 400}}>
                <Card.Body>
                  <Card.Img variant="top" src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D' ></Card.Img>
                  <br />
                  <Card.Title>Hello</Card.Title>
                  <Card.Text>OKAY HELOO</Card.Text>
                  <Card.Link href='www.google.com' target='_blank'>
                    <Button variant="warning">
                      Read
                    </Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ padding: 20, width: 400}}>
                <Card.Body>
                  <Card.Img variant="top" src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D' ></Card.Img>
                  <br />
                  <Card.Title>Hello</Card.Title>
                  <Card.Text>OKAY HELOO</Card.Text>
                  <Card.Link href='www.google.com' target='_blank'>
                    <Button variant="warning">
                      Read
                    </Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ padding: 20, width: 400}}>
                <Card.Body>
                  <Card.Img variant="top" src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D' ></Card.Img>
                  <br />
                  <Card.Title>Hello</Card.Title>
                  <Card.Text>OKAY HELOO</Card.Text>
                  <Card.Link href='www.google.com' target='_blank'>
                    <Button variant="warning">
                      Read
                    </Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};



Counter.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Counter)`
width: 100%;
  margin-top: 50px;
  background-color: azure;
`;