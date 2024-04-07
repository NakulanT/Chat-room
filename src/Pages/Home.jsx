import React, { useState } from "react";
import CreateChatRoom from "../components/CreateChatRoom";
import SearchChatRoom from "../components/SearchChatRoom";
import ChatPage from "../components/ChatPage";
import './Home.css';

const Home = () => {
    const [Auth, setAuth] = useState(false);
    
    return (
        Auth ? (
            <ChatPage />

        ) : (
            <div className="Home">
            <CreateChatRoom setAuth={setAuth} />
            <SearchChatRoom />
        </div>

        )
    );
}

export default Home;
