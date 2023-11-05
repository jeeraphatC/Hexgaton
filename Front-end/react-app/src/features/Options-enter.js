import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import webdevbg from "./pic/webdevbg.jpg";
import designbg2 from "./pic/designbg2.jpg";
import musicbg from "./pic/musicbg.jpg";
import big_logo from "./pic/big_logo.png";
import arrow from "./pic/barrow.png";
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function OptionsEnterprise({ className }) {
  return (

    <div className={className}>
      <Container style={{ marginTop: 50 }}>
        <Link to="/" style={{ fontSize: '30px', marginTop: '30px', color: '#0071BE' }}>Home</Link>
        <img src={arrow} alt="" style={{ width: '30px', marginLeft: '10px', marginBottom: '10px' }} />
        <Link to="/optionenter" style={{ fontSize: '30px', marginTop: '30px', marginLeft: '10px', color: '#808080' }}>Enterprises</Link>
        <h1>Type For Enterprises</h1>
        <p>สำหรับผู้ประกอบการที่ต้องการหาFreelanceมาช่วยทำงาน</p>
        <Row>
          <Col md={6}>
            <Link to="/findfreelance" state={{ type: "develop" }}>
              <div className="options1">
                <img src={webdevbg} alt="" className="webdevbg" />
                <h3 style={{ zIndex: 20, fontSize: '40px', marginTop: '130px' }} >Develop</h3>
              </div>
            </Link>
          </Col><Col md={6}>
            <Link to="/findfreelance" state={{ type: "graphic" }}>
              <div className="options2">
                <img src={designbg2} alt="" className="designop" />
                <h3 style={{ zIndex: 20, fontSize: '40px', marginTop: '130px' }}>Graphic</h3>
              </div>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="/findfreelance" state={{ type: "music" }}>
              <div className="options3">
                <img src={musicbg} alt="" className="musicbg" />
                <h3 style={{ zIndex: 20, fontSize: '40px', marginTop: '130px' }}>Music</h3>
              </div>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="/FreelanceForm" state={{ type: "postf" }}>
              <div className="options4">
                <h3 style={{ zIndex: 20, fontSize: '40px', marginTop: '130px' }}>ADD Post for Freelance</h3>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
      <footer>
        <div class="footer-content" style={{ marginTop: '1600px' }}>
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

OptionsEnterprise.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(OptionsEnterprise)`
@media (max-width: 600px) {
  .big_logofooter{
    width: 300px;
  }
  .footer-content{
    margin-top: 1600px;
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
}
.musicbg:hover{

}
.musicbg{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1; /* Make sure z-index is lower than .options1 */
  border-radius:10px;
}
.webdevbg:hover{

}
.musicbg{
  width: 550px;
  height: 190px;
  position: absolute;
  z-index: 1;
  border-radius:10px;
  
}
.webdevbg:hover{

}
.musicbg{
  width: 550px;
  height: 190px;
  position: absolute;
  z-index: 1;
  border-radius:10px;
  
}
.webdevbg:hover{

}
.webdevbg{
  width: 550px;
  height: 190px;
  position: absolute;
  z-index: 1; 
  border-radius:10px;
  
}
.designop:hover {
  
}
.designop {
  width: 550px;
  height: 190px;
  position: absolute;
  z-index: 1; 
  border-radius:10px;
}


  h1{
    font-size: 45px;
    font-weight: bold;
  }
  h3{
    font-size: 25px;
    font-weight: bold;
    color:#FFF;
    margin: 20px;
    text-decoration: none;
  }
  p{
    font-size: 20px;
    color:#959595;
  }


  .optioncontainer{
    width: 80%;
    height: 40%;
    background: #FFF;   
    justify-content: left;
   }
   .options4{
  
    width: 550px;
    height: 190px;
    background:#0196FC;
    transition: all 0.2s;
    text-align: left;
    display: flex;
    border-radius:10px;

   }
   .options3{
    margin-bottom: 30px;
    width: 550px;
    height: 190px;
    display: flex;
    transition: all 0.2s;
    text-align: left;
    border-radius:10px;
   }

   .options2{
    margin-bottom: 30px;
    width: 550px;
    height: 190px;
    display: flex;
    transition: all 0.2s;
    text-align: left;
    border-radius:10px;
   }
   .options1 {
    margin-bottom: 30px;
    margin-right: 40px;
    width: 550px;
    height: 190px;
    display: flex;
    transition: all 0.2s;
    text-align: left;
    border-radius:10px;
  }

  .options2:hover{
    cursor: pointer;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
    color: #9C9C9C;
   }
   .options3:hover{
    cursor: pointer;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
    color: #9C9C9C;
   }
   .options4:hover{
    cursor: pointer;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
    color: #9C9C9C;
   }
   .options1:hover{
    cursor: pointer;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
    color: #9C9C9C;
   }
.logo{
  max-width: 50px;
  max-height: 50px;
  margin: 20px;
  margin-top: 120px;
}
.logo2{
  max-width: 50px;
  max-height: 50px;
  margin-top: 120px;
  margin-right: 20px;
}
.logo3{
  max-width: 50px;
  max-height: 50px;
  margin-top: 120px;
  margin-left: 100px;
}
`;