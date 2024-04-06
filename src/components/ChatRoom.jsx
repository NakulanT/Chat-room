import React, { useState } from 'react';
import { app } from '../FirebaseConfig.js';
import { getDatabase, ref, set, get } from 'firebase/database';

const db = getDatabase(app);
const roomsRef = ref(db, 'rooms');

const CreateChatRoom = () => {
  const [roomId, setRoomId] = useState('');

  const handleCreateRoom = async () => {
    try {
      const roomSnapshot = await get(ref(roomsRef, roomId));
      if (roomSnapshot.exists()) {
        alert('Room ID already exists. Please choose a different ID.');
      } else {
        await set(ref(roomsRef, roomId), true);
        alert('Room created successfully!');
        setRoomId(''); // Clear the input field after successful creation
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
      <button onClick={handleCreateRoom}>Create Room</button>
    </div>
  );
};

export default CreateChatRoom;