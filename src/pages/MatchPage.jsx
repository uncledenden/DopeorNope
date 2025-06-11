// src/pages/MatchScreen.jsx
import { useLocation, useNavigate } from 'react-router-dom';

export default function MatchScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const cardName = location.state?.cardName || "SOMETHING FUN";

  return (
    <div className="min-h-screen bg-pink-200 flex flex-col items-center justify-center text-center font-bold">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => navigate('/')}
          className="border-2 border-blue-500 bg-white px-4 py-2 rounded-full text-sm"
        >
          END MY MISERY
        </button>
      </div>

      <div className="bg-white border-2 border-blue-500 rounded-lg shadow-lg px-8 py-6">
        <h1 className="text-3xl mb-4 tracking-widest">CONGRATULATION!</h1>
        <p className="mb-2">YOU HAVE A MATCH!</p>
        <p className="mb-4">YOU AND YOUR SEXY PARTNER CHOOSE:</p>
        <h2 className="text-xl text-blue-800 mb-6">{cardName}</h2>

        <button
          onClick={() => navigate('/')}
          className="bg-blue-400 text-white px-6 py-2 rounded-lg mb-3"
        >
          GO DO SOMETHING
        </button>

        <button
          onClick={() => navigate('/')}
          className="border-2 border-black px-6 py-2 rounded-lg"
        >
          OH, WE ARE DONE, PLS GO
        </button>
      </div>

      <p className="absolute bottom-4 text-xs">SEE YA SOON!</p>
    </div>
  );
}
