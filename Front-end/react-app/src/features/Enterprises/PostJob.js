import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import getCookies from '../hook/getCookies';
import styled from 'styled-components';
const PostJob = () => {
  const [formData, setFormData] = useState({
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
      formData.type.location === ''||
      formData.workprocess === '' ||
      formData.examplejob === '' ||
      formData.fixtime === ''
    ) {
      alert('Please fill in all the required fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8090/enterprises', formData);
      console.log('Freelance created:', response.data);

      const accoun_id = getCookies('id');
      axios.get(`http://localhost:8085/api/v1/accounts/list/${accoun_id}`)
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


          axios.put(`http://localhost:8090/enterprises/${jobDataToUpdate.id}`, jobDataToUpdate)
            .then((jobResponse) => {
              console.log('Job updated successfully!', jobResponse.data);
              const updatedJobId = jobResponse.data.id;
              window.location.href = '/';

              if (selectedImage) {
                const formData = new FormData();
                formData.append('image', selectedImage);

                axios.post('http://localhost:2023/add', formData)
                  .then(imageResponse => {
                    console.log('Image uploaded successfully.');
                    const imageId = imageResponse.data;
                    console.log(imageId);

                    if (imageId) {
                      const imageFormData = new FormData();
                      imageFormData.append('image', selectedImage);
                      imageFormData.append('imagelocation', updatedJobId);
                      imageFormData.append('name', "enterprises");

                      axios.put(`http://localhost:2023/update?id=${imageId}`, imageFormData)
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
    <div >
      <PostJobContainer>

        <h2 style={{ marginTop: 60, }}>Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number" min="1"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Number of Day:</label>
            <input
              type="number"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Workprocess:</label>
            <textarea
              name="workprocess"
              value={formData.workprocess}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>examplejob:</label>
            <textarea
              name="examplejob"
              value={formData.examplejob}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Fix time:</label>
            <input
              type="number"
              name="fixtime"
              value={formData.fixtime}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Type:</label>
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
          <div>
            <label>Location:</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            >
              <option value=" ">Select Location</option>
              <option value="onsite">onsite</option>
              <option value="online">online</option>
            </select>
          </div>
          <div >
            <input type="file" onChange={handleImageChange} />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button variant="success" type="submit" className="custom-button" style={{ width: 150 }}>Submit</Button>
          </div>
        </form>
        </PostJobContainer>
    </div >
  );
}

const PostJobContainer = styled.div`
margin:50px 400px 0px 400px;
.custom-button {
  margin-top: 30px;
  margin-left: 900px;
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
  h2 {
    margin-top: 60px;
    color: #0196FC;
    font-size: 80px;
  }

  p {
    color: #9C9C9C;
    font-size: 50px;
    
  }
  label{
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

export default styled(PostJob)``;