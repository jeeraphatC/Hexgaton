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


position: absolute;

width: 100%;
color: white;
.bg0{
  text-align: center;
  width: 100%;
  height: 500px;
left: 0px;
top: -40px;
background: #242424;
color: white;

}
/* Vector 2 */
.highlight{

width: 100%;
height: 478px;

top: 658px;

background: #D9D9D9;

}
.text-highlight{
position: absolute;
width: 359px;
height: 144px;
left: 465px;
top: 841px;

font-family: 'Bebas Neue';
font-style: normal;
font-weight: 400;
font-size: 96px;
line-height: 150%;
/* identical to box height, or 144px */
letter-spacing: -0.011em;

color: #000000;
}

.text-highlight-2{
  /* Popular jobs right now */

position: absolute;
width: 243px;
height: 48px;
left: 520px;
top: 951px;

font-family: 'Bebas Neue';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 150%;
/* identical to box height, or 48px */
letter-spacing: -0.011em;

color: #7000FF;


}



.contain{

  width: 100%;
height: 875px;
left: -2.71px;
top: 1107px;

background: #D9D9D9;


}

.footer{
position: absolute;
width: 100%;
height: 200px;
top: 2800px;
background: #0196FC;

}

.fonts{
 
  color: #0196FC;
}

.fonts01{
  color: #25DAF9;
}



.button-take{
/* Component 21 */

position: absolute;
width: 345px;
height: 79px;
left: 450px;
top: 1101px;
background: #0196FC;

border-radius: 40px;
position: absolute;
font-family: 'Bebas Neue';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 150%;
/* identical to box height, or 60px */
letter-spacing: -0.011em;

color: #FFFFFF;


}
.button-hire{

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


font-family: 'Bebas Neue';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 150%;
/* identical to box height, or 60px */
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