import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import big_logo from "./pic/big_logo.png";
import webdevbg from "./pic/webdevbg.jpg";
import designbg2 from "./pic/designbg2.jpg";
import musicbg from "./pic/musicbg.jpg";
import arrow from "./pic/barrow.png";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function OptionsFreelance({ className }) {
  return (

    <div className={className}>
       <Container style={{ marginTop: 50 }}>
        <Link to="/" style={{fontSize:'30px',marginTop:'30px',color:'#0071BE'}}>Home</Link>
        <img src={arrow} alt=""style={{width:'30px',marginLeft:'10px',marginBottom:'10px'}} />
        <Link to="/optionfree" style={{fontSize:'30px',marginTop:'30px',marginLeft:'10px',color:'#808080'}}>Freelance</Link>
        <h1>Type For Freelance</h1>
        <p>สำหรับFreelanceที่ต้องการหางาน</p>
          
              <Link to="/findjob" state={{ type: "develop" }}>
                <div className="options1">
                  <img src={webdevbg} alt="" className="webdevbg" />
                  <h3 style={{zIndex:20,fontSize:'40px',marginTop:'130px'}}>Develop</h3>
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
            
              <Link to="/PostJob" state={{ type: "postf" }}>
                <div className="options4">
                  <h3 style={{zIndex:20,fontSize:'40px',marginTop:'130px'}}>ADD Post for enterprises</h3>
                </div>
              </Link>
      </Container>
      <footer>
        <div class="footer-content" style={{marginTop:'800px'}}>
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

OptionsFreelance.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(OptionsFreelance)`

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
    top: 500px;
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
    top: 500px;
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