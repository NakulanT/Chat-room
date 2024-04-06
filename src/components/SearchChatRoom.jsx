import React, { useState } from 'react';

const SearchChatRoom = ({ onJoinRoom }) => {
  const [roomId, setRoomId] = useState('');

  const handleJoinRoom = () => {
    if (roomId.trim() !== '') {
      onJoinRoom(roomId);
    }
  };

  return (
    <div>
      <h1>Search and Join Chat Room</h1>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Enter Chat Room ID"
      />
      <button onClick={handleJoinRoom}>Join Room</button>
    </div>
  );
};

export default SearchChatRoom;
