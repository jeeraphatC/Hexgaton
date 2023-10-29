import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import bg2 from "../pic/bg2.jpg";
import user1 from "../pic/woman.jpg";
import star from "../pic/star.png";
import getCookies from '../hook/getCookies';
import { Link } from "react-router-dom";

function Fprofile({ className }) {
  const [username, setusername] = useState();

  useEffect(() => {
    // Get the username from the cookie
    setusername(getCookies("username"));
  }, []);

  return (
    <div className={className}>
      <img src={bg2} alt="" className="bg1" />

      <div className="c1">
        <div className='container-profile'>
          <img src={user1} alt="" className="user1" />
          <div class="overlay"><Link to="/EditProfile" className='link-edit'>Edit Profile</Link></div>
        </div>
        <div className="username">{username} </div>

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

.container-profile {
  margin: 15px 45px;

  position: relative;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  overflow: hidden;
}

.user1 {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top:0
}

.overlay {
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the element */
  width: 100%;
  height:100%;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.4); /* Black see-through */
  transition: .5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding-top: 80px;
  text-align: center;
}

.link-edit {
  color:white; /* Set link color to black */
}

.container-profile:hover .overlay {
  opacity: 1;
}
`;
