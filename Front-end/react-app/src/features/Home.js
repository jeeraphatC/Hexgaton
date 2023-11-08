import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import search from "./pic/search.png";
import astronaut from "./pic/astronaut.png";
import mlogo from "./pic/mini_logo.png";
import lg from "./pic/lg.png";
import arrow from "./pic/arrow.png";
import inter from "./pic/inter.png";
import big_logo from "./pic/big_logo.png";
import bgcom2 from "./pic/bgcom2.jpg";
import devbg1 from "./pic/devbg1.jpg";
import drawbg1 from "./pic/drawbg1.jpg";
import musicbg from "./pic/musicbg.jpg";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
function Home({ className }) {
  const [devType, setDevType] = useState("I AM A D");

  useEffect(() => {
    const interval = setInterval(() => {
      setDevType((prevType) => {
        switch (prevType) {
          case "I AM A D":
            return "I AM A DE";
          case "I AM A DE":
            return "I AM A DEV";
          case "I AM A DEV":
            return "I AM A DEVE";  
            case "I AM A DEVE":
              return "I AM A DEVEL";  
              case "I AM A DEVEL":
                return "I AM A DEVELO"; 
                case "I AM A DEVELO":
                  return "I AM A DEVELOP"; 
                  case "I AM A DEVELOP":
                    return "I AM A DEVELOPE";
                    case "I AM A DEVELOPE":
                      return "I AM A DEVELOPER";
                      case "I AM A DEVELOPER":
                        return "I AM A DES";
                        case "I AM A DES":
                          return "I AM A DESI";
                          case "I AM A DESI":
                            return "I AM A DESIG";
                            case "I AM A DESIG":
                              return "I AM A DESIGN";
                              case "I AM A DESIGN":
                                return "I AM A DESIGNE";
                                case "I AM A DESIGNE":
                                return "I AM A DESIGNER";
                                case "I AM A DESIGNER":
                                  return "I AM A M";
                                  case "I AM A M":
                                    return "I AM A MU";
                                    case "I AM A MU":
                                      return "I AM A MUS";
                                      case "I AM A MUS":
                                        return "I AM A MUSI";
                                        case "I AM A MUSI":
                                        return "I AM A MUSIC";
                                        case "I AM A MUSIC":
                                        return "I AM A MUSICA";
                                        case "I AM A MUSICA":
                                        return "I AM A MUSICAI";
                                        case "I AM A MUSICAI":
                                        return "I AM A MUSICAIN";
                                        case "I AM A MUSICAIN":
                                          return "I AM A D";
          default:
            return prevType;
        }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      <div className="homebg">
      <img src={bgcom2} alt="" className="bgcom" />
        <div className="mini">
          <Link to="/develop" state={{  type: "graphic",type2:  "logos" }}>
            <h4>Logo design</h4>
          </Link>
          <Link to="/develop" state={{  type: "graphic",type2:  "sticker" }}>
            <h4>Sticker design</h4>
          </Link>
          <Link to="/develop" state={{  type:  "chat-ckient" }}>
            <h4>ChatClientharacter design</h4>
          </Link>
          <Link to="/develop" state={{  type: "graphic",type2: "banner" }}>
            <h4>Banner advertising design</h4>
          </Link>
          <Link to="/develop" state={{  type: "graphic",type2:  "draw-cartoon" }}> 
            <h4>Draw cartoons</h4>
          </Link>
          <Link to="/develop" state={{  type: "graphic",type2:  "3d-models" }}>
            <h4>3D model</h4>
          </Link>
          <Link to="/develop" state={{  type: "develop",type2:  "web" }}>
            <h4>Web development</h4>
          </Link>
          <Link to="/develop" state={{  type:  "game" }}>
            <h4>Game development</h4>
          </Link>
          <Link to="/develop" state={{  type:  "chatbot" }}>
            <h4>Making chatbotS</h4>
          </Link>
          <Link to="/develop" state={{  type:  "beat" }}>
            <h4>Beat</h4>
          </Link>

          <Link to="/develop" state={{  type:  "mobile" }}>
            <h4>Mobile App</h4>
          </Link>
        </div>
        <div className="animationtext1con" >
        <h1 style={{ left: '25%'}} className="animationtext1">
  {devType}
</h1>
      </div>

        <img src={astronaut} alt="" className="astronaut" />
        <h3>
          Let{" "}
          <p1>
            Design<p2>Dev</p2>Tunes
          </p1>{" "}
          help you to find your job.
        </h3>
        <Link to="/optionfree">
          <div>
            <h3 className="needajob">Need a job?</h3>
          </div>
        </Link>
        <Link to="/optionenter">
          <div>
            <h3 className="needafreelance">Search a freelance</h3>
          </div>
        </Link>
      </div>
      
      <div className="devpre">
      <Link to="/findjob" state={{ type: "develop" }} > 
  <div className="textOverlay1">
    DEVELOP
  </div>
  <img src={devbg1} alt="" className="devprebg" />
  </Link>
  <Link to="/findjob" state={{ type: "graphic" }}  >
  <div className="textOverlay2">
    DESIGN
  </div>
  </Link>
  <Link to="/findjob" state={{ type: "music" }}>
  <img src={drawbg1} alt="" className="designprebg" />
  
  <div className="textOverlay3">
    Music
  </div>
  </Link>
  <img src={musicbg} alt="" className="drawprebg" />
</div>
      
      <img src={mlogo} alt="" className="mini_logo" />
      <h1 className="btext1">Become a DesignDevTunes</h1>
      <h2 className="mtext1">Hire and find jobs on our website.</h2>
      <h2 className="mtext2">
        We have been helping people to find Job and freelance for over 20 HOURs.
      </h2>

      <div className="d1">
        <h1 className="btext2">10 Million + Monthly Visits</h1>
      </div>
      <div className="d2">
        <h1 className="btext2">1 Billion + Yearly Page Visits</h1>
      </div>
      <div className="d3">
        <h1 className="btext2">20,000 + Feedback</h1>
      </div>

      <div className="t1">
        <h1 className="t1btext1">Tutorials</h1>
        <h1 className="t1btext2">
          How to find a job and How to hire freelance.{" "}
        </h1>
        <img src={lg} alt="" className="lg" />
        <img src={arrow} alt="" className="arrow" />
        <img src={search} alt="" className="search" />
        <img src={arrow} alt="" className="arrow2" />
        <img src={arrow} alt="" className="arrow2" />
        <img src={inter} alt="" className="inter" />
      </div>
      <div className="container2">
<Link to="/donate">
  <Button className="donatebtn" style={{width:'200px',height:'40px',fontSize:'20px'}}>Donate here</Button>
  </Link>
</div>
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

Home.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Home)`
@media (max-width: 600px) {
  width: 100%;
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
  .t2text{
    font-size:55px;
    top: 65%;
    position: absolute;
    color: #0196FC;
  }
  .t2{
    width:100%;
    background: #D9D9D9;
    height: 1075px;
  }
  .needafreelance{
    position: absolute;
    color: #FFF;
    top: 55%;
    left: 50%;
    padding:10px 30px 10px 30px ;
    border: 2px solid #FFF;
    transition: all 0.3s;
    border-radius: 5px;
    font-size:35px;
    width:200px;
    height:100px;
  }
  .needafreelance:hover{
    color: #FFF;
    background: #0196FC;
    border: 2px solid #0196FC;
  }
  .needajob{
    position: absolute;
    color: #FFF;
    top: 75%;
    left: 50%;
    padding:10px 30px 10px 30px ;
    border: 2px solid #FFF;
    transition: all 0.3s;
    border-radius: 5px;
    font-size:35px;
    width:200px;
    height:100px;
  }
  .needajob:hover{
    color: #FFF;
    background: #0196FC;
    border: 2px solid #0196FC;
  }
  .bgcom{
    height: 250px;
      width: 100%;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
    .footer-content {
    }
    .inter {
      max-width: 130px;
      margin: 500px 15px 15px 70%;
      position: absolute;
      display: none;
    }
    .arrow2 {
      max-width: 100px;
      margin: 500px 15px 15px 60%;
      position: absolute;
      display: none;
    }
    .search {
      max-width: 120px;
      margin: 500px 15px 15px 50%;
      position: absolute;

      display: none;
    }
    .arrow {
      max-width: 100px;
      margin: 500px 15px 15px 40%;
      position: absolute;
      display: none;
    }
    .lg {
      max-width: 70px;
      margin: 500px 15px 15px 30%;
      position: absolute;
      display: none;
    }
    .t1btext2 {
      font-size: 50px;
      color: #fff;
      text-align: center;
      position: absolute;
      margin-top: 150px;
      display: none;
    }
    .t1btext1 {
      font-size: 100px;
      color: #fff;
      text-align: center;
      position: absolute;
      margin-top: -50px;
      display: none;
    }
    .t1 {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-top: 2000px;
      width: 100%;
      height: 1000px;
      background: #0196fc;
      display: none;
    }
    .btext2 {
      font-size: 22px;
      color: #fff;
      margin-top: 40px;
      text-align: center;
    }
    .d1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-top: 920px;
      width: 220px;
      height: 100px;
      background: #0196fc;
      border-radius: 10px;
    }
    .d2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
      margin-top: 1050px;
      width: 220px;
      height: 100px;
      background: #0196fc;
      border-radius: 10px;
    }
    .d3 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
      margin-top: 1180px;
      width: 220px;
      height: 100px;
      border-radius: 10px;
      background: #0196fc;
    }
    .mtext2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 15px;
      margin-top: 830px;
      color: #9c9c9c;
      text-align:center;
    }
    .mtext1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 15px;
      margin-top: 800px;
      color: #9c9c9c;
    }
    .btext1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      margin-top: 760px;
      color: #000;
    }
    .mini_logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 200px;
      margin-top: 700px;
    }
  
    position: absolute;
  
    width: 100%;
    color: white;
    .bg0 {
      text-align: center;
      width: 100%;
      height: 500px;
      left: 0px;
      top: -40px;
      background: #242424;
      color: white;
    }
    /* Vector 2 */
    .highlight {
      width: 100%;
      height: 478px;
  
      top: 658px;
  
      background: #d9d9d9;
    }
    .text-highlight {
      position: absolute;
      width: 359px;
      height: 144px;
      left: 465px;
      top: 841px;
  
      font-family: "Bebas Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 96px;
      line-height: 150%;
      /* identical to box height, or 144px */
      letter-spacing: -0.011em;
  
      color: #000000;
    }
  
    .text-highlight-2 {
      /* Popular jobs right now */
  
      position: absolute;
      width: 243px;
      height: 48px;
      left: 520px;
      top: 951px;
  
      font-family: "Bebas Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 150%;
      /* identical to box height, or 48px */
      letter-spacing: -0.011em;
  
      color: #7000ff;
    }
  
    .contain {
      width: 100%;
      height: 875px;
      left: -2.71px;
      top: 1107px;
  
      background: #d9d9d9;
    }
  
    .footer {
      position: absolute;
      width: 100%;
      height: 200px;
      top: 2800px;
      background: #0196fc;
    }
  
    .fonts {
      color: #0196fc;
    }
  
    .fonts01 {
      color: #25daf9;
    }
  
    .button-take {
      /* Component 21 */
  
      position: absolute;
      width: 345px;
      height: 79px;
      left: 450px;
      top: 1101px;
      background: #0196fc;
  
      border-radius: 40px;
      position: absolute;
      font-family: "Bebas Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 150%;
      /* identical to box height, or 60px */
      letter-spacing: -0.011em;
  
      color: #ffffff;
    }
    .button-hire {
      /* Component 22 */
  
      position: absolute;
      width: 345px;
      height: 79px;
      left: 450px;
      top: 1200px;
  
      /* Rectangle 18 */
  
      position: absolute;
      background: #242424;
      border-radius: 40px;
  
      font-family: "Bebas Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 150%;
      /* identical to box height, or 60px */
      letter-spacing: -0.011em;
  
      color: #ffffff;
    }
    .homebg {
      background: #0196FC;
      height: 600px;
      width: 100%;
      position: absolute;
      display: flex;
      text-align: center;

    }
    h4 {
      margin-top: 20px;
      margin-right: 50px;
      font-size: 14px;
      color: #ffffff;
    }
    h4:hover {
      color: #0196fc;
    }
    .mini {
      width: 90%;
      justify-content: center;
      margin: auto;
      position: absolute;
      color: white;
      margin-top: 20px;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-size: 80px;
      display: flex;
      display:none;
    }
  
    h1 {
      margin: auto;
      position: absolute;
      color: white;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-size: 50px;
    }
    h3 {
      margin: auto;
      margin-top: 15px;
      position: absolute;
      color: white;
      top: 27%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-size: 20px;
    }
    p1 {
      color: #0196fc;
    }
    p2 {
      color: #25daf9;
    }
    .searchbar {
      background: #fff;
      height: 70px;
      width: 350px;
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50px;
    }
    .bluebar {
      height: 70px;
      width: 90px;
      position: absolute;
      border-radius: 0px 50px 50px 0px;
      background: #0196fc;
      left: 75%;
    }
    .searchlogo {
      max-width: 50px;
      max-height: 50px;
      margin: 10px;
    }
  
    .astronaut {
      max-width: 150px;
      max-height: 150px;
      top: 35%;
      left: 80%;
      position: absolute;
      transition: all 0.3s;
      display: none;
    }
    .astronaut:hover {
      top: 30%;
      display: none;
    }
}










@media (min-width: 601px) {
  .donatbtn{
    
  }
  .container2{
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 5px; /* ปรับแต่งค่า padding ตามต้องการ */
  border-radius: 10px;
  position: fixed;
  bottom: 10px;
  left: 10px;
  background-color: #fff;
  max-height: 150px; /* ปรับแต่งค่า max-height ตามต้องการ */
    z-index:101;
    
  }
  .floatContainer {
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  .divshow1{
    cursor: pointer;
  }
  .textOverlay3 {
    position: absolute;
    top: 1120px;
    left: 1120px;
    transform: translate(-50%, -50%);
    font-size: 80px;
    color: white;
    text-align: center;
    z-index:100;

  }
  .textOverlay2 {
    position: absolute;
    top: 830px;
    left: 1120px;
    transform: translate(-50%, -50%);
    font-size: 80px;
    color: white;
    text-align: center;
    z-index:100;
  }
  .textOverlay1 {
    position: absolute;
    top: 980px;
    left: 450px;
    transform: translate(-50%, -50%);
    font-size: 150px;
    color: white;
    text-align: center;
    z-index:100;
  }
  

.drawprebg:hover, .designprebg:hover, .devprebg:hover {
    filter: brightness(30%);
}
  .drawprebg{
    width:450px;
    height:250px;
    margin-top:1000px;
    margin-left:100px;
    border-radius:10px;
    position:absolute;
    overflow: hidden;
    transition: transform 0.5s, filter 0.5s;
    filter: brightness(70%);
  }

 
  .designprebg{
    width:450px;
    height:250px;
    margin-top:700px;
    margin-left:100px;
    border-radius:10px;
    position:absolute;
    overflow: hidden;
    transition: transform 0.5s, filter 0.5s;
    filter: brightness(70%);
  }

  .devprebg{
    width:700px;
    height:550px;
    margin-top:700px;
    margin-left:100px;
    border-radius:10px;
    overflow: hidden;
    transition: transform 0.5s, filter 0.5s;
    filter: brightness(70%);
  }
  .devpre{
    background: #111111;
    width: 100%;
    height: 1400px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.25);
    margin-bottom:100px;
  }
  .animationtext1 {
    transition: transform 0.5s ease-in-out;
  }
  @keyframes slideIn {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .animationtext1 {
    animation: slideIn 1s forwards;
    top : 20%;
    font-size:150px;

  }
  
  .animationtext2 {
    animation: slideIn 1s forwards 0.5s; /* ทำ animation หลังจาก animationtext1 0.5 วินาที */
  }
  .footer-content{
    margin-top: 3200px;
  }
.footertext1{
  margin-top: 380px;
  margin-left: 20px;
  color: #9C9C9C;
font-family: Bebas Neue;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
letter-spacing: -0.22px;
}
.t2text{
  font-size:55px;
  top: 65%;
  position: absolute;
  color: #0196FC;
}
.t2{
  width:100%;
  background: #D9D9D9;
  height: 1075px;
}
.needafreelance{
  position: absolute;
  color: #FFF;
  top: 65%;
  left: 57%;
  padding:10px 40px 10px 40px ;
  
  transition: all 0.3s;
  border-radius: 5px;
  font-size:25px;
  color: #FFF;
  background: #0196FC;
}
.needafreelance:hover{
  border: 2px solid #FFF;
}
.needajob{
  position: absolute;
  top: 65%;
  left: 40%;
  padding:10px 40px 10px 40px ;
  
  transition: all 0.3s;
  border-radius: 5px;
  font-size:25px;
  background: #0196FC;
  border: 2px solid #0196FC;
}
.needajob:hover{
border: 2px solid #FFF;
  
  
}
.bgcom{
  height: 600px;
    width: 100%;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
}
  .footer-content {
  }
  .inter {
    max-width: 130px;
    margin: 500px 15px 15px 70%;
    position: absolute;
  }
  .arrow2 {
    max-width: 100px;
    margin: 500px 15px 15px 60%;
    position: absolute;
  }
  .search {
    max-width: 120px;
    margin: 500px 15px 15px 50%;
    position: absolute;
  }
  .arrow {
    max-width: 100px;
    margin: 500px 15px 15px 40%;
    position: absolute;
  }
  .lg {
    max-width: 200px;
    margin: 500px 15px 15px 30%;
    position: absolute;
  }
  .t1btext2 {
    font-size: 50px;
    color: #fff;
    text-align: center;
    position: absolute;
  }
  .t1btext1 {
    font-size: 100px;
    color: #fff;
    text-align: center;
    position: absolute;
    margin-top: -150px;
  }
  .t1 {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 2000px;
    width: 100%;
    height: 1000px;
    background: #0196fc;
  }
  .btext2 {
    font-size: 30px;
    color: #fff;
    margin-top: 30px;
    text-align: center;
  }
  .d1 {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    margin-top: 1200px;
    width: 250px;
    height: 150px;
    background: #0196fc;
    border-radius: 10px;
  }
  .d2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    margin-top: 1200px;
    width: 250px;
    height: 150px;
    background: #0196fc;
    border-radius: 10px;
  }
  .d3 {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    margin-top: 1200px;
    width: 250px;
    height: 150px;
    border-radius: 10px;
    background: #0196fc;
  }
  .mtext2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    margin-top: 1060px;
    color: #9c9c9c;
  }
  .mtext1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    margin-top: 1020px;
    color: #9c9c9c;
  }
  .btext1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    margin-top: 950px;
    color: #000;
  }
  .mini_logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    margin-top: 800px;
  }

  position: absolute;

  width: 100%;
  color: white;
  .bg0 {
    text-align: center;
    width: 100%;
    height: 500px;
    left: 0px;
    top: -40px;
    background: #242424;
    color: white;
  }
  /* Vector 2 */
  .highlight {
    width: 100%;
    height: 478px;

    top: 658px;

    background: #d9d9d9;
  }
  .text-highlight {
    position: absolute;
    width: 359px;
    height: 144px;
    left: 465px;
    top: 841px;

    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 150%;
    /* identical to box height, or 144px */
    letter-spacing: -0.011em;

    color: #000000;
  }

  .text-highlight-2 {
    /* Popular jobs right now */

    position: absolute;
    width: 243px;
    height: 48px;
    left: 520px;
    top: 951px;

    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 150%;
    /* identical to box height, or 48px */
    letter-spacing: -0.011em;

    color: #7000ff;
  }

  .contain {
    width: 100%;
    height: 875px;
    left: -2.71px;
    top: 1107px;

    background: #d9d9d9;
  }

  .footer {
    position: absolute;
    width: 100%;
    height: 200px;
    top: 2800px;
    background: #0196fc;
  }

  .fonts {
    color: #0196fc;
  }

  .fonts01 {
    color: #25daf9;
  }

  .button-take {
    /* Component 21 */

    position: absolute;
    width: 345px;
    height: 79px;
    left: 450px;
    top: 1101px;
    background: #0196fc;

    border-radius: 40px;
    position: absolute;
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    /* identical to box height, or 60px */
    letter-spacing: -0.011em;

    color: #ffffff;
  }
  .button-hire {
    /* Component 22 */

    position: absolute;
    width: 345px;
    height: 79px;
    left: 450px;
    top: 1200px;

    /* Rectangle 18 */

    position: absolute;
    background: #242424;
    border-radius: 40px;

    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    /* identical to box height, or 60px */
    letter-spacing: -0.011em;

    color: #ffffff;
  }
  .homebg {
    background: #242424;
    height: 600px;
    width: 100%;
    position: absolute;
    display: flex;
    text-align: center;
  }
  h4 {
    margin-top: 20px;
    margin-right: 50px;
    font-size: 14px;
    color: #ffffff;
  }
  h4:hover {
    color: #0196fc;
  }
  .mini {
    width: 90%;
    justify-content: center;
    margin: auto;
    position: absolute;
    color: white;
    margin-top: 20px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 80px;
    display: flex;
  }

  h1 {
    margin: auto;
    position: absolute;
    color: white;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 80px;
  }
  h3 {
    margin: auto;
    margin-top: 15px;
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 30px;
  }
  p1 {
    color: #0196fc;
  }
  p2 {
    color: #25daf9;
  }
  .searchbar {
    background: #fff;
    height: 70px;
    width: 350px;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50px;
  }
  .bluebar {
    height: 70px;
    width: 90px;
    position: absolute;
    border-radius: 0px 50px 50px 0px;
    background: #0196fc;
    left: 75%;
  }
  .searchlogo {
    max-width: 50px;
    max-height: 50px;
    margin: 10px;
  }

  .astronaut {
    max-width: 150px;
    max-height: 150px;
    top: 35%;
    left: 82%;
    position: absolute;
    animation: astronautAnimation 2s infinite alternate;
  }
  
  @keyframes astronautAnimation {
    0% {
      top: 30%;
    }
    100% {
      top: 40%;
    }
  }
  .astronaut:hover {
    top: 30%;
  }
}
`;
