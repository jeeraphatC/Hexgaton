import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import webdevbg from "./pic/webdevbg.jpg";
import designbg2 from "./pic/designbg2.jpg";
import musicbg from "./pic/musicbg.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function OptionsFreelance({ className }) {
  return (

    <div className={className}>
       <Container style={{ marginTop: 100 }}>
        <h1>Type For Freelance</h1>
        <p>สำหรับFreelanceที่ต้องการหางาน</p>
          
              <Link to="/findjob" state={{ type: "develop" }}>
                <div className="options1">
                  <img src={webdevbg} alt="" className="webdevbg" />
                  <h3 style={{zIndex:20,fontSize:'40px',marginTop:'130px'}} >Develop</h3>
                </div>
              </Link>
            
              <Link to="/findjob" state={{ type: "graphic" }}>
                <div className="options2">
                <img src={designbg2} alt="" className="designop" />
                  <h3 style={{zIndex:20,fontSize:'40px',marginTop:'130px'}}>Graphic</h3>
                </div>
              </Link>
              
              <Link to="/findjob" state={{ type: "music" }}>
                <div className="options3">
                <img src={musicbg} alt="" className="musicbg" />
                  <h3 style={{zIndex:20,fontSize:'40px',marginTop:'130px'}}>Music</h3>
                </div>
              </Link>
            
              <Link to="/FreelanceForm" state={{ type: "postf" }}>
                <div className="options4">
                  <h3 style={{zIndex:20,fontSize:'40px',marginTop:'130px'}}>ADD your profile</h3>
                </div>
              </Link>
      </Container>
      {/* <Container style={{ marginTop: 100 }}>


        <h1>Type For Freelance</h1>
        <p>สำหรับผู้ที่ต้องการหางานจากผู้ประกอบการ</p>
        <div className="optioncontainer">
       
              <Link to="/findjob" state={{ type: "develop" }}>
                <div className="options">
                  <h3>Develop</h3>
                </div>
              </Link>
            
              <Link to="/findjob" state={{ type: "graphic" }}>
                <div className="options">
                  <h3>Graphic</h3>
                </div>
              </Link>
              <Link to="/findjob" state={{ type: "music" }}>
                <div className="options">
                  <h3>Music</h3>
                </div>
              </Link>
           
              <Link to="/FreelanceForm" state={{ type: "postf" }}>
                <div className="options">
                  <h3>Post for Enterprises</h3>
                </div>
              </Link>
            
        </div>


      </Container> */}
    </div>
  );
}

OptionsFreelance.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(OptionsFreelance)`
.div1{
  width:100%;
  height:500px;
  background: #0196FC;
  margin-top:700px;
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
.webdevbg{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1; /* Make sure z-index is lower than .options1 */
  border-radius:10px;
}
.designop:hover {
  
}
.designop {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1; /* Make sure z-index is lower than .options1 */
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
    position: absolute;
    display: flex;
    
  justify-content: left;
  flex-wrap:wrap;
   }
   .options4{
    width: 550px;
    height: 190px;
    background:#0196FC;
    display: flex;
    transition: all 0.2s;
    text-align: left;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius:10px;

   }
   .options3{
    width: 550px;
    height: 190px;
    background:;
    display: flex;
    transition: all 0.2s;
    text-align: left;
    position: absolute;
    top: 50%;
    border-radius:10px;
   }
   .options2{
    width: 550px;
    height: 190px;
    background:;
    display: flex;
    transition: all 0.2s;
    text-align: left;
    position: absolute;
    left: 50%;
    border-radius:10px;
   }
   .options1 {
    width: 550px;
    height: 190px;
    background:;
    display: flex;
    transition: all 0.2s;
    text-align: left;
    position: absolute;
    border-radius:10px;
  }
  .options2:hover{
    cursor: pointer;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
   }
   .options3:hover{
    cursor: pointer;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
   }
   .options4:hover{
    cursor: pointer;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
   }
   .options1:hover{
    cursor: pointer;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
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