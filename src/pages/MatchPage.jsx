// src/pages/MatchScreen.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import { MiniButton } from '../components/Buttons';
import { PrimaryButton, SecondaryButton } from '../components/Buttons.jsx';

export default function MatchScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const cardName = location.state?.cardName || "SOMETHING FUN";

  return (
    <div className="flex justify-between flex-col items-center p-5 px-6 gap-4 w-full bg-[#ffd6d6] min-h-screen overflow-hidden">
        <div className="flex justify-between items-center w-full">
                <img src="/logo.png" alt="Dope or Nope Logo" className="w-[100px] h-auto" />
                <MiniButton onClick={() => navigate('/')}>end my mysery</MiniButton>
              </div>
        <div className='flex flex-col items-start p-4 relative self-stretch w-full bg-white rounded-lg border-2 border-solid border-[#01204e] shadow-[6px_6px_0px_#57adff]'>
          
                <div className="flex flex-col items-start gap-4 w-full">
                    <div
                    style={{ fontFamily: 'Franchise-Regular' }} className="text-[#01204e] text-[48px]">
                    CONGRATULATION!
                    </div>
                    <p style={{ fontFamily: 'Gameplay-Regular' }} className="text-[#01204e] text-xs font-normal">
                    YOU HAVE A MATCH! <br />
                    YOU AND YOUR SEXY PARTNER CHOOSE:
                    </p>
                    <p style={{ fontFamily: 'Gameplay-Regular' }} className="text-[#01204e] text-[20px] font-bold">
                    {cardName}
                    </p>


                      <div className="flex flex-col items-stretch gap-4 w-full">
                          <PrimaryButton onClick={() => navigate("/")}>Go do something</PrimaryButton>
                          <SecondaryButton onClick={() => navigate("/")}>ok, we are done, pls go</SecondaryButton>
                      </div>
          </div>
        </div>

      <p style={{ fontFamily: 'Gameplay-Regular' }} className="text-[#01204e] text-[20px] font-bold">SEE YA SOON!</p>
    </div>
  );
}
