import React from 'react';
import { PrimaryButton, SecondaryButton } from '../components/Buttons.jsx';
import { useNavigate } from 'react-router-dom';


export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-[844px] items-center gap-[86px] px-5 py-[62px] relative bg-[#ffd6d6]">
      {/* Logo Image */}
      <div className="w-[234px] h-[159px]">
        <img
          src="/logo.png"
          alt="Dope or Nope Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* White Welcome Card */}
      <div className="flex flex-col items-start gap-8 p-4 relative self-stretch w-full bg-white rounded-lg border-2 border-solid border-[#01204e] shadow-[6px_6px_0px_#57adff]">
        {/* Text */}
        <div className="flex flex-col items-start gap-2 w-full">
          <div 
          style={{ fontFamily: 'Franchise-Regular' }} className="text-[#01204e] text-[30px]">
            Welcome and choose wisely!
          </div>
          <p style={{ fontFamily: 'Gameplay-Regular' }} className="text-[#01204e] text-xs font-normal">
            Now is the time to choose <br />
            your purpose, life decisions and love language.
          </p>
        </div>

          {/* Buttons */}
          <div className="flex flex-col items-stretch gap-4 w-full">
              <PrimaryButton onClick={() => navigate("/create")}>Create New Room</PrimaryButton>
              <SecondaryButton onClick={() => navigate("/join")}>Join a Room</SecondaryButton>
          </div>
      </div>
    </div>
  );
};

export default LandingPage;
