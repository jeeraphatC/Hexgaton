import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import getCookies from '../hook/getCookies';

const Develop = ({ className }) => {
 

  const [fetchData, setFetchData] = useState('enterprises'); // Default to enterprises
  
  const [freelance, setFreelance] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [enterprises, setEnterprises] = useState([]);
  const cookieValue = getCookies("id");

  const handleClearSelected = () => {
    setSelectedItems([]);
  };
  const toggleFetchData = () => {
    setFetchData(fetchData === 'enterprises' ? 'freelance' : 'enterprises');
  };
  const location = useLocation();
  const type = location.state.type;
  const subtype = location.state.type2;
  console.log(type);
  console.log(subtype);
  const [freelancerImages, setFreelancerImages] = useState({});
  const [enterpriseImages, setEnterprisesimage] = useState({});
  console.log(fetchData)
  let pathfreelance;
  let pathenterprise;
  if (subtype != null) {
    pathfreelance = `http://localhost:8082/freelances/type/${type}/${subtype}`;
    pathenterprise = `http://localhost:8090/enterprises/type/${type}/${subtype}`
  } else {
    pathfreelance = `http://localhost:8082/freelances/type/${type}`;
    pathenterprise = `http://localhost:8090/enterprises/type/${type}`;
  }



  useEffect(() => {
    if (fetchData === 'enterprises') {

      axios.get(pathenterprise)
        .then(response => {
          setEnterprises(response.data);
          const enterprise = response.data;
        })

        .catch(error => {
          console.error('Error fetching enterprises:', error);
        });
    } else if (fetchData === 'freelance') {

      axios.get(pathfreelance)
        .then(response => {
          setFreelance(response.data);
          const freelancers = response.data;
          const fetchAllImages = async (freelancers) => {
            const imagePromises = freelancers.map((freelancer) =>
              fetchImageByImagelocation(freelancer.id)
            );

            try {
              const images = await Promise.all(imagePromises);
              const imageMap = {};
              images.forEach((image, index) => {
                imageMap[freelancers[index].id] = image;
              });
              setFreelancerImages(imageMap);
            } catch (error) {
              console.error('Error fetching images:', error);
            }
          };

          const fetchImageByImagelocation = (imagelocation) => {
            return axios.get(`http://localhost:2023/getByNameAndImagelocation/${fetchData}/${imagelocation}`, { responseType: 'arraybuffer' })
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
          if (freelancers.length > 0) {
            // Fetch images for freelancers
            fetchAllImages(freelancers);
          }
        })
        .catch(error => {
          console.error('Error fetching freelancers:', error);
        });


    }
  }, [fetchData,type,subtype,pathenterprise,pathfreelance]);
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
    return axios.get(`http://localhost:2023/getByNameAndImagelocation/${fetchData}/${imagelocation}`, { responseType: 'arraybuffer' })
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
          <br />
          <Row>
            {fetchData === 'enterprises' && (
              enterprises.map((enterprise, index) => (
                <Col md={4} key={index}>
                  <Card
                    style={{
                      padding: 20,
                      width: 400,
                      marginBottom: 20,

                    }}
                    onClick={() => handleCardClick(enterprise)}
                  >
                    <Card.Body>
                      <Card.Img variant="top" style={{ width: 300, height: 200 }} src={enterpriseImages[enterprise.id]} />
                      <br />
                      <Card.Title><strong>Name : </strong>{enterprise.name}</Card.Title>
                      <Card.Text><strong>Price : </strong>{enterprise.price}</Card.Text>
                      <Card.Text><strong>Time : </strong>{enterprise.time}</Card.Text>
                      <Card.Text><strong>Description :</strong>{enterprise.description}</Card.Text>
                      <Card.Text><strong>Type :</strong>{enterprise.type}</Card.Text>
                      <Link to={`/enterprises/${enterprise.id}`}>
                        <p>Details</p>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
            {fetchData === 'freelance' && (
              freelance.map((freelancer, index) => (
                <Col md={4} key={index}>
                  <Card
                    style={{
                      padding: 20,
                      width: 400,
                      marginBottom: 20,
                      border: selectedItems.includes(freelancer) ? '2px solid green' : 'none'
                    }}
                    onClick={() => handleCardClick(freelancer)}
                  >
                    <Card.Body>
                      <Card.Img variant="top" style={{ width: 300, height: 200 }} src={freelancerImages[freelancer.id]} />
                      <br />
                      <Card.Title><strong>Name : </strong>{freelancer.name}</Card.Title>
                      <Card.Text><strong>Price : </strong>{freelancer.price}</Card.Text>
                      <Card.Text><strong>Time :</strong>{freelancer.time}</Card.Text>
                      <Card.Text><strong>Description :</strong>{freelancer.description}</Card.Text>
                      <Card.Text><strong>Type :</strong>{freelancer.type}</Card.Text>
                      <Link to={`/Freelance/${freelancer.id}`}>
                        <p>Details</p>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
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
    </div>
  );
};

Develop.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Develop)`
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
 width: 100%;
  margin-top: 50px;
  background-color: azure;

  .btn-add-first   {
    float : right ;
    background-color : #0196FC;
    border: 2px solid #0196FC;
    
  }
.btn-add-sec{
  color: white;
}
  .btn-add-first:hover 
 {
 
    float : right ;
    background-color : #0071BE;
    border: 2px solid #0071BE;
  }
  
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
