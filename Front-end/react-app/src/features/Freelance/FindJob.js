import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from "styled-components";
import search4 from "../pic/search4.png";
import PropTypes from 'prop-types';
import big_logo from "../pic/big_logo.png";
import arrow from ".././pic/barrow.png";

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
    path = `https://smart-egg-production.up.railway.app/enterprises/type/${type}`
  }
  else {
    path = `https://smart-egg-production.up.railway.app/enterprises/type/${type}/${type2}`
  }

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  // if for fetch subdata
  function develop() {
    if (type === 'develop') {
      return (
        <div className={className} style={{
          marginTop: 0,backgroundColor: '#FFF'
        }}>
          <Col md={6} s>
            <Link to="/findjob" className="needajob" state={{ type: "develop" }}>
              <span style={{ marginBottom: 10 }}>Developer</span>
            </Link>
            <Link to="/findjob" className="needajob" state={{ type: "develop", type2: "web" }}>
              <span style={{ marginBottom: 10 }}>Web</span>
            </Link>

            <Link to="/findjob" className="needajob" state={{ type: "develop", type2: "mobile" }}>
              <span style={{ marginBottom: 10 }}>Mobile</span>
            </Link>

            <Link to="/findjob" className="needajob" state={{ type: "develop", type2: "desktop" }}>
              <span style={{ marginBottom: 10 }}>Desktop</span>
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
            <Link to="/findjob" className="needajob" state={{ type: "graphic" }}>
              <span style={{ marginBottom: 10 }}>Graphic</span>
            </Link>
            <Link to="/findjob" className="needajob" state={{ type: "graphic", type2: "logos" }}>
              <span style={{ marginBottom: 10 }}>Logo Design</span>
            </Link>
            <Link to="/findjob" className="needajob" state={{ type: "graphic", type2: "sticker" }}> <span style={{ marginBottom: 10 }}>Sticker Design</span></Link>
            <Link to="/findjob" className="needajob" state={{ type: "graphic", type2: "character" }}> <span style={{ marginBottom: 10 }}>Character Design</span></Link>
            <Link to="/findjob" className="needajob" state={{ type: "graphic", type2: "draw-cartoon" }}> <span style={{ marginBottom: 10 }}>Draw cartoons</span></Link>
            <Link to="/findjob" className="needajob" state={{ type: "graphic", type2: "3d-models" }}> <span style={{ marginBottom: 10 }}>3D Models</span></Link>
            <Link to="/findjob" className="needajob" state={{ type: "graphic", type2: "banner" }}> <span style={{ marginBottom: 10 }}>Banner advertising design</span></Link>
          </Col>
        </div>
      );
    }
    else if (type === 'music') {
      return (
        <div style={{
          marginTop: 0
        }}>
          <Col md={4} >
            <Link to="/findjob" className="needajob" state={{ type: "music" }}>
              <span style={{ marginBottom: 10 }}>Music</span>
            </Link>
            <Link to="/findjob" className="needajob" state={{ type: "music", type2: "beat" }}>
              <span style={{ marginBottom: 10 }}>beat</span>
            </Link>
          </Col>
        </div>
      )
    }
    return null;
  }

  //ตัวหนังสือ
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }
  //data and picture
  useEffect(() => {
    axios.get(path)
      .then(response => {
        setEnterprises(response.data);
        const enterprises = response.data;
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
          return axios.get(`https://domineering-hobbies-production.up.railway.app/getByNameAndImagelocation/enterprises/${imagelocation}`, { responseType: 'arraybuffer' })
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
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [enterpriseImages, type, type2]);

  //Compare
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
    <div className={className} style={{backgroundColor:'#FFF'}}>
      <Container style={{ marginTop: 10,backgroundColor:'#FFF'}}>
        <Link to="/" style={{ fontSize: '30px', marginTop: '30px', color: '#0071BE' }}>Home</Link>
        <img src={arrow} alt="" style={{ width: '30px', marginLeft: '10px', marginBottom: '10px' }} />
        <Link to="/optionfree" style={{ fontSize: '30px', marginTop: '30px', marginLeft: '10px', color: '#808080' }}>Freelance</Link>
        <img src={arrow} alt="" style={{ width: '30px', marginLeft: '10px', marginBottom: '10px' }} />
        <Link to="/findjob" state={{ type: type }} style={{ fontSize: '30px', marginTop: '30px', marginLeft: '10px', color: '#808080' }}>{type}</Link>

        <h1 style={{ margin: '30px 10px 20px 0px', color: '#0196FC' }}>Find jobs (ALL)</h1>
        <Row style={{ marginBottom: 20 }}>
          <Col md={10} style={{ paddingLeft: 0 }}>
            {develop()}
            {/* <Button variant="success" className='btn-add-first'>
              <Link to='/FreelanceForm' className='btn-add-sec'>For Freelance ADD Job</Link>
            </Button> */}
          </Col>
        </Row>
        <Row>
        {enterprises.map(enterprise => (
  enterprise.shows == null ? (
    <Col md={3} key={enterprise.id}>
      <Card
        style={{
          width: "18rem",
          margin: 20
        }}
        onClick={() => handleCardClick(enterprise)}
      >
        <Card.Img variant="top" style={{ width: 290, height: 180,border:'0px' }} src={enterpriseImages[enterprise.id]} />
        <Card.Body>
          <Card.Title style={{ fontSize: '30px',border:'0px' }} >{enterprise.name}</Card.Title>
          <Card.Subtitle style={{ fontSize: '15px',color:'#808080',border:'0px' }}>{truncateText(enterprise.description, 40)}</Card.Subtitle>
          <Card.Text style={{ fontSize: '15px',color:'#808080',border:'0px' }}><strong style={{ fontSize: '12px',color:'#808080' }}>Time : </strong> {enterprise.time} DAYS</Card.Text>
          <Card.Footer style={{ textAlign: "left",background:'#FFF',marginLeft:'-10px',fontSize: '20px',marginTop:'20px' }}>${enterprise.price}

           <Link to={`/enterprises/${enterprise.id}`}>
              <img src={search4} alt="View Details" className='jobdetail' style={{ width: '45px', height: '45px',marginLeft:'160px',position:'absolute' }} />
            </Link>

          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  ) : null
))}

        </Row>
        <div className="selected-items">
          <h4 className="selected-header">Selected job to compare</h4>
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
      <footer>
        <div class="footer-content" >
          <img src={big_logo} alt="" className="big_logofooter" />
          <p className="footertext1">
            Norrapat Sai-ai 652110289<br></br>
            Samitthichai Peeragun 652110309<br></br>
            Sivasith Singkaew 652110308<br></br>
            Jeeraphat Chantra 652110318<br></br>
          </p>
        </div>
      </footer>
    </div>
  );
}



FindJob.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(FindJob)`
@media (max-width: 600px) {
  .footer-content{
    margin-top: 1500px;
  }
  .footertext1{
    left: 50%;
    margin-top:300px;
    color: #9C9C9C;
  font-family: Bebas Neue;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; 
  letter-spacing: -0.22px;
  text-align: center;
  }
  .big_logofooter{
    width: 300px;
  }
  .selected-header{
      font-size:16px;

  }
  .selected-items button {
    margin: 5px; 
    color: #FFFFFF;
    background-color : #0196FC;
    border: 0px;
    border-radius: 3px;
    padding: 5px;

    font-size:15px;
  }
  .selected-items {
    position: fixed;
    top:70px; 
    right: 20px; 
    background-color: white;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 150px;
    text-align: center;
    font-size:15  px;
  }
}
@media (min-width: 601px) {
.jobdetail{
  padding: 5px;
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
  .needajob{
  color: #808080;
  padding:5px 20px 5px 20px ;
  border: 2px solid #808080;
  transition: all 0.3s;
  border-radius: 5px;
  font-size:20px;
  margin-right: 10px;

}
.needajob:hover , .needajob:focus{
  color: #FFF;
  background: #0196FC;
  border: 2px solid #0196FC;
}
}
`;
