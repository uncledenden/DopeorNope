import React, { useState } from "react";
import BreadIcon from '../assets/BreadIcon.png';
import JarIcon from '../assets/JarIcon.png';
import LovinIcon from '../assets/LovinIcon.png';
import ColorPalletICon from '../assets/ColorPalletIcon.png';
import CringeIcon from '../assets/CringeIcon.png';
import PoopIcon from '../assets/PoopIcon.png';
import GameIcon from '../assets/GameIcon.png';
import { PrimaryButton } from "../components/Buttons";
import UnselectedIcon from '../assets/UnselectedIcon.png';
import SelectedHeartIcon from '../assets/SelectedHeartIcon.png';
import { useNavigate } from "react-router-dom";
import { useRoom } from '../RoomContext.jsx'; 
import { createRoom } from '../firebaseHelpers';

const categories = [
  { id: 1, title: "THE HUNGER GAMES", color: "blue", visualIcon: BreadIcon },
  { id: 2, title: "KITCHEN NIGHTMARES", color: "orange", visualIcon: JarIcon },
  { id: 3, title: "LOW EFFORT LOVIN’", color: "green", visualIcon: LovinIcon },
  { id: 4, title: "ARTSY FARTSY", color: "blue", visualIcon: ColorPalletICon },
  { id: 5, title: "AWW, CRINGE", color: "blue", visualIcon: CringeIcon },
  { id: 6, title: "UNHINGED, TOGETHER", color: "orange", visualIcon: PoopIcon },
  { id: 7, title: "ROMANCE WITHOUT PANTS", color: "green", visualIcon: GameIcon },
];

const CreateRoomPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ✅ You forgot to call these inside the component
  const { setRoomCode, setIsHost, setCategory } = useRoom();

  const handleSelect = (id) => {
    setSelectedCategory(id);
  };

  const handleCreateRoom = async () => {
  if (!selectedCategory) return alert('Please select a category first.');

  const code = Math.floor(10000 + Math.random() * 90000).toString();

  try {
    await createRoom(code); // 👈 Store room in Firebase
    setRoomCode(code);      // 👈 Store in context for later use
    setIsHost(true);        // 👈 Mark user as host
    setCategory(selectedCategory); // 👈 Save chosen category
    navigate('/swipe');     // 👈 Go to the swipe screen
  } catch (error) {
    console.error("Error creating room:", error);
    alert("Failed to create room. Please try again.");
  }
};


  const borderColors = {
    blue: "border-[#01204e] shadow-[4px_4px_0px_#57adff]",
    orange: "border-[#ff9c5b] shadow-[4px_4px_0px_#ff9c5b]",
    green: "border-[#006b5d] shadow-[4px_4px_0px_#006b5d]",
  };

  return (
    <div className="min-h-screen bg-[#ffd6d6] flex flex-col items-center px-4 py-6 gap-4 font-gameplay">
      <img src="/logo.png" alt="Dope or Nope Logo" className="w-48 drop-shadow-md" />

      <div className="w-full flex flex-col bg-white p-4 rounded-lg border-2 border-[#01204e] shadow-[6px_6px_0px_#57adff]">
        <h3 className="text-4xl text-[#01204e] font-franchise mb-2">CATEGORIES</h3>

        <div className="flex flex-col gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleSelect(cat.id)}
              className={`w-full rounded-md p-3 border-2 cursor-pointer flex justify-between items-center
                ${borderColors[cat.color]}
                ${selectedCategory === cat.id ? "bg-[#f0f0f0]" : "bg-white"}`}
            >
              <div>
                <p className="text-sm font-bold text-[#01204e]">{cat.title}</p>
                <div className="text-2xl mt-1">
                  <img src={cat.visualIcon} alt={cat.title} />
                </div>
              </div>
              <div className="ml-2 w-10 h-10 flex-shrink-0">
                <img
                  src={selectedCategory === cat.id ? SelectedHeartIcon : UnselectedIcon}
                  alt="Heart Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <PrimaryButton onClick={handleCreateRoom}>Go to Room</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CreateRoomPage;
