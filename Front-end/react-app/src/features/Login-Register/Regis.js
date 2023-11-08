import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import mlogo from "../pic/mini_logo.png";
import blogo from "../pic/big_logo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../chatSystem/firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useCookies } from 'react-cookie';
function Register({ className }) {
  const [accountname, setAccountname] = useState("");
  const [email, setEmail] = useState("");
  const [numberCard, setnumberCard] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const namePattern = /^[A-Za-z\s]+$/; // Allows only letters and spaces
  const emailPattern = /.*@gmail\.com$/;
  const passwordPattern = /^.{6,}$/;
  const numberCardPattern = /^\d{13}$/;
  const validateForm = () => {
    return (
      accountname.length > 0 &&
      email.length > 0 &&
      numberCard.length > 0 &&
      password.length > 0 &&
      selectedImage
    );
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const validateForm2 = () => {
    const validName = namePattern.test(accountname);
    const validEmail = emailPattern.test(email);
    const validPassword = passwordPattern.test(password);
    const validnumbercard = numberCardPattern.test(numberCard);

    return validName && validEmail && validnumbercard && validPassword;
  };

  async function save(event) {
    event.preventDefault();


    const isFormValid = validateForm();

    if (!isFormValid) {
      setErrorMessage("Please fill out all fields.");
      return;
    }
    const isFormValid2 = validateForm2(); // Define isFormValid2 here

    if (!isFormValid2) {
      setErrorMessage("Please fill out all fields correctly.");
      return;
    }

    try {
      const loginResponse = await axios.post("https://smart-egg-production.up.railway.app/api/v1/accounts/save", {
        accountname: accountname,
        email: email,
        numberCard: numberCard,
        password: password,
      });

      console.log(loginResponse.data.email)

      const accountsResponse = await axios.get("https://smart-egg-production.up.railway.app/api/v1/accounts/list");
      console.log(accountsResponse.data)
      const accounts = accountsResponse.data;
      const accountWithMatchingEmail = accounts.find((account) => account.email === email);
      let id_image_regis;
      if (accountWithMatchingEmail) {
        id_image_regis = accountWithMatchingEmail.accountid;
        console.log(id_image_regis)
      }


      try {
        if (id_image_regis) {
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
                  imageFormData.append('imagelocation', id_image_regis);
                  imageFormData.append('name', "account");

                  axios.put(`https://domineering-hobbies-production.up.railway.app/update?id=${imageId}`, imageFormData)
                    .then(response => {
                      console.log('Image updated successfully.');
                      setCookie("image_id", imageId)
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

        } else {
          console.error('Account ID is undefined');
        }
      } catch (error) {
        console.error('Error updating account:', error);
      }


      alert("Account Registration Successful");
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setErrorMessage(err.response.data);
      } else {
        console.error(err);
      }
    }

    const displayName = accountname; // Use the state variables directly
    const userEmail = email;
    const userPassword = password;

    /*------ fierbase ------*/
    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, userEmail, userPassword);

      // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      // Upload the image
      await uploadBytesResumable(storageRef).then(async () => {
        try {
          // Update profile
          await updateProfile(res.user, {
            displayName,
          });

          // Create user on firestore
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
          });

          // Create empty user chats on firestore
          await setDoc(doc(db, "userChats", res.user.uid), {});
          navigate("/");
        } catch (err) {
          console.log(err);

        }
      });
    } catch (err) {

    }

  }



  return (
    <div>
      
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
          width="156"
          height="150"
          viewBox="0 0 156 150"
          fill="none"
          class="svg4"
        >
          <ellipse cx="78.186" cy="75" rx="77.5444" ry="75" fill="#0196FC" />
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
          width="290.533px"
          height="600"
          viewBox="0 0 156 190"
          fill="none"
          class="svg6"
        >
          <ellipse cx="78.186" cy="75" rx="77.5444" ry="75" fill="#0196FC" />
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
      <div className="app-container" > 
        <a href="/">
          <img src={mlogo} alt="" className="homelogo" />
        </a>
      </div>
      <div class="containermt-4">
        <div class="card">
          <div className="biglogo-container">
            <img src={blogo} alt="โลโก้" className="big-logo" />
          </div>
          <a href="/register"  className="regtext">Register</a>
          <a href="/login" className="logintext"style={{}}>Login</a>
          
          {errorMessage && (
            <div className="alert alert-danger" style={{marginTop:'10px'}}>{errorMessage}</div>
          )}
          {/* <Link to="/login">
            <a className="alogin">Login</a>
          </Link> */}
          <div className="form-container">
            <form >
              <div class="form-group">
                {/* <label className="form-text">Employee name</label> */}
                <input
                  type="text"
                  class="form-control"
                  id="employeename"
                  placeholder="Name"
                  value={accountname}
                  onChange={(event) => {
                    setAccountname(event.target.value);
                  }}
                  required
                />
              </div>
              <div class="form-group">
                {/* <label className="form-text">email</label> */}
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email : example@gmail.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  required
                />
              </div>

              <div class="form-group">
                {/* <label className="form-text">numberCard</label> */}
                <input
                  type="text"
                  class="form-control"
                  id="idcard"
                  placeholder="IDCard 13 characters"
                  value={numberCard}
                  onChange={(event) => {
                    setnumberCard(event.target.value);
                  }}
                  required
                />
              </div>

              <div class="form-group">
                {/* <label className="form-text">password</label> */}
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password 6 characters"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                />
              </div>
              <label className="form-text" style={{marginLeft : 50,marginTop:'100px',marginBottom:'-25px'}}>Image Profile</label>
              <div class="form-file" >
                <input type="file" className="file" onChange={handleImageChange}  style={{padding:'20px',borderRadius:'5px',backgroundColor:'#e9ecef',marginTop:'10px'}}/>
              </div>

              <div class="btnrge">
                <buttonrge
                  type="submit"
                  class="btn btn-primary mt-4 btn-large"
                  onClick={save}
                >
                  Register
                </buttonrge>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Register)`
@media (max-width: 600px) {
  .svg-container {
    display: none;
    flex-wrap: wrap;
  }
  
  .svg-container svg {
    width: 10%;
    height: 10%;
    
  }
  svg{
    position:absolute;
    
  }
  .svg2{
    height: auto;
    margin-top: 10%;
  }
  .svg3{
    margin-top: 35%;
    margin-left: 3%;
  }
  .svg4{
    margin-top: 20%;
    margin-left: 65%;
  }
  .svg5{

    margin-top: 30%;
    margin-left: 80%;
  }
  .svg6{
    margin-top: 30%;
    margin-left: 20%;
  }
  .svg7{
    margin-top: -3%;
    margin-left: 70%;
  }
  .logintext:hover{
    color: black;
  }
  
}
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 0;
`;


