import React, { useState } from "react";
import CreateChatRoom from "../components/CreateChatRoom";
import SearchChatRoom from "../components/SearchChatRoom";
import ChatPage from "../components/ChatPage";
import './Home.css';

const Home = () => {
    const [Auth, setAuth] = useState(false);
    const [roomId , setroomId] = useState('');
    const [username , setusername] = useState('');
    
    return (
        Auth ? (
            <ChatPage roomId={roomId}  username = {username}/>
        ) : (
            <div className="Home">
                <CreateChatRoom setAuth={setAuth} setroomId={setroomId}  setusername={setusername} />
                <SearchChatRoom setAuth={setAuth} setroomId={setroomId} setusername ={setusername} />
            </div>
        )
    );
}

export default Home;