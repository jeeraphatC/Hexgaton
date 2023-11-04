import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from "styled-components";
import search4 from "../pic/search4.png";
import PropTypes from 'prop-types';
function FindJob({ className }) {

  const [selectedItems, setSelectedItems] = useState([]);
  const [enterprises, setEnterprises] = useState([]);
  const [enterpriseImages, setEnterprisesimage] = useState({});
  const location = useLocation();
  const type = location.state.type;
  const type2 = location.state.type2;
  const handleClearSelected = () => {
    setSelectedItems([]);
  };
  let path;
  if (type2 == null) {
    path = `http://localhost:8090/enterprises/type/${type}`
  }
  else {
    path = `http://localhost:8090/enterprises/type/${type}/${type2}`
  }

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }


  function develop() {
    if (type === 'develop') {
      return (
        <div className={className} style={{
          marginTop: 0
        }}>
          <Col md={6} >
            <Link to="/findjob" state={{ type: "develop" }}>
              <Button style={{ marginBottom: 10 }}>Developer</Button>
            </Link>
            <Link to="/findjob" state={{ type: "develop", type2: "web" }}>
              <Button style={{ marginBottom: 10 }}>Web</Button>
            </Link>

            <Link to="/findjob" state={{ type: "develop", type2: "mobile" }}>
              <Button style={{ marginBottom: 10 }}>Mobile</Button>
            </Link>

            <Link to="/findjob" state={{ type: "develop", type2: "desktop" }}>
              <Button style={{ marginBottom: 10 }}>Desktop</Button>
            </Link>
          </Col>
        </div>
      );
    }
    else if (type === 'graphic') {
      return (
        <div style={{
          marginTop: 0
        }}>
          <Col md={10}>
            <Link to="/findjob" state={{ type: "graphic" }}>
              <Button style={{ marginBottom: 10 }}>Graphic</Button>
            </Link>
            <Link to="/findjob" state={{ type: "graphic", type2: "logos" }}>
              <Button style={{ marginBottom: 10 }}>Logo Design</Button>
            </Link>
            <Link to="/findjob" state={{ type: "graphic", type2: "sticker" }}> <Button style={{ marginBottom: 10 }}>Sticker Design</Button></Link>
            <Link to="/findjob" state={{ type: "graphic", type2: "character" }}> <Button style={{ marginBottom: 10 }}>Character Design</Button></Link>
            <Link to="/findjob" state={{ type: "graphic", type2: "draw-cartoon" }}> <Button style={{ marginBottom: 10 }}>Draw cartoons</Button></Link>
            <Link to="/findjob" state={{ type: "graphic", type2: "3d-models" }}> <Button style={{ marginBottom: 10 }}>3D Models</Button></Link>
            <Link to="/findjob" state={{ type: "graphic", type2: "banner" }}> <Button style={{ marginBottom: 10 }}>Banner advertising design</Button></Link>
          </Col>
        </div>
      );
    }
    else if (type === 'music') {
      return (
        <Col md={4} >
          <Link to="/findjob" state={{ type: "music" }}>
            <Button style={{ marginBottom: 10 }}>Music</Button>
          </Link>
          <Link to="/findjob" state={{ type: "music", type2: "beat" }}>
            <Button style={{ marginBottom: 10 }}>beat</Button>
          </Link>
        </Col>
      )
    }
    return null;
  }

  useEffect(() => {
    axios.get(`http://localhost:8090/enterprises/type/${type}`)
      .then(response => {
        setEnterprises(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [type]);


  const fetchAllImages = async (enterprises) => {
    const imagePromises = enterprises.map((enterprise) =>
      fetchImageByImagelocation(enterprise.id)
    );

    try {
      const images = await Promise.all(imagePromises);
      const imageMap = {};
      images.forEach((image, index) => {
        imageMap[enterprises[index].id] = image;
      });
      setEnterprisesimage(imageMap);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const fetchImageByImagelocation = (imagelocation) => {
    return axios.get(`http://localhost:2023/getByNameAndImagelocation/enterprises/${imagelocation}`, { responseType: 'arraybuffer' })
      .then(imageResponse => {
        const base64 = btoa(new Uint8Array(imageResponse.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        const imageSrc = `data:image/jpeg;base64,${base64}`;
        return imageSrc;
      })
      .catch(error => {
        console.error('Error fetching image:', error);
        return null;
      });
  };
  if (enterprises.length > 0) {
    fetchAllImages(enterprises);
  }
  const handleCardClick = (item) => {
    setSelectedItems(prevSelectedItems => {
      const itemIndex = prevSelectedItems.findIndex(selectedItem => selectedItem.id === item.id);

      if (itemIndex === -1 && prevSelectedItems.length < 2) {
        return [...prevSelectedItems, item];
      } else if (itemIndex !== -1) {
        const updatedItems = [...prevSelectedItems];
        updatedItems.splice(itemIndex, 1);
        return updatedItems;
      } else {
        return prevSelectedItems;
      }
    });
  };
  const handleCompareClick = () => {
    const selectedIds = selectedItems.map(item => item.id);
    const url = `/compare?ids=${selectedIds.join(',')}`;
    window.location.href = url; // Manually navigate to the URL
  };
  const handleClearSelected2 = () => {
    setSelectedItems([]);
  };
  return (
    <div className={className}>
      <Container style={{ marginTop: 50 }}>
        <h1 style={{ margin: '100px 20px 20px 20px', color: '#0196FC' }}>Find jobs (ALL)</h1>
        <Row style={{ marginBottom: 50 }}>
          <Col md={10}>
            {develop()}
            <Button variant="success" className='btn-add-first'>
              <Link to='/FreelanceForm' className='btn-add-sec'>For Freelance ADD Job</Link>
            </Button>
          </Col>
        </Row>
        <Row>
          {enterprises.map(enterprise => (
            <Col md={4} key={enterprise.id}>
              <Card
                    style={{
                      padding: 20,
                      width: 400,
                      marginBottom: 20,

                    }}
                    onClick={() => handleCardClick(enterprise)}
                  >
                <Card.Body>
                  <Card.Img className="picture" variant="top" style={{ width: 300, height: 200 }} src={enterpriseImages[enterprise.id]} />
                  <br />
                  <br />
                  <Link to={`/enterprises/${enterprise.id}`}>
                    <img src={search4} alt="View Details" className='jobdetail' style={{ width: '50px', height: '50px', margin: '105px 0px 0px 300px', position: 'absolute' }} />
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
        <div className="selected-items">
            <h4>Selected job to compare</h4>
            {selectedItems.map((selectedItem, index) => (
              <div key={index}>
                <p>Job {index + 1} :{selectedItem.name}</p>
              </div>
            ))}
            {selectedItems.length > 0 && (
              <button onClick={handleClearSelected2}>Clear Selected Items</button>
            )}
            {selectedItems.length === 2 && (
              <button onClick={handleCompareClick}>Compare</button>
            )}


          </div>
      </Container>
    </div>
  );
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

FindJob.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(FindJob)`
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
  top:70px; /* Adjust the value as needed */
  right: 20px; /* Adjust the value as needed */
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 240px;
  text-align: center;
}
.jobdetail{
  padding: 5px;
}
.picture{
  
  border: 2px solid black;
}
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
  top:70px; 
  right: 20px; 
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 240px;
  text-align: center;
}
 width: 100%;
  margin-top: 50px;
  background-color: azure;

  .btn-add-first   {
    float : right ;
    background-color : #0196FC;
    border: 2px solid #0196FC;
    
  }
  .btn-add-first:active 
 {
 
    float : right ;
    border: 2px solid #0071BE;
  }
  Button{
    
    margin-top: 0px;
    margin-right: 5px;
  }
`;
