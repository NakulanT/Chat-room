import React, { useState } from 'react';
import './SearchChatRoom.css';
import { getDatabase, ref, set, get, child, push } from 'firebase/database';
import { app } from '../FirebaseConfig.js';

const db = getDatabase(app);
const roomsRef = ref(db, 'rooms');

const SearchChatRoom = ({ onJoinRoom }) => {
  const [roomId, setRoomId] = useState('');
  const [password, setPassword] = useState('');

  const handleJoinRoom = async () => {
    console.log('asss');
    try {
      const roomRef = child(roomsRef, roomId);
      const roomSnapshot = await get(roomRef);
      if (roomSnapshot.exists()) {
        const roomData = roomSnapshot.val();
        if (roomData.password === password) {
          alert('Password is correct. Joining Chat Room...');

        } else {
          alert('Incorrect password. Please try again.');
        }
      } else {
        alert('Chat Room not found in the database.');
      }
    } catch (error) {
      console.error('Error joining room:', error);
      alert('Error joining room. Please try again.');
    }
  };

  return (
    <div className='SearchChatRoom'>
      <h1>Join Chat Room</h1>
      <div>
        <label>Chat Room : </label>
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Enter Chat Room ID"
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Room Password"
        />
      </div>
      <button onClick={handleJoinRoom}>Join Room</button>
    </div>
  );
};

export default SearchChatRoom;
