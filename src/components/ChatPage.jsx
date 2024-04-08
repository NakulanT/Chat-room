import React, { useState, useEffect, useRef } from "react";
import { app } from "../FirebaseConfig.js";
import { getDatabase, ref, push, onValue } from "firebase/database";
import './ChatPage.css';

const db = getDatabase(app);

const ChatPage = (props) => {
    const [message, setMessage] = useState('');
    const [history, setHistory] = useState([]);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const chatRef = ref(db, `rooms/${props.roomId}/chats`);
        onValue(chatRef, (snapshot) => {
            const chatData = snapshot.val();
            if (chatData) {
                const chatHistory = Object.values(chatData);
                setHistory(chatHistory);
            } else {
                setHistory([]);
            }
        });
    }, [props.roomId]);

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    };

    const sendMessage = (text, role) => {
        try {
            const chatRef = ref(db, `rooms/${props.roomId}/chats`);
            push(chatRef, { message: text, role });
            setMessage('');
        } catch (error) {
            console.error(`Error saving message to database: ${error.message}`);
        }
    };

    return (
        <div className="ChatPage">
            <div className="Navbar">
                <h1>You're ({props.username}) currently in {props.roomId} room</h1>
            </div>
            <div className="ChatHistory">
                {history.map((messageData, index) => (
                    <div key={index} className={`Messages-${messageData.role === props.username ? 'User' : 'Others'}`}>
                        <h1>{messageData.message}</h1>
                        <h2>{messageData.role}</h2>
                    </div>
                ))}
                <div ref={messagesEndRef}></div>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission behavior
                sendMessage(message, props.username);
            }}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatPage;