import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import search from "./pic/search.png";
import astronaut from "./pic/astronaut.png";
import mlogo from "./pic/mini_logo.png";
import lg from "./pic/lg.png";
import arrow from "./pic/arrow.png";
import inter from "./pic/inter.png";
import big_logo from "./pic/big_logo.png";
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

      <footer>
        <div class="footer-content">
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
  .footer-content {
  }
  .inter {
    max-width: 130px;
    margin: 500px 15px 15px 1300px;
    position: absolute;
  }
  .arrow2 {
    max-width: 100px;
    margin: 500px 15px 15px 1100px;
    position: absolute;
  }
  .search {
    max-width: 120px;
    margin: 500px 15px 15px 900px;
    position: absolute;
  }
  .arrow {
    max-width: 100px;
    margin: 500px 15px 15px 700px;
    position: absolute;
  }
  .lg {
    max-width: 200px;
    margin: 500px 15px 15px 450px;
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
    left: 35%;
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
    left: 65%;
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
    font-size: 20px;
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
    top: 12%;
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
    left: 80%;
    position: absolute;
    transition: all 0.3s;
  }
  .astronaut:hover {
    top: 30%;
  }
`;
