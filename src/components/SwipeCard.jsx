import React, { forwardRef } from 'react';
import TinderCard from 'react-tinder-card';

export const SwipeCard = forwardRef(({ card, onSwipe }, ref) => {
  if (!card) return null;

  return (
    <TinderCard
      ref={forwardRef}
      onSwipe={(dir) => onSwipe(dir, card)}
      className="swipe"
      preventSwipe={['up', 'down']}
    >
      <div className="w-full aspect-[3/4] bg-white rounded-lg border-2 border-[#01204e] shadow-[6px_6px_0px_#57adff] p-3 flex flex-col">
        <div className="w-full h-full bg-gray-300 border border-[#01204e] rounded-sm overflow-hidden">
          <img
            src={card.image}
            alt={card.text}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-3 w-full">
          <div
            className="text-[#01204e] text-2xl"
            style={{ fontFamily: 'Franchise-Regular' }}
          >
            {card.text}
          </div>
          <div
            className="text-[#01204e] text-xs"
            style={{ fontFamily: 'Gameplay-Regular' }}
          >
            {card.subtext}
          </div>
        </div>
      </div>
    </TinderCard>
  );
});