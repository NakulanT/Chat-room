import React, { useState } from 'react';
import { app } from '../FirebaseConfig.js';
import { getDatabase, ref, set, get, child, update } from 'firebase/database';

const db = getDatabase(app);
const roomsRef = ref(db, 'rooms');

const CreateChatRoom = () => {
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

        alert('Room created successfully! Room ID: ' + roomId);
        setRoomId(''); // Clear the input fields after successful creation
        setPassword('');
      }
    } catch (error) {
      console.error('Error creating or checking room:', error);
      alert('Error creating or checking room. Please try again.');
    }
  };

  return (
    <div>
      <h1>Create Chat Room</h1>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Enter Chat Room ID"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Room Password"
      />
      <button onClick={handleCreateRoom}>Create Room</button>
    </div>
  );
};

export default CreateChatRoom;

