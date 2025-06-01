import React, { createContext, useContext, useState } from 'react';

// Create the context
const RoomContext = createContext();

// Create the provider
export const RoomProvider = ({ children }) => {
  const [roomCode, setRoomCode] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [category, setCategory] = useState(null);

  return (
    <RoomContext.Provider value={{ roomCode, setRoomCode, isHost, setIsHost, category, setCategory }}>
      {children}
    </RoomContext.Provider>
  );
};

// Hook to use context in components
export const useRoom = () => useContext(RoomContext);
