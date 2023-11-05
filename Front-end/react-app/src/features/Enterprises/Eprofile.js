import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import bg2 from "../pic/bg2.jpg";
import user1 from "../pic/woman.jpg";
import star from "../pic/star.png";
import getCookies from '../hook/getCookies';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col, Card, Button, CardBody } from 'react-bootstrap';
import { useCookies } from 'react-cookie';


function Eprofile({ className }) {
  const [workData, setWorkData] = useState([]);
  const [id, setId] = useState();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [formData, setFormData] = useState({
    accountid: '',
    accountname: '',
    descrip: '',
    email: '',
  });

  const [userdata, setUserdata] = useState(
    {
      username : '',
      description : '',
      rating : 0,
    }
  );

  const [userName, setuserName] = useState();
  

  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    const setIdFromCookies = getCookies('id');
    setFormData({
      ...formData,
      accountid: setIdFromCookies,
    });
    setId(setIdFromCookies);

    // Make sure to include id in the dependency array to trigger the effect when id changes.
    axios.get(`http://localhost:8085/api/v1/accounts/list/${setIdFromCookies}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching Account data:', error);
      });
  }, [id]);


  useEffect(() => {
    setuserName(getCookies('username'));

    // const usernameFromCookies = getCookies("username");
    // setUserdata({ ...userdata, "username": usernameFromCookies });

   const account_id = getCookies('id');
    axios
      .get(`http://localhost:8085/api/v1/accounts/list/${account_id}`)
      .then(response => {

        setUserdata({ ...userdata, description: response.data.descrip });
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);


  const [image, setImage] = useState(null);
  const imagelocation = getCookies("id");
  useEffect(() => {
    
    axios.get(`http://localhost:2023/getByNameAndImagelocation/account/${imagelocation}`, { responseType: 'arraybuffer' })
      .then(response => {
        const base64 = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        const imageSrc = `data:image/jpeg;base64,${base64}`;
        setImage(imageSrc);
       
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, []);

  useEffect(() => {
    const idFromCookies = getCookies("id");
  
    axios
      .get(`http://localhost:8082/historys/freelance`)
      
      .then((response) => {
        if (Array.isArray(response.data)) {
          const filteredData = response.data.filter((item) => item.account && item.account.accountid == idFromCookies);
          console.log('History', filteredData);
  
          setWorkData(filteredData);
          // Handle the filtered data here
        } else {
          console.error('Response data is not an array');
        }
      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const account_id = id;


    try {
      if (account_id) {
        axios.put(`http://localhost:8085/api/v1/accounts/list/${account_id}`, formData)
          .then((accountResponse) => {
            console.log('Account updated successfully!', accountResponse.data);
            console.log(formData);
            setCookie('username', formData.accountname);
            setCookie('email', formData.email);
            

            setSuccessMessage('Account updated successfully'); // Set the success message
            window.location.reload();
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
                    imageFormData.append('imagelocation', account_id);
                    imageFormData.append('name', "account");

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
          .catch((error) => {
            console.error('Error updating', error.message);
          });
      } else {
        console.error('Account ID is undefined');
      }
    } catch (error) {
      console.error('Error updating account:', error);
    }
  };


  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };


  return (
    <div className={className}>
  
      <img src={bg2} alt="" className="bg1" />
      <div className='container'>
      <div className="c1">
        <div className='container-profile'>
          <img src={image} alt="" className="user1" />
          <div class="overlay"><Link to="/editprofile/:id" className='link-edit'>Edit Profile</Link></div>
        </div>
        <div className="username">{userName} </div>

       

        <div className="phead1">Description
        <div className="pbody1">
       {userdata.description} 
       </div>
        </div>

<div className='edit'><Link to="/editprofile/:id" className='link-edit'>Edit Profile</Link></div>
      </div>

      <div className='block-work-review'>
      <div className='block-work-of'>
      <div className='head-band'>
        <h3 >Work of {userName}</h3>
        <Link to="/editprofile" className='link-history'>PRESS TO SEE MORE HISTORY</Link>
        </div>

  

{/* fetch from database that user worked  */}
<div className='content-work'>
  {workData.slice(0, 5).map((item ) => (
    <Card className='card-history' >
      <CardBody>
        <Card.Title><strong>Name : </strong> {item.enterprise.name}</Card.Title>
        <Card.Text><strong>Type : </strong> {item.enterprise.type}</Card.Text>
        <Card.Text><strong>Price : </strong> {item.enterprise.price}</Card.Text>
        <Card.Text><strong>Description : </strong> {item.enterprise.description}</Card.Text>
        <Card.Text><strong>Owner : </strong> {item.enterprise.account.accountname}</Card.Text>
        {/* Add more properties as needed */}
      </CardBody>
    </Card>
  ))}
</div>






      </div>


      </div>

      
  
      </div>
      
    </div>
  );
}

Eprofile.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Eprofile)`

.edit .link-edit{
  color:#9c9c9c;
}
.edit .link-edit:hover{
  color:#0196fc;
}


  .success-message {
    color: green;
    margin-top: 10px;
    text-align: center;
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


.card-history{
font-size:16px;
background-color:#0196FC;
color:white;
width: 250px;
align-items:center;
margin-right:10px;
}

 text-align: center;
 .content-work {
  display:flex;
  flex-direction: row;
  margin-top:40px;
top:60%;
width: 1300px;
height: 240px;
  padding: 10px;
  
  overflow:auto;
}

.block-work-of{
    
    overflow:auto;
   

    width: 600px;
    height: 300px ;
    border-radius: 10px;
    background: #fff;

  }

.container-work p{
  color: red;
}

.content-work div {
  margin-bottom: 10px;
}
 .container{
  display: flex;
  flex-direction:row;
 }
.container-profile {
 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 15px 43px;
  position: relative;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  overflow: hidden;
}
.block-work-review{
  position: absolute;
  
    margin-top:10px ;
    width: auto;
   
    border-radius: 10px;
    background: #fff;
   display:flex;
   flex-direction: column;
    margin-left: 38%;
    top: 65%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.head-band{
display: flex;
flex-direction:column;
}
.head-band .link-history{
  margin-left:5px;
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
.c1{
    width: 280px;
    height: auto;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    margin-left: 10%;
    top: 20%;
  }
  .c1-fix{
    width: 293px;
    height: 700px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  }
  .head-band{
    position: absolute;
  }

  .block-work-of h3 {
    text-align: start;
    width: auto;
  margin-left:5px ;
  margin-bottom:0;
   font-size: 25px;
  }
  .block-work-of .link-history {
    text-align: start;
    width: auto;

   color: #9c9c9c;
   font-size: 10px;
   text-decoration: underline;
  }
 .link-history:hover{
  color:#0196fc ;
 }
  .username{
    margin:20px 20px 0px 20px;
    font-size:30px;
    color:#0196FC;
  }
  .edit{
   
    
    color:#808080;
    font-size:20px;
    text-decoration: underline;
  }
  .edit:hover{
    color:#0196fc ;
  }
  .star{
    max-width:30px;
    margin-left:70px;
  }
  .rating{
    color:#FFC107;
    font-size:20px;
    position: absolute; 
    margin-left:100px;

  }
  .c2{
    margin-top:10px ;
    width: 500px;
    height: 700px;
    border-radius: 10px;
    background: #fff;
    position: absolute;
    margin-left: 40%;
    top: 60%;
  }
  .c3{
    width: 500px;
    height: 700px;
    border-radius: 10px;
    background: #fff;
    position: absolute;
    margin-left: 57%;
    top: 60%;
  }
  .phead1{
    margin-top:30px;
    font-size:30px;
    color:#0196FC;
    font-weight: bold;
  }
  .pbody1{
    margin:10px 20px 20px 20px;
    color:#969696;
    font-size:18px;
    margin-bottom:20%;
    word-wrap: break-word; 
    height:200px;
  
    overflow:auto;
  }
  
  .phead2{
    font-size:30px;
    color:#000000;
    font-weight: bold;
    text-align: left;
  }
  .block-review{
    border:1px solid black;
    width: 500px;
    height: 700px;
    border-radius: 10px;
    background: #fff;
    display:flex;
    flex-direction: column;

  
  }
  .pbody21{
    font-size:15px;
    color:#959595;
    text-align: left;
  }
  .whead{
    font-size:20px;
    color:#000000;
    text-align: left; 
    font-weight: bold;
    margin-left: 10%;
    margin-top: 50%;
  }
  .wbody{
    font-size:12px;
    color:#959595;
    text-align: left; 
    font-weight: bold;
    margin:0% 10% 10% 10%;

  }
  .wfoot {
    border-radius: 0px 0px 10px 10px;
    background: #0196FC;
    width: 300px;
    height: 30px;
    position: absolute;
    bottom: 0;
  }
  
  .workcon {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    background: #fff;
    position: absolute;
    top: 12%;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  }
  .wfootname {
    font-size: 15px;
  color: #fff;
  margin: 5px;
  display: inline-block;
  }
  .review{
    font-size:30px;
    color:#000000;
    font-weight: bold;
    position: absolute;
    margin-left: 40%;
    margin-top: 24%;
  }
  .reviewcon{
    width: 700px;
    height: 100px;
    border-radius: 10px;
    background: #fff;
    position: absolute;
    margin-left: 40%;
    margin-top: 27%;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  }
  .reviewname{
    font-size: 25px;
    position: absolute;
    margin: 20px 15px 15px 14%;
    color:#0071BE;
    font-weight: bold;
  }
  .reviewpro{
    max-width: 70px;
    margin: 15px 15px 15px 15px;
    position: absolute;
    left:0;

  }
  .reviewbody{
    font-size: 15px;
    position: absolute;
    margin: 60px 15px 15px 14%;
    color:#000000;
  }
  .reviewstar{
    max-width: 30px;
    position: absolute;
    margin: 40px 15px 15px 43%;
  }
  .reviewscore{
    font-size: 25px;
    position: absolute;
    margin: 40px 15px 20px 87%;
    color:#FFC107;
    font-weight: bold;
  }
.footer-content{
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 500px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    margin:2600px 0px 0px 0px;
}
.big_logofooter{
  max-width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.footertext1{
  margin: 400px 0px 0px 50px;
  padding-bottom:50px;
  color: #9C9C9C;
font-family: Bebas Neue;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 30px */
letter-spacing: -0.22px;
}
 .bg1{
 height:350px ;
}
.review{
  border:1PX solid BLACK ;
  margin-top: 10px ;
  margin-left:0;
}
.review h3{
  text-align: start;
    width: auto;
  margin-left:5px ;
  margin-bottom:0;
   font-size: 25px;
}
.review-comment{
  border:1px solid black ;
  width: 100%;
  height:300px ;
  margin-top:45px ;
}
`;
