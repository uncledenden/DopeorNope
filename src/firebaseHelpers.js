// src/firebaseHelpers.js
import { db } from './firebase';
import { ref, set, push, onValue, get, update } from 'firebase/database';

export const createRoom = async () => {
  const roomRef = push(ref(db, 'rooms'));
  const roomCode = roomRef.key;
  await set(roomRef, {
    createdAt: Date.now(),
    swipes: {},
  });
  return roomCode;
};

export const joinRoom = async (roomCode) => {
  const roomRef = ref(db, `rooms/${roomCode}`);
  const snap = await get(roomRef);
  return snap.exists();
};

export const sendSwipe = async (roomCode, userId, cardId, isYay) => {
  const path = `rooms/${roomCode}/swipes/${userId}/${cardId}`;
  await set(ref(db, path), isYay);
};

export const listenForMatches = (roomCode, onMatchFound) => {
  const roomRef = ref(db, `rooms/${roomCode}/swipes`);
  onValue(roomRef, (snapshot) => {
    const swipes = snapshot.val();
    if (!swipes) return;

    const cardMap = {};

    Object.entries(swipes).forEach(([user, userSwipes]) => {
      Object.entries(userSwipes).forEach(([cardId, decision]) => {
        if (decision) {
          cardMap[cardId] = (cardMap[cardId] || 0) + 1;
        }
      });
    });

    const match = Object.entries(cardMap).find(([_, count]) => count >= 2);
    if (match) {
      onMatchFound(match[0]); // cardId
    }
  });
};
