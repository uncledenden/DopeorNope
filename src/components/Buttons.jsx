// components/buttons.jsx
import React from 'react';

export const PrimaryButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="w-full bg-[#57ADFF] text-white text-sm font-bold uppercase py-3 px-4 rounded-md border-[2px] border-[#01204E] shadow-[6px_6px_0px_#57AEFF]"
    style={{ fontFamily: 'Gameplay-Regular' }}
  >
    {children}
  </button>
);

export const SecondaryButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="w-full bg-white text-black text-sm font-bold uppercase py-3 px-4 rounded-md border-[2px] border-[#01204E] shadow-[6px_6px_0px_#57AEFF]"
    style={{ fontFamily: 'Gameplay-Regular' }}
  >
    {children}
  </button>
);

export const DisabledButton = ({ children }) => (
  <button
    className="w-full bg-[#C4C4C4] text-white text-sm font-bold uppercase py-3 px-4 rounded-md border-[2px] border-[#01204E] shadow-[6px_6px_0px_#01204E] cursor-not-allowed"
    style={{ fontFamily: 'Gameplay-Regular' }}
    disabled
  >
    {children}
  </button>
);

export const MiniButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-xs bg-white text-black font-bold uppercase py-1 px-3 rounded-md border-[2px] border-[#01204E] shadow-[4px_4px_0px_#01204E]"
    style={{ fontFamily: 'Gameplay-Regular' }}
  >
    {children}
  </button>
);