import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import search from "./pic/search.png";
import astronaut from "./pic/astronaut.png";

function Home({ className }) {
  return (
    <div className={className}>


      <div className="homebg">
        <div className="mini">
          <a href="/develop">
            <h4>Logo design</h4>
          </a>
          <a href="/develop">
            <h4>Sticker design</h4>
          </a>
          <a href="/develop">
            <h4>ChatClientharacter design</h4>
          </a>
          <a href="/develop">
            <h4>Banner advertising design</h4>
          </a>
          <a href="/develop">
            <h4>Draw cartoons</h4>
          </a>
          <a href="/develop">
            <h4>3D model</h4>
          </a>
          <a href="/develop">
            <h4>Web development</h4>
          </a>
          <a href="/develop">
            <h4>Game development</h4>
          </a>
          <a href="/develop">
            <h4>Making chatbotS</h4>
          </a>
          <a href="/develop">
            <h4>Beat</h4>
          </a>

          <a href="/develop">
            <h4>Mobile App</h4>
          </a>
        </div>
        <h1>Do you have a job?</h1>
        <h3>
          Let{" "}
          <p1>
            Design<p2>Dev</p2>Tunes
          </p1>{" "}
          help you to find your job.
        </h3>
        <img src={astronaut} alt="" className="astronaut" />
        <div className="searchbar">
          <div className="bluebar">
            <img src={search} alt="" className="searchlogo" />
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Home)`
	
  top: 2800px;
background: #0196FC;

.fonts{
 
  color: #0196FC;
	
  letter-spacing: -0.011em;
color: #FFFFFF;
}
.homebg{
  background: #242424;
  height: 600px;
  width: 100%;
  position: absolute;
  display: flex;
  text-align: center;
}
h4{
  margin-right: 50px;
  font-size:20px; 
  color: #FFFFFF;
}
h4:hover{
  color: #0196FC;
}
.mini{
  width: 90%;
  justify-content: center;
  margin: auto;
  position: absolute;
  color: white;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%); 
  font-weight: bold;
  font-size:80px;
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
  font-size:80px;
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
  font-size:30px;
}
p1{
  color: #0196FC;
}
p2{
  color: #25DAF9;
}
.searchbar {
  background: #FFF;
  height: 70px;
  width: 350px;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
}
.bluebar{
 
  height: 70px;
  width: 90px;
  position: absolute;
  border-radius: 0px 50px 50px 0px;
  background: #0196FC;
  left: 75%;
}
.searchlogo{
  max-width: 50px;
max-height: 50px;
margin: 10px;
}
.astronaut{
  max-width: 150px;
max-height: 150px;
top: 35%;
  left: 80%;
  position: absolute;
  transition: all 0.3s;
}
.astronaut:hover{
  top: 30%;
}

 `;