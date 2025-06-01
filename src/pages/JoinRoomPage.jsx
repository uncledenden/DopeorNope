import React, {useState} from 'react';
import { InputField } from '../components/InputField.jsx';
import { PrimaryButton } from '../components/Buttons.jsx';
import { useNavigate } from 'react-router-dom';
import { useRoom } from '../RoomContext.jsx';




const JoinRoomPage = () => {
    const navigate = useNavigate();
    const [inputCode, setInputCode] = useState('');
    const { setRoomCode, setIsHost } = useRoom();

    const handleJoin = () => {
    setRoomCode(inputCode);
    setIsHost(false);
    navigate('/swipe');
    };

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

      {/* Join card */}
      <div className="flex flex-col items-start p-4 relative self-stretch w-full bg-white rounded-lg border-2 border-solid border-[#01204e] shadow-[6px_6px_0px_#57adff]">
        {/* Text */}
        <div className="flex flex-col items-start gap-2 w-full">
           <div className='flex flex-col items-start gap-4 w-full'> 
                <div 
                style={{ fontFamily: 'Franchise-Regular' }} className="text-[#01204e] text-[30px]">
                    Join a Room
                </div>
                <p style={{ fontFamily: 'Gameplay-Regular' }} className="text-[#01204e] text-xs font-normal">
                    Enter pass code <br />
                </p>
            </div>
                 <div className="flex flex-col items-stretch gap-8 w-full">
                     <InputField value={inputCode} onChange={(e) => setInputCode(e.target.value)} />
                     <PrimaryButton onClick={handleJoin}>Join Room</PrimaryButton>
                 </div>        
        </div>
      </div>
    </div>
  );
};

export default JoinRoomPage;
