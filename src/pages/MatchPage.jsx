// src/pages/MatchPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/Buttons';
import { resetMatch } from '../firebaseHelpers';
import { useRoom } from '../RoomContext';

const MatchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardName } = location.state || {};

  if (!cardName) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#ffd6d6]">
        <p className="text-xl text-[#01204e]" style={{ fontFamily: 'Gameplay-Regular' }}>
          No match found yet.
        </p>
        <PrimaryButton onClick={() => navigate('/')}>Back Home</PrimaryButton>
      </div>
    );
  }

const { roomCode } = useRoom();

const handleStartOver = () => {
  resetMatch(roomCode);
  navigate('/');
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#ffd6d6]">
      <img src="/logo.png" alt="Dope or Nope Logo" className="w-48 mb-6" />
      <h1 className="text-4xl text-[#01204e] font-franchise mb-4">It’s a Match!</h1>
      <p className="text-xl text-[#01204e] font-bold" style={{ fontFamily: 'Gameplay-Regular' }}>
        You both said YES to:
      </p>
      <p className="text-2xl text-[#01204e] my-4 font-bold" style={{ fontFamily: 'Gameplay-Regular' }}>
        {cardName}
      </p>
      <PrimaryButton onClick={handleStartOver}>Start Over</PrimaryButton>

    </div>
  );
};

export default MatchPage;
