import React, { useEffect, useState } from 'react';
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Cookies, useCookies } from 'react-cookie';
import getCookies from './hook/getCookies';
import styled from 'styled-components';
var stompClient =null;
const ChatRoom = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [privateChats, setPrivateChats] = useState(new Map());     
    const [publicChats, setPublicChats] = useState([]); 
    const [tab,setTab] =useState("CHATROOM");
    const [nameAccount, setNameAccount] = useState('guest');
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState({
        username: '',
        receivername: '',
        connected: isLoggedIn,
        message: ''
      });

      const location = useLocation();
      const email = location.state?.email || 'guest';


      useEffect(() => {
        // Get the username from the cookie
        userData.username = getCookies('username');
        if (username) {
          setUserData.username(username);
        }
      }, [userData.username]);
    //   useEffect(() => {
    //     console.log(userData);
    //     axios.get('http://localhost:8085/api/v1/accounts/list')
    //     .then((response) => {
    //     const account = response.data ;
    //     const accountDataMatch = account.find((account) => account.email === email);

    //             // setNameAccount(accountDataMatch.);
    //             setNameAccount(accountDataMatch.accountname);
    //             setIsLoggedIn(true);
               
    //             setUserData({
    //     username: accountDataMatch.accountname,
    //     receivername: '',
    //     connected: isLoggedIn,
    //     message: ''
    // });

    // });

    //   }, [userData]);
  
    // useEffect(() => {
      
    //     console.log(`test  ${userData}`);

    //       // Fetch the list of accounts
    //       axios.get('http://localhost:8085/api/v1/accounts/list')
    //         .then((response) => {
    //           // Assuming the response data is an array of accounts
    //           const accounts = response.data;
    
    //           // Find the account with the specified email
    //           const accountWithMatchingEmail = accounts.find((account) => account.email === email);
    
    //           if (accountWithMatchingEmail) {
               
    //             // If the account exists, set its accountname to the state
    //             setNameAccount(accountWithMatchingEmail.accountname);
    //             setIsLoggedIn(true); // Set login status to true
    //             setUserData({
    //               username: accountWithMatchingEmail.accountname,
    //               receivername: '',
    //               connected: isLoggedIn,
    //               message: ''
    //             });
    //           //   setUserData()
    //           } else {
    //             // Handle the case where no matching account is found
    //             setNameAccount('----');
    //           }
    //         })
    //         .catch((error) => {
    //           console.error('Error fetching accounts:', error);
    //         });
        

  
    //   }, [email]);

    const 
    connect =()=>{
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }

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

    const handleUsername=(event)=>{
        const {value}=event.target;
        setUserData({...userData,"username": value});
    }

    const registerUser=()=>{
        connect();
    }
    return (
        // <div className='container-chat'>
//   {/* {isLoggedIn ? ( // Conditionally render "Sign-up" link
//         <Link  className="text">{nameAccount}</Link>
//       ) : (
//         <Link to="/register" className="text1">Sign-up</Link>
//       )} */}

//         {/* </div> */}
      
    <div className="container-chat">
      {userData.connected=true && userData.username }
        <div className="chat-box">
        
        <div className="member-list">
                <ul>
                <h1>Welcome to the Chat Room, {userData.username}!</h1>
                    {[...privateChats.keys()].map((name,index)=>(
                        <li onClick={()=>{setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>{name}</li>
                    )).filter((name)=>{
                        return name === userData.username;
                    })}
                </ul>
            </div>
            {tab==="CHATROOM" && <div className="chat-content">
                <ul className="chat-messages">
                    {publicChats.map((chat,index)=>(
                        <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                            {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                            <div className="message-data">{chat.message}</div>
                            {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                        </li>
                    ))}
                </ul>
            <div className="content-send-message">
                <div className="send-message">
                    <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
                    <button type="button" className="send-button" onClick={sendValue}>send</button>
                </div>
                </div>
            </div>}
            {tab!=="CHATROOM" && <div className="chat-content">
                <ul className="chat-messages">
                    {[...privateChats.get(tab)].map((chat,index)=>(
                        <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                            {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                            <div className="message-data">{chat.message}</div>
                            {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                        </li>
                    ))}
                </ul>
                <div className="content-send-message">
                <div className="send-message">
                    <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
                    <button type="button" className="send-button" onClick={sendPrivateValue}>send</button>
                </div>
                </div>
            </div>}
        </div>
        {/* :
        <div className="register">
            <input
                id="user-name"
                placeholder="Enter your name"
                name="userName"
                value={userData.username}
                onChange={handleUsername}
                margin="normal"
              />
              <button type="button" onClick={registerUser}>
                    connect
              </button> 
        </div>} */}
    </div>
    )
}

export default  styled(ChatRoom)`

.container{
  position: relative;
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
}

.member-list{
  width: 20%;
}

.chat-content{
  width:80%;
  margin-left: 10px;
}

.chat-messages{
  height: 80%;
  border: 1px solid #000;
}

.send-message{
  width: 100%;
  display: flex;
  flex-direction: row;
}

.input-message{
  width:90%;
  border-radius: 50px;
}

ul {
  padding: 0;
  list-style-type: none;
}
.send-button{
  width:10%;
  border-radius: 50px;
  margin-left: 5px;
  cursor: pointer;
}
.member{
  padding: 10px;
  background: #eee;
  border:#000;
  cursor: pointer;
  margin: 5px 2px;
  box-shadow: 0 8px 8px -4px lightblue;
}
.member.active{
  background: blueviolet;
  color:#fff;
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
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin: 5px 10px;
}
.message-data{
  padding:5px;
}
.message.self{
  justify-content: end;
}

` ;