import React, { useState, useEffect } from 'react';
import { MiniButton } from '../components/Buttons';
import { SwipeCard } from '../components/SwipeCard';
import NayIcon from '../assets/NayIcon.png';
import YayIcon from '../assets/YayIcon.png';
import { useRoom } from '../RoomContext';
import { cardPool } from '../data/cardPool';
import { useNavigate } from 'react-router-dom';

export const SwipePage = () => {
  const navigate = useNavigate();
  const { roomCode, isHost, category } = useRoom();
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [votedYes, setVotedYes] = useState([]);

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (category) {
      const cardsForCategory = cardPool[category] || [];
      const shuffledCards = shuffleArray(cardsForCategory);
      setCards(shuffledCards);
    }
  }, [category]);

  const currentCard = cards[currentIndex];

  const handleYay = () => {
      const updatedVotes = [...votedYes, currentCard.id];
      setVotedYes(updatedVotes);

      // FAKE MATCH LOGIC FOR NOW
      const isMatch = true;

      if (isMatch) {
        navigate('/match', {
          state: { cardName: currentCard.text }, // Pass card name to match screen
        });
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
  };

  const handleNay = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center p-5 px-6 gap-4 w-full bg-[#ffd6d6] min-h-screen overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <img src="/logo.png" alt="Dope or Nope Logo" className="w-[100px] h-auto" />
        <p
          style={{ fontFamily: 'Gameplay-Regular' }}
          className="p-4 text-xs text-[#01204e] font-bold"
        >
          ROOM CODE: {roomCode}
        </p>
        <MiniButton onClick={() => navigate('/')}>end my mysery</MiniButton>
      </div>

      {/* Main Card */}
      <div className="w-full h-full flex justify-center items-center">
        {currentCard ? (
          <div className="w-full h-full">
            <SwipeCard card={currentCard} />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-[580px]">
            <div
              className="text-[#01204e] text-xl"
              style={{ fontFamily: 'Gameplay-Regular' }}
            >
              You are fuuucked!
            </div>
          </div>
        )}
      </div>

      {/* Bottom Buttons */}
      {currentCard && (
        <div className="flex items-center justify-between w-full px-6 py-4 bg-white border-2 border-[#01204e] shadow-[6px_6px_0px_#57adff] rounded-lg z-20">
          {/* Nay */}
          <div
            className="flex flex-col items-center gap-2 cursor-pointer"
            style={{ fontFamily: 'Gameplay-Regular' }}
            onClick={handleNay}
          >
            <img src={NayIcon} alt="Nay Icon" className="w-16 h-16" />
            <div className="text-xs mt-1 text-[#01204e] font-bold">NAY!</div>
          </div>

          {/* Skip For Now */}
          <div
            className="text-xs text-[#01204e] font-bold"
            style={{ fontFamily: 'Gameplay-Regular' }}
          >
            SKIP FOR NOW
          </div>

          {/* Yay */}
          <div
            className="flex flex-col items-center gap-2 cursor-pointer"
            style={{ fontFamily: 'Gameplay-Regular' }}
            onClick={handleYay}
          >
            <img src={YayIcon} alt="Yay Icon" className="w-16 h-16" />
            <div className="text-xs mt-1 text-[#01204e] font-bold">YAY!</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwipePage;
