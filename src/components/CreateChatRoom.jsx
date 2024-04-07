import React, { useState } from 'react';
import { app } from '../FirebaseConfig.js';
import { getDatabase, ref, set, get, child, push} from 'firebase/database';
import './CreateChatRoom.css';

const db = getDatabase(app);
const roomsRef = ref(db, 'rooms');

const CreateChatRoom = ({ setAuth }) => {
  const [roomId, setRoomId] = useState('');
  const [password, setPassword] = useState('');
  const chats = ""

  const handleCreateRoom = async () => {
    try {
      const roomRef = child(roomsRef, roomId);
      const roomSnapshot = await get(roomRef);
      if (roomSnapshot.exists()) {
        alert('Room ID already exists. Please choose a different ID.');
      } else {
        // Save the room ID, password, and initialize chats as an empty object
        await set(roomRef, { password , chats });
        const ChatRef = ref(db, `rooms/${roomId}/chats/`);
        push(ChatRef);


        alert('Room created successfully! Room ID: ' + roomId);
        setRoomId(''); // Clear the input fields after successful creation
        setPassword('');
        setAuth(true);
      }
    } catch (error) {
      console.error('Error creating or checking room:', error);
      alert('Error creating or checking room. Please try again.');
    }
  };

  return (
    <div className='CreateChatRoom'>
      <h1>Create Chat Room</h1>
      <div>
        <label>Room ID : </label>
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Enter Chat Room ID"
        />
      </div>
      <div>
        <label>Password : </label>
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Room Password"
      />
      </div>
      <button onClick={handleCreateRoom}>Create Room</button>
    </div>
  );
};

export default CreateChatRoom;

