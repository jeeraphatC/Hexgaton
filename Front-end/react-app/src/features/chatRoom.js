import React, { useEffect, useState } from 'react';
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

var stompClient =null;
const ChatRoom = () => {
    const [privateChats, setPrivateChats] = useState(new Map());     
    const [publicChats, setPublicChats] = useState([]); 
    const [tab,setTab] =useState("CHATROOM");
    const [nameAccount, setNameAccount] = useState('guest');
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userData, setUserData] = useState({
        username: '',
        receivername: '',
        connected: isLoggedIn,
        message: ''
      });

      const location = useLocation();
      const email = location.state?.email || 'guest';

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

export default ChatRoom ;