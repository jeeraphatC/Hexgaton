
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import bg2 from "./pic/bg2.jpg";
import user1 from "./pic/woman.jpg";
import star from "./pic/star.png";
import getCookies from './hook/getCookies';
import { Link } from "react-router-dom";
import axios from 'axios';


function EditProfile({classname}){
    console.log('edit page');


const handleNameChange = () => {

}

return(


    <div className={classname}>
  
    <img src={bg2} alt="" className="bg1" />
    <div className='container'>
   <div className='edit-Box'>
<form>
<div>
<label>Username :</label>
<input
type='text'
name='name'
// value={}
// onChange={}
/>
</div>


<div>
    <label>Your Description :</label>
    <input
    type='text'
    name='description'
    // value={}
    // onChange={}
    />
</div>


<div>
<label>Email :</label>
<input
    type='text'
    name='email'
    // value={}
    // onChange={}

/>

</div>


{/*password เผื่อไว้*/}
{/* <div>
<label>Email :</label>
<input
    type='text'
    name='email'
    // value={}
    // onChange={}

/>

</div> */}

</form>

   </div>
    </div>
    
  </div>
);

}


export default  styled(EditProfile)`
   .bg1 {
    height: 400px;
  }

  .edit-Box {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;
