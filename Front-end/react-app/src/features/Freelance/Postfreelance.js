import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import getCookies from '../hook/getCookies';
import styled from 'styled-components';
import big_logo from "../pic/big_logo.png";
import bg1 from "../pic/bg1.jpg";

const PostFreelanceContainer = styled.div`
  margin: 50px 400px 0px 400px;
  .custom-button {
    margin-top: 30px;
  }
  input[type="file"] {
    font-size: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 20px;
  }
  select {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  label {
    font-size: 20px;
    margin-top: 20px;
  }
  textarea {
    width: 100%;
    height: 100px;
    font-size: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
  }
`;

const PostFreelance = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    time: '',
    description: '',
    type: '',
    subtype: '',
    companyName: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.name === '' ||
      formData.price === '' ||
      formData.time === '' ||
      formData.description === '' ||
      formData.type.trim() === '' ||
      formData.subtype === '' ||
      formData.companyName === '' ||
      !selectedImage
    ) {
      alert('Please fill in all the required fields.');
      return;
    }

    try {
      const response = await axios.post('https://smart-egg-production.up.railway.app/freelances', formData);
      console.log('Freelance created:', response.data);

      const accoun_id = getCookies('id');
      axios.get(`https://smart-egg-production.up.railway.app/api/v1/accounts/list/${accoun_id}`)
        .then((accountResponse) => {
          const accountData = accountResponse.data;
          console.log('Account data retrieved successfully:', accountData);

          const jobDataToUpdate = {
            id: response.data.id,
            name: response.data.name,
            price: response.data.price,
            time: response.data.time,
            description: response.data.description,
            type: response.data.type,
            subtype: response.data.subtype,
            companyName: response.data.companyName,
            account: {
              accountname: accountData.accountname,
              email: accountData.email,
              password: accountData.password,
              numberCard: accountData.numberCard,
              accountid: accoun_id
            }
          };

          axios.put(`https://smart-egg-production.up.railway.app/freelances/${jobDataToUpdate.id}`, jobDataToUpdate)
            .then((jobResponse) => {
              console.log('Job updated successfully!', jobResponse.data);
              const updatedJobId = jobResponse.data.id;

              if (selectedImage) {
                const formData = new FormData();
                formData.append('image', selectedImage);
                  axios.post('https://domineering-hobbies-production.up.railway.app/add', formData)
                  .then(imageResponse => {
                    console.log('Image uploaded successfully.');
                    const imageId = imageResponse.data;
                    console.log(imageId);

                    if (imageId) {
                      const imageFormData = new FormData();
                      imageFormData.append('image', selectedImage);
                      imageFormData.append('imagelocation', updatedJobId);
                      imageFormData.append('name', "freelance");

                      axios.put(`https://domineering-hobbies-production.up.railway.app/update?id=${imageId}`, imageFormData)
                        .then(response => {
                          console.log('Image updated successfully.');
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

    setFormData({
      id: '',
      name: '',
      price: '',
      time: '',
      description: '',
      type: '',
      subtype: '',
      companyName: '',
    });

    setSelectedImage(null);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  return (
    <div>
      <PostJobContainer style={{marginLeft:'25%'}}>
      <h2 className="h2postfreelance" style={{color: '#0071BE',fontSize:'80px'}}>From for enterprise</h2>
        <h2 style={{ marginTop: 20,color: '#9C9C9C',fontSize:'30px' }}>Post a job to find freelancers to work for us.</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: 20}}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder='ชื่อ'
            />
          </div>
          <div style={{ marginTop: 20}}>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder='แนะนำบริษัท ex: ประวัติการทำงาน เคยร่วมงานกับใครมาบ้าง'
            />
          </div>
          <div style={{ marginTop: 10}}>
            <label>Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
            >
              <option value=" ">Select Type</option>
              <option value="develop">Develop</option>
              <option value="graphic">Graphic</option>
              <option value="music">Music</option>
            </select>
          </div>
          {formData.type === 'develop' && (
            <>
              <label>Subtype for develop:</label>
              <select
                name="subtype"
                value={formData.subtype}
                onChange={handleInputChange}
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
              <label>Subtype for graphic:</label>
              <select
                name="subtype"
                value={formData.subtype}
                onChange={handleInputChange}
              >
                <option value=" ">Select Type</option>
                <option value="logos">Logo Design</option>
                <option value="sticker">Sticker Design</option>
                <option value="character">Character Design</option>
                <option value="draw-cartoon">Draw cartoons</option>
                <option value="3d-models">3D Models</option>
                <option value="banner">Banner advertising design</option>
              </select>
            </>
          )}
          {formData.type === 'music' && (
            <>
              <label>Subtype for music:</label>
              <select
                name="subtype"
                value={formData.subtype}
                onChange={handleInputChange}
              >
                <option value=" ">Select Type</option>
                <option value="beat">Beat</option>
              </select>
            </>
          )}

          <div style={{ marginTop: 20}}>
            <label>Price</label>
            <input
              type="number" min="500"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder='ราคางานที่ต้องการ'
            />
          </div>
          <div style={{ marginTop: 20}}>
            <label>Number of Day</label>
            <input
              type="number" min="1"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              placeholder='จำนวนวันที่สามารถทำงานได้'
              
            />
          </div>
          <div style={{ marginTop: 20}}>
            <label>companyName</label>
            <textarea
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder='กรอกชื่อบริษัท หรือ สถานที่ทำงาน ex.ไทยจำกัด ถนน.XXX ต.XXX อ.XXX จ.XXX'
            />
          </div>

          <div style={{ marginTop: 20}}>
            <input type="file" onChange={handleImageChange} />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button variant="success" type="submit" className="custom-button" style={{ width: 150 }}>Submit</Button>
          </div>
        </form>
      </PostJobContainer>
      <footer >
        <div class="footer-content" style={{ marginTop: '1800px' }}>
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
const PostJobContainer = styled.div`
margin:50px 400px 50px 400px;
.custom-button {
  margin-top: 30px;
  margin-bottom: 100px;
}
input[type="file"] {
  font-size: 16px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 20px;
}

select {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
}
  h2 {
    margin-top: 60px;
    color: #ccc;
    font-size: 80px;
  }

  p {
    color: #9C9C9C;
    font-size: 40px;
    
  }
  label{
    font-size: 20px;
    margin-top: 20px;
    display: none;
  }
  textarea {
    width: 100%;
    height: 100px;
    font-size: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
  }
`;
export default styled(PostFreelance)`

`;
