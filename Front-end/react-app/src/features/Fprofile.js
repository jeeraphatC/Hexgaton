import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import bg2 from "./pic/bg2.jpg";
import user1 from "./pic/user.png";
import star from "./pic/star.png";

function Fprofile({ className }) {
  return (
    <div className={className}>
      <img src={bg2} alt="" className="bg1" />

      <div className="c1">
        <img src={user1} alt="" className="user1" />
        <div className="username">Lorem ipsum </div>
        <div className="rating">Rating</div>
        <img src={star} alt="" className="star" />

        <div className="phead1">Skills</div>
        <div className="pbody1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          justo volutpat, tincidunt ligula et, eleifend quam. Aliquam quam elit,
          elementum sed diam id.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed tristique justo volutpat,
        </div>
      </div>

      <div className="c2">
        <div className="phead2">Work of Lorem ipsum </div>
        <a href="/home">
          <div className="pbody21">Press to see more history</div>
        </a>
        <div className="workcon">
          <div className="whead">WEB DEV</div>
          <div className="wbody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique justo volutpat, tincidunt ligula et,
          </div>
          <div className="wfoot">
            <div className="wfootname">Lorem ipsum</div>
          </div>
        </div>
        
      </div>
      <div className="c3">
        <div className="workcon">
          <div className="whead">WEB DEV</div>
          <div className="wbody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique justo volutpat, tincidunt ligula et,
          </div>
          <div className="wfoot">
            <div className="wfootname">Lorem ipsum</div>
          </div>
        </div>
      </div>

      
      <a href="/home">
          <div className="review">Review</div>
        </a>
        <div className="reviewcon">
            <img src={user1} alt="" className="reviewpro" />
            <div className="reviewname">Lorem ipsum</div>
            <div className="reviewbody">Awesome, I haven't ordered work yet but the work is finished.</div>
            <img src={star} alt="" className="reviewstar" />
            <div className="reviewscore">5.0</div>
        </div>
      </div>
  );
}

Fprofile.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Fprofile)`
  text-align: center;
`;
