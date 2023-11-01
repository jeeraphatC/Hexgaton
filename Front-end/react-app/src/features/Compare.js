import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import search from "./pic/search.png";
import astronaut from "./pic/astronaut.png";
import bgcom from "./pic/bgcom.jpg";

class UserData {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.type = data.type;
  }
}

function Compare({ className }) {
  const [userId1, setUserId1] = useState(""); 
  const [userId2, setUserId2] = useState(""); 
  const [userData1, setUserData1] = useState(null); 
  const [userData2, setUserData2] = useState(null); 
  const [showClearButton, setShowClearButton] = useState(false);

  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (!userId1) {
      alert("Please enter Job 1 ID");
      return;
    }

    fetch(`http://localhost:8090/enterprises/${userId1}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then((data) => {
        const user1 = new UserData(data);
        user1.time = data.time;
        user1.price = data.price;
        user1.description = data.type;
        setUserData1(user1);
        setShowClearButton(true);
      })
      .catch((error) => {
        alert(error.message);
        console.error("Error:", error);
      });
  };
  
  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (!userId2) {
      alert("Please enter Job 2 ID");
      return;
    }

    fetch(`http://localhost:8090/enterprises/${userId2}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then((data) => {
        const user2 = new UserData(data);
        user2.time = data.time;
        user2.price = data.price;
        user2.description = data.type;
        setUserData2(user2);
        setShowClearButton(true);
      })
      .catch((error) => {
        alert(error.message);
        console.error("Error:", error);
      });
  };

  const handleClear = () => {
    setUserId1("");
    setUserId2("");
    setUserData1(null);
    setUserData2(null);
    setShowClearButton(false);
  };

  return (
    <div className={className}>
      <img src={bgcom} alt="" className="bgcom" />
      <h1>Compare jobs for freelane</h1>
      <h3>Freelancers can compare jobs to make a decision.</h3>
      <div className="formcon">
        <form onSubmit={handleSubmit1}>
          <input
            type="text"
            value={userId1}
            onChange={(e) => setUserId1(e.target.value)}
            placeholder="Enter Job 1 ID"
            required
          />
          <button type="submit">Add job</button>
        </form>
        <form onSubmit={handleSubmit2}>
          <input
            type="text"
            value={userId2}
            onChange={(e) => setUserId2(e.target.value)}
            placeholder="Enter Job 2 ID"
            required
          />
          <button type="submit">Add job</button>
        </form>
        
        {userData1 && (
          <div>
            <div className="userContentContainer1">
              <h2 className="userDataName">{userData1.name}</h2>
            </div>
            <div className="FirstDataContainer1">
              <h3 className="datacontent">Time</h3>
              <h3 className="data1">{userData1.time}</h3>
            </div>
            <div className="FirstDataContainer2">
              <h3 className="datacontent">Budget</h3>
              <h3 className="data1">{userData1.price}</h3>
            </div>
            <div className="FirstDataContainer3">
              <h3 className="datacontent2">Type</h3>
              <h3 className="data1">{userData1.type}</h3>
            </div>
          </div>
        )}
      </div>

      {userData2 && (
        <div>
          <div className="userContentContainer2">
            <h2 className="userDataName2">{userData2.name}</h2>
          </div>
          <div className="SecondDataContainer1">
            <h3 className="data2">{userData2.time}</h3>
          </div>
          <div className="SecondDataContainer2">
            <h3 className="data2">{userData2.price}</h3>
          </div>
          <div className="SecondDataContainer3">
            <h3 className="data2">{userData2.type}</h3>
          </div>
        </div>
      )}

      {showClearButton && (
        <button className="clearbtn"onClick={handleClear}>Clear</button>
      )}
    </div>
  );
}

Compare.propTypes = {
  className: PropTypes.string.isRequired,
};


export default styled(Compare)`
.clearbtn{
  background-color:red;
  position: absolute;
  top: 620px;
  left: 70px;
  padding: 8px 40px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}
.clearbtn:hover{
box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
background-color:grey;
}
.datacontent2{
  color: #FFF;
font-size: 40px;
font-weight: 400;
margin:19px 0 0 -270px;
}
.SecondDataContainer3{
  position: absolute;
  border-radius: 10px;
  background: #0196FC;
  top: 1250px;
  left: 1150px;
  transform: translate(-50%, -50%);
  width: 773px;
  height: 93px;
  z-index:-1;
  margin-top: 120px;
}
.FirstDataContainer3{
  position: absolute;
  border-radius: 10px 0px 0px 10px;
  background: #0071BE;
  top: 1250px;
  left: 600px;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 93px;
  margin-top: 120px;
}
.SecondDataContainer2{
  position: absolute;
  border-radius: 10px;
  background: #0196FC;
  top: 1100px;
  left: 1150px;
  transform: translate(-50%, -50%);
  width: 773px;
  height: 93px;
  z-index:-1;
  margin-top: 120px;
}
.FirstDataContainer2{
  position: absolute;
  border-radius: 10px 0px 0px 10px;
  background: #0071BE;
  top: 1100px;
  left: 600px;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 93px;
  margin-top: 120px;
}
.data2{
  color: #FFF;
font-size: 40px;
font-weight: 400;
margin:19px 0 0 40px;
}
.SecondDataContainer1{
  position: absolute;
  border-radius: 10px;
  background: #0196FC;
  top: 950px;
  left: 1150px;
  transform: translate(-50%, -50%);
  width: 773px;
  height: 93px;
  z-index:-1;
  margin-top: 120px;
}
.data1{
  color: #FFF;
font-size: 40px;
font-weight: 400;
margin:19px 0 0 100px;
}
.datacontent{
  color: #FFF;
font-size: 40px;
font-weight: 400;
margin:19px 0 0 -300px;
}
.FirstDataContainer1{
  position: absolute;
  border-radius: 10px 0px 0px 10px;
  background: #0071BE;
  top: 950px;
  left: 600px;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 93px;
  margin-top: 120px;
}
  h3 {
    margin: auto;
    margin-top: 15px;
    position: absolute;
    color: #0196FC;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 30px;
  }

  h1 {
    margin: auto;
    position: absolute;
    color: white;
    top: 27%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 100px;
  }

  .formcon {
    text-align: center;
    margin-top: 120px;
  }

  form {
    display: inline-block;
    vertical-align: top;
    margin: 0 150px;
  }

  input {
    padding: 20px 30px;
    margin-right: 10px;
    border-radius: 10px;
    color: #0196FC;
    font-size: 23px;
  }
  input:hover{
    box-shadow: 0px 3px px 0px rgba(0, 0, 0, 0.25);
  }

  .bgcom {
    height: 600px;
    width: 100%;
  }

  button {
    margin-top: 20px;
    padding: 8px 40px;
    font-size: 16px;
    cursor: pointer;
    background-color:#0196FC;
    color: white;
    border-radius: 10px;

  }

  .userContentContainer1 {
    top: 800px;
    left: 700px;
    transform: translate(-50%, -50%);
    margin: 20px;
    position: absolute;
  }
  .userContentContainer2 {
    top: 800px;
    left: 1170px;
    transform: translate(-50%, -50%);
    margin: 20px;
    position: absolute;
  }
  .userDataName{
    font-size: 50px;
    color: #0071BE;
    font-weight: 400;
    margin-top: 250px;
  }
  .userDataName2{
    font-size: 50px;
    color: #0196FC;
    font-weight: 400;
    margin-top: 250px;
  }
`;
