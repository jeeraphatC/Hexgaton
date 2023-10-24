import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import search from "./pic/search.png";
import pp from "./pic/pp.png";
import mlogo from "./pic/mini_logo.png";
import lg from "./pic/lg.png";
import arrow from "./pic/arrow.png";
import big_logo from "./pic/big_logo.png";
import { Link } from "react-router-dom";

function Interview({ className }) {
  return (
    <div className={className}>
      <div className="Interviewbg">
        <img src={mlogo} alt="" className="Interviewmini_logo" />
        <img src={pp} alt="" className="Interviewlogo" />
        <p className="Interviewmbtext1">Design</p>
        <p className="Interviewmbtext2">Dev</p>
        <p className="Interviewmbtext3">Tunes</p>
        <Link to="/home" className="text1">
          <div className="Interviewbtn">
            <p className="Interviewbtntext">Go to home page</p>
          </div>
        </Link>
        <p className="Interviewtext2">Design Dev Tunes</p>
      </div>
    </div>
  );
}

Interview.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Interview)`
.Interviewlogo{
  max-width: 1200px;
    margin: 110px 15px 0px 800px;
    position: absolute;
}
  .Interviewtext2 {
    font-size: 30px;
    color: #fff;
    text-align: center;
    position: absolute;
    margin: 650px 15px 0px 1300px;
  }
  .Interviewbtntext {
    font-size: 40px;
    color: #fff; /* สีของตัวอักษร */
    text-align: center;
    position: absolute;
    margin: 20px 15px 0px 60px;
  }

  .Interviewbtn:hover {
    background: #fff;
  }

  .Interviewbtn {
    position: absolute;
    width: 350px;
    height: 100px;
    background: #216ad9;
    margin: 500px 15px 0px 220px;
    border: 3px solid #fff;
    transition: background 0.3s;
  }

  .Interviewmbtext3 {
    font-size: 100px;
    color: #fff;
    text-align: left;
    position: absolute;
    margin: 350px 15px 0px 220px;
  }

  .Interviewmbtext2 {
    font-size: 100px;
    color: #fff;
    text-align: left;
    position: absolute;
    margin: 250px 15px 0px 220px;
  }

  .Interviewmbtext1 {
    font-size: 100px;
    color: #fff;
    text-align: left;
    position: absolute;
    margin: 150px 15px 0px 220px;
  }

  .Interviewmini_logo {
    max-width: 200px;
    margin: 40px 15px 0px 220px;
    position: absolute;
  }

  .Interviewbg {
    background: #216ad9;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .Interviewbtn:hover .Interviewbtntext {
    color: #216ad9; /* เปลี่ยนสีตัวอักษรเมื่อ hover */
  }
`;
