import ChatContainer from "./ChatContainer"



const Chat = (props) => {
    return (

<ChatContainer>
        <div className="d-flex flex-column col-4 col-lg-4  col-xl-4  pe-0" >

            
        </div>
        <div className="d-flex flex-column col-8 col-lg-8 col-xl-8 ps-0 chat-window ">

        <ChatHeader user={user}/>
        <ChatBody user={user} message={message}/>
        <ChatInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
        
        />

        </div>
        
</ChatContainer>

    );
};