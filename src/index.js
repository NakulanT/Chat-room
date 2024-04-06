import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ChatRoom from './components/ChatRoom';
import CreateChatRoom from './components/CreateChatRoom';
import SearchChatRoom from './components/SearchChatRoom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ChatRoom />
  <CreateChatRoom />
  <SearchChatRoom />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
