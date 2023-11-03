import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import axios from 'axios';
import search4 from "../pic/search4.png";
import plus from "../pic/plus.png";

const FindJob = ({ className }) => {
  const [enterprises, setEnterprises] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/enterprises')
      .then(response => {
        setEnterprises(response.data);
      })
      .catch(error => {
        console.error('Error fetching enterprises:', error);
      });
  }, []);

  const handleCardClick = (item) => {
    setSelectedItems(prevSelectedItems => {
      const itemIndex = prevSelectedItems.findIndex(selectedItem => selectedItem.id === item.id);

      if (itemIndex === -1) {
        return [...prevSelectedItems, item];
      } else {
        const updatedItems = [...prevSelectedItems];
        updatedItems.splice(itemIndex, 1);
        return updatedItems;
      }
    });
  };

  const handleCompareClick = () => {
    const selectedIds = selectedItems.map(item => item.id);
    const url = `/compare?ids=${selectedIds.join(',')}`;
    window.location.href = url;
  };

  return (
    <div className={className}>
      <div>
      <Link to="/postjob">
  <img
    src={plus}
    alt="Post a Job"
    style={{
      margin: '20px',
      width: '50px',
      position: 'absolute',
      top: '200px',
      left: '200px',

    }}
  />
</Link>
      <Container style={{ marginTop: 50 }}>
        <h1 style={{ margin: '100px 20px 20px 20px',color:'#0196FC'}}>Find jobs (ALL)</h1>
        <div className="develop" style={{ margin: '10px 20px 20px 20px',fontSize:'22px',width:'120%'}} >
            <Link to="/develop" style={{ margin: '20px'}} state={{  type:  "develop" }}>Develop</Link>
            <Link to="/web" style={{ margin: '20px'}} state={{  type:  "web" }}>Web</Link>
            <Link to="/mobile" style={{ margin: '20px'}} state={{  type:  "mobile" }}>Mobile</Link>
            <Link to="/graphic" style={{ margin: '20px'}} state={{  type:  "graphic" }}>Graphic</Link>
            <Link to="/logodesign" style={{ margin: '20px'}} state={{  type:  "logodesign" }}>Logo design</Link>
            <Link to="/stickerdesign" style={{ margin: '20px'}} state={{  type:  "stickerdesign" }}>Sticker design</Link>
            <Link to="/characterdesign" style={{ margin: '20px'}} state={{  type:  "characterdesign" }}>Character design</Link>
            <Link to="/drawcartoon" style={{ margin: '20px'}} state={{  type:  "drawcartoon" }}>Draw</Link>
            <Link to="/3dmodel" style={{ margin: '20px'}} state={{  type:  "3dmodel" }}>3D model</Link>
            <Link to="/banner" style={{ margin: '20px'}} state={{  type:  "banner" }}>banner</Link>
            <Link to="/music" style={{ margin: '20px'}} state={{  type:  "music" }}>music</Link>
            <Link to="/beat" style={{ margin: '20px'}} state={{  type:  "beat" }}>beat</Link>
          </div>
          

          <Row>
            {enterprises.map(enterprise => (
              <Col md={4} key={enterprise.id}>
                <Card
                  style={{
                    width: 400,
                    padding: 20,
                    marginBottom: 20,
                    border: selectedItems.includes(enterprise) ? '3px solid #0196FC' : 'none'
                  }}
                  onClick={() => handleCardClick(enterprise)}
                >
                  <Card.Body>
                    <Link to={`/enterprises/${enterprise.id}`}>
                      <img src={search4} alt="View Details" className='jobdetail' style={{ width: '50px', height: '50px', margin: '105px 0px 0px 300px', position:'absolute' }} />
                    </Link>
                    <Card.Title><strong>Name : </strong> {enterprise.name}</Card.Title>
                    <Card.Text><strong>Price :</strong> {enterprise.price}</Card.Text>
                    <Card.Text><strong>Time : </strong> {enterprise.time}</Card.Text>
                    <Card.Text><strong>Type : </strong>{truncateText(enterprise.type)}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="selected-items">
            <h4>Selected job to compare</h4>
            {selectedItems.map((selectedItem, index) => (
              <div key={index}>
                <p>Job {index + 1} :{selectedItem.name}</p>
              </div>
            ))}
            {selectedItems.length > 0 && (
              <button onClick={() => setSelectedItems([])}>Clear Selected Items</button>
            )}
            {selectedItems.length === 2 && (
              <button onClick={handleCompareClick}>Compare</button>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

export default styled(FindJob)`
  /* Your additional styles go here */
  .selected-items button {
    margin: 5px; 
    color: #FFFFFF;
    background-color : #0196FC;
    border: 0px;
    border-radius: 3px;
    padding: 5px;
  }

  .selected-items {
    position: fixed;
    top: 70px;
    right: 20px;
    background-color: white;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 240px;
    text-align: center;
  }
`;