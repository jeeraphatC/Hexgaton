import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import freelance from "./pic/freelance.png";
import enter from "./pic/enter.png";
import chat from "./pic/chat.png";
import workpro from "./pic/workpro.png";






function Options({ className }) {
  return (
    <div className={className}>
      <h1>Option</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id bibendum nulla. Sed suscipit urna non posuere volutpat.</p>
      <div className="optioncontainer">
      <a href="/profile">
        <div className="options">
          <h3>Profile Freelance </h3>
          <img src={freelance} alt="" className="logo" />   
        </div>
      </a>
      <a href="/profile">
        <div className="options">
        <h3>Profile Entrepreneur </h3>  
        <img src={enter} alt="" className="logo2" />   
        </div>
      </a>
      <a href="/chatroom">
        <div className="options">
        <h3>Chat </h3>
        <img src={chat} alt="" className="logo3" />   
        </div>
      </a>
      <a href="/home">
        <div className="options">
        <h3>Work status </h3>
        <img src={workpro} alt="" className="logo" />   
        </div>
      </a>
      <a href="/home">
        <div className="options">
        <h3>My work </h3>
        </div>
      </a>
      <a href="/home">
        <div className="options">
        <h3>My work Entrepreneur </h3>
        </div>
      </a>
      </div>
    </div>
  );
}

Options.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Options)`
  text-align: center;
  h1{
    font-size: 45px;
    position: absolute;
    font-weight: bold;
    margin-top: 5%;
    margin-left: 15%;
    
  }
  h3{
    font-size: 25px;
    font-weight: bold;
    color:#FFF;
    margin: 20px;
    textdecoration: none;
  }
  p{
    font-size: 20px;
    position: absolute;
    margin-top: 8.5%;
    margin-left: 15%;
    color:#959595;
  }
  .optioncontainer{
    width: 80%;
    height: 40%;
    background: #FFF;
    position: absolute;
    display: flex;
    margin: 200px;
  justify-content: left;
  flex-wrap:wrap;
   }
   .options{
    width: 260px;
    height: 190px;
    background: #0196FC;
    display: flex;
    margin: 20px;
    transition: all 0.2s;
    text-align: left;
   }
   .options:hover{
    cursor: pointer;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.5);
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