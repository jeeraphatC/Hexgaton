import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";
import getCookies from "./hook/getCookies";
function History() {
  const [enterprises, setEnterprises] = useState([]);
  const [freelances, setFreelances] = useState([]);

  useEffect(() => {
    axios
      .get("https://smart-egg-production.up.railway.app/historys/enterprise")
      .then((response) => {
        setEnterprises(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get("https://smart-egg-production.up.railway.app/historys/freelance")
      .then((response) => {
        setFreelances(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array [] means this effect runs once, similar to componentDidMount.

  return (
    <div>
      <Container style={{ marginTop: 50 }}>
        <h1
          style={{
            margin: "100px 20px 20px 20px",
            color: "#0196FC",
            fontSize: "50px",
          }}
        >
          
            Employment history
        </h1>
        <Row>
        {freelances.map((freelance) =>
    getCookies("id") == freelance.freelance.account.accountid  ? (
      <Card className="card-history" key={freelance.id}>
        <Card.Body>
          <Card.Title><strong>Name: </strong> {freelance.freelance.name}</Card.Title>
          <Card.Title><strong>Price: </strong> {freelance.freelance.price}</Card.Title>
          <Card.Title><strong>Type: </strong> {freelance.freelance.type}</Card.Title>
          <Card.Title><strong>Subtype: </strong> {freelance.freelance.subtype}</Card.Title>
          <Card.Title><strong>CompanyName: </strong> {freelance.freelance.companyName}</Card.Title>
          <Card.Title><strong>Description: </strong> {freelance.freelance.description}</Card.Title>
          <Card.Title><strong>Time: </strong> {freelance.freelance.time}</Card.Title>
        </Card.Body>
      </Card>
    ) : null
  )}         
    
        {enterprises.map((enterprises) =>
    enterprises.account != null  &&  getCookies("id") == enterprises.account.accountid  ?(
      <Card className="card-history" key={enterprises.id}>
        <Card.Body>
          <Card.Title><strong>Name: </strong> {enterprises.enterprise.name}</Card.Title>
          <Card.Title><strong>Price: </strong> {enterprises.enterprise.price}</Card.Title>
          <Card.Title><strong>Time: </strong> {enterprises.enterprise.time}</Card.Title>
          <Card.Title><strong>Description: </strong> {enterprises.enterprise.description}</Card.Title>
          <Card.Title><strong>Type: </strong> {enterprises.enterprise.type}</Card.Title>
          <Card.Title><strong>Subtype: </strong> {enterprises.enterprise.subtype}</Card.Title>
        </Card.Body>
      </Card>
    ) : null
  )}         
        </Row>
      </Container>
      <Container style={{ marginTop: 50 }}>
        <h1
          style={{
            margin: "100px 20px 20px 20px",
            color: "#0196FC",
            fontSize: "50px",
          }}
        >
          
            Freelance history
        </h1>
        <Row>
        {freelances.map((freelance) =>
    getCookies("id") == freelance.account.accountid  ? (
      <Card className="card-history" key={freelance.id}>
        <Card.Body>
          <Card.Title><strong>Name: </strong> {freelance.freelance.name}</Card.Title>
          <Card.Title><strong>Price: </strong> {freelance.freelance.price}</Card.Title>
          <Card.Title><strong>Type: </strong> {freelance.freelance.type}</Card.Title>
          <Card.Title><strong>Subtype: </strong> {freelance.freelance.subtype}</Card.Title>
          <Card.Title><strong>CompanyName: </strong> {freelance.freelance.companyName}</Card.Title>
          <Card.Title><strong>Description: </strong> {freelance.freelance.description}</Card.Title>
          <Card.Title><strong>Time: </strong> {freelance.freelance.time}</Card.Title>
        </Card.Body>
      </Card>
    ) : null
  )}         
    
        {enterprises.map((enterprises) =>
    enterprises.account != null  &&  getCookies("id") == enterprises.enterprise.account.accountid  ?(
      <Card className="card-history" key={enterprises.id}>
        <Card.Body>
          <Card.Title><strong>Name: </strong> {enterprises.enterprise.name}</Card.Title>
          <Card.Title><strong>Price: </strong> {enterprises.enterprise.price}</Card.Title>
          <Card.Title><strong>Time: </strong> {enterprises.enterprise.time}</Card.Title>
          <Card.Title><strong>Description: </strong> {enterprises.enterprise.description}</Card.Title>
          <Card.Title><strong>Type: </strong> {enterprises.enterprise.type}</Card.Title>
          <Card.Title><strong>Subtype: </strong> {enterprises.enterprise.subtype}</Card.Title>
        </Card.Body>
      </Card>
    ) : null
  )}         
        </Row>
      </Container>
    </div>
  );
}

export default styled(History)`
  @media (max-width: 600px) {
    .card {
      width: 200px;
    }
  }
  .editbtn {
    padding: 20px;
  }
`;
