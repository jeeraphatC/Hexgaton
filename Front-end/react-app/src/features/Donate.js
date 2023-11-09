import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import qrcode from "./pic/qrcode.jpg";
import webdevbg2 from "./pic/webdevbg2.jpg";

function Donate({ className }) {
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };


  return (
    <div className={className}>
      
      
      
      <div className="divdoante1">
        <button onClick={handleButtonClick} className="qrcodebtn">Donate</button>
        <div>
          {showImage && <img src={qrcode} alt="" className="qrcode" />}
        </div>
      <h3 >Let's go.</h3>
      <h1 >Help our website</h1>
      <p >If you have the financial ability and would like to support us. The invitation is that everyone can join the network to strengthen and develop our website. Everyone's cooperation will be very useful!</p>
<img src={webdevbg2} className="webdevbg2"></img>
      </div>
        {/* <div className="containerdonate">
      <h1>Support our website</h1>
      <img src={qrcode} className="qrcode"></img>
    </div> */}
    </div>

  );
}

Donate.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Donate)`
.qrcodebtn{
  width: 150px;  
  height: 50px;
  position: absolute;
  background-color:FFFFFF;
  border-radius:5px;
  border:0px;
  top: 480px;
  left: 100px;
  font-size:25px;
  color:#495057;
  transition: all 0.2s;
}
.qrcodebtn:hover{
  font-size:26px;
  background-color:#CCC;
}
.webdevbg2{
  width: 100%;  
}
.divdoante1 {
  
}


.containerdonate {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /* หากต้องการให้ element อยู่ตรงกลางแนวนอนและแนวตั้ง */
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
    width: 600px;
    height: 450px; /* ให้ความสูงเท่ากับความสูงของหน้าจอ */
    margin-left:450px;
    margin-top:100px;
    border-radius:20px;

}
p{
  width:600px;
  font-size:20px;
  margin: 280px 50px 50px 105px; 
  color:#ccc;
  position:absolute;
}
h3{
  font-size:30px;
  margin: 120px 50px 50px 105px; 
  color:#ccc;
  position:absolute;
}
h1{
    font-size:120px;
    margin: 150px 50px 50px 100px; 
    color:white  ;
    position:absolute;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.qrcode{
    width:200px;
    height:200px;
    position:absolute;
    top:40%;
    left:80%;
}
`;
