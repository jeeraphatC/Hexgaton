// window.location.href = '/'; ใช้ไม่ได้ ถ้าใช้รูปจะไม่ส่ง
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import getCookies from '../hook/getCookies';
import styled from 'styled-components';
import big_logo from "../pic/big_logo.png";
import {  useNavigate } from "react-router-dom";


import { Link } from "react-router-dom";

const PostJob = () => {



  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    time: '',
    description: '',
    type: '',
    subtype: '',
    location: '',
    workprocess: '',
    examplejob: '',
    fixtime: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    

    if (
      formData.name === '' ||
      formData.price === '' ||
      formData.time === '' ||
      formData.description === '' ||
      formData.type.trim() === '' ||
      formData.type.location === '' ||
      formData.workprocess === '' ||
      formData.examplejob === '' ||
      formData.fixtime === '' ||
      !selectedImage
    ) {
      alert('Please fill in all the required fields.');
      return;
    }

    try {
      const response = await axios.post('https://apathetic-laborer-production.up.railway.app/enterprises', formData);
      console.log('Enterprises created:', response.data);
      const history = {
        enterprise: {
          id: response.data.id
        }
      }
      axios.post('https://apathetic-laborer-production.up.railway.app/historys/enterprise', history);
      console.log('History creacte ',history.data);
      const accoun_id = getCookies('id');

      
      axios.get(`https://apathetic-laborer-production.up.railway.app/api/v1/accounts/list/${accoun_id}`)
        .then((accountResponse) => {
          const accountData = accountResponse.data;
          console.log('Account data retrieved successfully:', accountData);

    
         

          const jobDataToUpdate = {
            id: response.data.id, // Replace with the job ID you want to update
            name: response.data.name,
            price: response.data.price,
            time: response.data.time,
            description: response.data.description,
            type: response.data.type,
            subtype: response.data.subtype,
            location: response.data.location,
            workprocess: response.data.workprocess,
            examplejob: response.data.examplejob,
            fixtime: response.data.fixtime,
            account: {
              accountname: accountData.accountname,
              email: accountData.email,
              password: accountData.password,
              numberCard: accountData.numberCard,
              accountid: accoun_id
            }
          };


          axios.put(`https://apathetic-laborer-production.up.railway.app/enterprises/${jobDataToUpdate.id}`, jobDataToUpdate)
            .then((jobResponse) => {
              console.log('Job updated successfully!', jobResponse.data);
              const updatedJobId = jobResponse.data.id;
             

              if (selectedImage) {
                const formData = new FormData();
                formData.append('image', selectedImage);

                axios.post('https://dapper-advertisement-production.up.railway.app/add', formData)
                  .then(imageResponse => {
                    console.log('Image uploaded successfully.');
                    const imageId = imageResponse.data;
                    console.log(imageId);

                    if (imageId) {
                      const imageFormData = new FormData();
                      imageFormData.append('image', selectedImage);
                      imageFormData.append('imagelocation', updatedJobId);
                      imageFormData.append('name', "enterprises");

                      axios.put(`https://dapper-advertisement-production.up.railway.app/update?id=${imageId}`, imageFormData)
                        .then(response => {
                          console.log('Image updated successfully.');
                          navigate(`/enterprises/${jobDataToUpdate.id}`)
                        })
                        .catch(error => {
                          console.error('Error updating image:', error);
                        });
                    } else {
                      console.error('imageId is null or invalid. Cannot update the image.');
                    }
                  })
                  .catch(error => {
                    console.error('Error uploading image:', error);
                  });
              }
            })
            .catch((jobError) => {
              console.error('Error updating job:', jobError);
            });
        })
        .catch((accountError) => {
          console.error('Error retrieving account data:', accountError);
        });
    } catch (error) {
      console.error('Error creating freelance:', error);
    }

    // Reset the form data here
    setFormData({
      id: '',
      name: '',
      price: '',
      time: '',
      description: '',
      type: '',
      location: '',
      workprocess: '',
      examplejob: '',
      fixtime: '',
    });

    // Clear selectedImage
    setSelectedImage(null);
    
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  return (
    <div className='con' >
      <div class="svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 156 150"
          fill="none"
          class="svg2"
        >
          <ellipse cx="78.0146" cy="75" rx="77.5444" ry="75" fill="#0196FC" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 132 127"
          fill="none"
          class="svg3"
        >
          <ellipse
            cx="65.6543"
            cy="63.5"
            rx="65.6543"
            ry="63.5"
            fill="#0196FC"
          />
        </svg>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="104"
          viewBox="0 0 90 104"
          fill="none"
          class="svg5"
        >
          <ellipse cx="54.2358" cy="52" rx="53.7641" ry="52" fill="#0196FC" />
        </svg>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="132"
          height="127"
          viewBox="0 0 132 127"
          fill="none"
          class="svg7"
        >
          <ellipse
            cx="65.6543"
            cy="63.5"
            rx="65.6543"
            ry="63.5"
            fill="#0196FC"
          />
        </svg>
      </div>
      <div className='postjobdiv1'>
      <div className='postjobdiv2'><p className='textjob1'>Post Job</p></div>
      <Link to="/freelanceform">
      <div className='postjobdiv3'><p className='textjob2'>Post Profile</p></div>
        </Link>
      </div>
      <div className='divpostjob'>
        <h1 style={{
    fontSize: '40px', // Set the font size
  }}>Post job</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: 20}}>
            <label2>Name</label2>
            <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleInputChange}
  placeholder='ชื่องาน'
  style={{
    width: '100%', // Set the width to 100% of its container
    padding: '10px', // Add some padding
    fontSize: '16px', // Set the font size
    borderRadius: '5px', // Add rounded corners
    border: '1px solid #ccc', // Add a border
  }}
/>
          </div>
          <div  style={{ marginTop: 20}}>
            <label2>Price</label2>
            <input
              type="number" min="500"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder='งบประมาณ'
              style={{borderRadius:'5px'}}

            />
          </div>
          <div  style={{ marginTop: 20}}>
            <label2>Number of Day</label2>
            <input
              type="number" min="1"
              name="time" 
              value={formData.time}
              onChange={handleInputChange}
              placeholder='จำนวนวันที่ต้องทำงาน'
              style={{borderRadius:'5px'}}

            />
          </div>
          <div  style={{ marginTop: 20}}>
            <label2>Description</label2>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder='แนะนำตัวเอง ex: ประวัติการทำงาน'
              style={{borderRadius:'5px'}}

            />
          </div>
          <div  style={{ marginTop: 20}}>
            <label2>Workprocess</label2>
            <textarea
              name="workprocess"
              value={formData.workprocess}
              onChange={handleInputChange}
              placeholder='การทำงานของงานนี้คร่าว'
              style={{borderRadius:'5px'}}

            />
          </div>
          <div  style={{ marginTop: 20}}>
            <label2>examplejob</label2>
            <textarea
              name="examplejob"
              value={formData.examplejob}
              onChange={handleInputChange}
              placeholder='ตัวอย่างงาน'
              style={{borderRadius:'5px'}}

            />
          </div>
          <div  style={{ marginTop: 20}}>
            <label2>Fix time</label2>
            <input
              type="number" min="0" max="5"
              name="fixtime"
              value={formData.fixtime}
              onChange={handleInputChange}
              placeholder='จำนวนครั้งในการแก้ไขงาน'
              style={{borderRadius:'5px'}}
            />
          </div >
          <div style={{ marginTop: 20}}>
            <label2>Type:</label2>
            <select
  name="type"
  value={formData.type}
  onChange={handleInputChange}
  style={{
    width: '100%', // Set the width to 100% of its container
    padding: '10px', // Add some padding
    fontSize: '16px', // Set the font size
    borderRadius: '5px', // Add rounded corners
    border: '0px', // Add a border
    backgroundColor: '#0196FC',
    color: '#FFFFFF',
    marginTop:'10px'
    
  }}
>
  <option value=" ">Select Type</option>
  <option value="develop">Develop</option>
  <option value="graphic">Graphic</option>
  <option value="music">Music</option>
</select>
          </div>
          {formData.type === 'develop' && (
            <>
              <label2>Subtype for develop:</label2>
              <select
  name="subtype"
  value={formData.subtype}
  onChange={handleInputChange}
  style={{
    width: '100%', // Set the width to 100% of its container
    padding: '10px', // Add some padding
    fontSize: '16px', // Set the font size
    borderRadius: '5px', // Add rounded corners
    border: '0px', // Add a border
    backgroundColor: '#0196FC',
    color: '#FFFFFF',
    marginTop:'10px'

  }}
>
  <option value=" ">Select Type</option>
  <option value="web">Web</option>
  <option value="mobile">Mobile</option>
  <option value="desktop">Desktop</option>
</select>

            </>
          )}
          {formData.type === 'graphic' && (
            <>
              <label2>Subtype for graphic:</label2>
              <select
  name="subtype"
  value={formData.subtype}
  onChange={handleInputChange}
  style={{
    width: '100%', // Set the width to 100% of its container
    padding: '10px', // Add some padding
    fontSize: '16px', // Set the font size
    borderRadius: '5px', // Add rounded corners
    border: '0px', // Add a border
    backgroundColor: '#0196FC',
    color: '#FFFFFF',
    marginTop:'10px'

  }}
>
  <option value=" ">Select Type</option>
  <option value="logos">Logo Design</option>
  <option value="sticker">Sticker Design</option>
  <option value="character">Character Design</option>
  <option value="draw-cartoon">Draw Cartoons</option>
  <option value="3d-models">3D Models</option>
  <option value="banner">Banner Advertising Design</option>
</select>

            </>
          )}
          {formData.type === 'music' && (
            <>
              <label2>Subtype for music:</label2>
              <select
  name="subtype"
  value={formData.subtype}
  onChange={handleInputChange}
  style={{
    width: '100%', // Set the width to 100% of its container
    padding: '10px', // Add some padding
    fontSize: '16px', // Set the font size
    borderRadius: '5px', // Add rounded corners
    border: '0px', // Add a border
    backgroundColor: '#0196FC',
    color: '#FFFFFF',
    marginTop:'10px'

  }}
>
  <option value=" ">Select Type</option>
  <option value="beat">Beat</option>
</select>

            </>
          )}

          <div>
            <label2>Location:</label2>
            <select
  name="location"
  value={formData.location}
  onChange={handleInputChange}
  style={{
    width: '100%', // Set the width to 100% of its container
    padding: '10px', // Add some padding
    fontSize: '16px', // Set the font size
    borderRadius: '5px', // Add rounded corners
    border: '0px', // Add a border
    backgroundColor: '#0196FC',
    color: '#FFFFFF',
    marginTop:'10px'
    // Add any other styles you want here
  }}
>
  <option value=" ">Select Location</option>
  <option value="onsite">Onsite</option>
  <option value="online">Online</option>
</select>

          </div>

 

          <div >
            <input type="file" onChange={handleImageChange} style={{marginTop:'20px',borderRadius:'5px'}}/>
          </div>
          <div style={{ textAlign: "center" }}>

            <Button variant="success" type="submit" className="custom-button" style={{ width: 150,marginTop:'20px' }} >Submit</Button>
          </div>
        </form>
        </div>
      <footer>
        <div class="footer-content" style={{marginTop:'1800px'}}>
          <img src={big_logo} alt="" className="big_logofooter" />
         
        </div>
      </footer>
    </div >
    
  );
}



export default styled(PostJob)`

`;