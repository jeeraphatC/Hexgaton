import React, { useEffect, useState } from 'react';
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import { useLocation } from 'react-router-dom';
import { Cookies, useCookies } from 'react-cookie';
import getCookies from './hook/getCookies';
import styled from 'styled-components';
import big_logo from "./pic/big_logo.png";
import PropTypes from 'prop-types' ;
var stompClient =null;
const ChatRoom = ({ className }) => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [privateChats, setPrivateChats] = useState(new Map());     
    const [publicChats, setPublicChats] = useState([]); 
    const [tab,setTab] =useState("CHATROOM");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState({
        username: '',
        receivername: '',
        connected: isLoggedIn,
        message: ''
      });

    const [userWithChat,setuserWithChat] = useState({
        username: '',
        receivername:'',
        connected: isLoggedIn,
        message: ''
    });
    const [chatConnect,setChatConnect] = useState(false);

      const location = useLocation();
      const email = location.state?.email || 'guest';
      const [chatTo,setchatTo] = useState('');


      
      // useEffect(() => {
      //   // Get the username from the cookie
      //   userData.username = getCookies('username');
      //   if (username) {
      //     setUserData.username(username);
      //   }
    
      // }, [userData.username]);

//       useEffect(() => {
//         // Get the username from the cookie
//         const usernameFromCookie = getCookies('username');
//         const chatIsTrue = getCookies('connectChat');
//         setChatConnect(chatIsTrue);
//         console.log(chatConnect);
//         if (usernameFromCookie) {
//           handleUsername({ target: { value: usernameFromCookie } });
        
//         }
//         // connect();
//       }, []);
  
// if(chatConnect) {
//   let Sock = new SockJS('http://localhost:8080/ws');
//   stompClient = over(Sock);
//   stompClient.connect({},onConnected, onError);
//   setIsLoggedIn(true);
// }

  useEffect(() => {
    // Get the username from the cookie
    const usernameFromCookie = getCookies('username');
    const chatIsTrue = getCookies('connectChat');
    const chatWith = getCookies('chatName');

    if (usernameFromCookie) {
      handleUsername({ target: { value: usernameFromCookie } });
    }
    setChatConnect(chatIsTrue); // Set chatConnect after handling username
  }, []);

  useEffect(() => {
    if (chatConnect) {
      let Sock = new SockJS('https://wanted-question-production.up.railway.app/ws');
      stompClient = over(Sock);
      stompClient.connect({}, onConnected, onError);
      setIsLoggedIn(true);
    }
  }, [chatConnect]);
    //     const connect =()=>{
    //     let Sock = new SockJS('http://localhost:8080/ws');
    //     stompClient = over(Sock);
    //     stompClient.connect({},onConnected, onError);
    //     setIsLoggedIn(true);
    // }

    const onConnected = () => {
        setUserData({...userData,"connected": true});

        stompClient.subscribe('/chatroom/public', onMessageReceived);
        stompClient.subscribe('/user/'+userData.username+'/private', onPrivateMessage);
        userJoin();
    }

    const userJoin=()=>{
          var chatMessage = {
            senderName: userData.username,
            status:"JOIN"
          };
          stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    }

    const onMessageReceived = (payload)=>{
        var payloadData = JSON.parse(payload.body);

        switch(payloadData.status){
            case "JOIN":
                if(!privateChats.get(payloadData.senderName)){
                    privateChats.set(payloadData.senderName,[]);
                    setPrivateChats(new Map(privateChats));
                }
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;
        }
    }
    
    const onPrivateMessage = (payload)=>{
        console.log(payload);
        var payloadData = JSON.parse(payload.body);
        if(privateChats.get(payloadData.senderName)){
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        }else{
            let list =[];
            list.push(payloadData);
            privateChats.set(payloadData.senderName,list);
            setPrivateChats(new Map(privateChats));
        }
    }

    const onError = (err) => {
        console.log(err);
        
    }

    const handleMessage =(event)=>{
        const {value}=event.target;
        setUserData({...userData,"message": value});
    }
    const sendValue=()=>{
            if (stompClient) {
              var chatMessage = {
                senderName: userData.username,
                message: userData.message,
                status:"MESSAGE"
              };
              console.log(chatMessage);
              stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
              setUserData({...userData,"message": ""});
            }
    }

    const sendPrivateValue=()=>{
        if (stompClient) {
          var chatMessage = {
            senderName: userData.username,
            receiverName:tab,
            message: userData.message,
            status:"MESSAGE"
          };
          
          if(userData.username !== tab){
            privateChats.get(tab).push(chatMessage);
            setPrivateChats(new Map(privateChats));
          }
          stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
          setUserData({...userData,"message": ""});
        }
    }

    const handleUsername = (event) => {
      const { value } = event.target;
      const usernameFromCookie = getCookies('username'); // ใช้ค่าจาก getCookies
      setUserData({ ...userData, "username": usernameFromCookie });

      
    }


    return (
<div className={className}>
<img src={big_logo} alt="" className="big_logo" />
      <div className="container-chat" style={{zIndex:'100'}}>
        {userData.connected }
        <div className="chat-box">
        <div className="member-list">
                <ul>
                    <li onClick={()=>{setTab("CHATROOM")}} className={`member ${tab==="CHATROOM" && "active"}`}> PREES GREETING  TO {getCookies('senderNameToChat')}</li>
                    {[...privateChats.keys()].map((name,index)=>(
                        <li onClick={()=>{setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>{name} </li>
                    ))}
                </ul>
            </div>
          {tab === "CHATROOM" && (
            
            <div className="chat-content">
              <ul className="chat-messages">
                {publicChats.map((chat, index) => (
                  <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                    {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                    <div className="message-data">{chat.message}</div>
                    {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                  </li>
                ))}
              </ul>
              <div className="content-send-message">
                <div className="send-message">
                  <input
                    type="text"
                    className="input-message"
                    placeholder="Enter the message"
                    value={userData.message}
                    onChange={handleMessage}
                  />
                  <button type="button" className="send-button" onClick={sendValue}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
          {tab !== "CHATROOM" && (
            <div className="chat-content">
              <ul className="chat-messages">
                {[...privateChats.get(tab)].map((chat, index) => (
                  <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                    {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                    <div className="message-data">{chat.message}</div>
                    {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                  </li>
                ))}
              </ul>
              <div className="content-send-message">
                <div className="send-message">
                  <input
                    type="text"
                    className="input-message"
                    placeholder="Enter the message"
                    value={userData.message}
                    onChange={handleMessage}
                  />
                  <button type="button" className="send-button" onClick={sendPrivateValue}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
        {/* // :
        // <div className="register">
           
        //       <button type="button" onClick={connect}>
        //             connect
        //       </button> 
        // </div>}  */}



export default  styled(ChatRoom)`
.big_logo{
  width:300px;
  position:absolute;
  top:120px;
  left:8%;
  z-index:101;
}
.container-chat{
  position: relative;
  width: 80%;
  margin: 130px;
  background: #0196FC;
  padding:20px;
  border-radius:5px;
  box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12);

}

.register{
  position: fixed;
  padding:30px;
  box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12);
  top:35%;
  left:32%;
  display: flex;
  flex-direction: row;
}
.chat-box{
  box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12);
  margin:40px 50px;
  height: 600px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-radius:5px;
  background-color:#fff;
}

.member-list{
  width: 20%;
 
}

.chat-content{
  width:80%;
  margin: 10px;
  background: #FFF;
  border-radius: 5px;

}

.chat-messages{
  height: 80%;
  overflow:auto;
  border-radius: 5px;
  margin: 10px;
  background: #f5ebe0;
}

.send-message{
  width: 100%;
  display: flex;
  flex-direction: row;
}

.input-message{
  width:85%;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-left: 20px;
}

ul {
  padding: 0;
  list-style-type: none;
}
.send-button{
  width:10%;
  border-radius: 5px;
  margin-left: 5px;
  cursor: pointer;
  border: 0px solid #ccc;
  background: #0196FC;
  color:#fff;
  font-size: 15px;
}
.send-button:hover{
  background: #0071BE;
}
.member{
  padding: 10px;
  background: #ccc;
  border:#000;
  cursor: pointer;
  margin: 5px 2px;
  box-shadow: 0 8px 8px -4px lightblue;
  border-radius:5px;

}
.member.active{
  background: #0196FC;
  color:#fff;
  font-size:20px;
  text-align:center;
  margin:20px;
}
.member:hover{
  background: grey;
  color:#fff;
}

.avatar{
  background-color: cornflowerblue;
  padding: 3px 5px;
  border-radius: 5px;
  color:#fff;
  text-align:center;
  margin:5px;
}
.avatar.self{
  color:#000;
  background-color: greenyellow;
}
.message{
  padding:5px;
  width: auto;
  display: flex;
  flex-direction: row;
 
  margin: 5px 10px;
}
.message-data {
  background: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  word-wrap: break-word;
  max-width: 80%; /* Adjust the width as needed */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: 5px 0;
  font-size: 16px;
  color: #333;
}
.message.self{
  justify-content: end;
}

` ;

