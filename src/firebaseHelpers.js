// src/firebaseHelpers.js
// firebaseHelpers.js
import { db } from './firebase';
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';


export const createRoom = async (code, category) => {
  const roomRef = doc(db, 'rooms', code);

  await setDoc(roomRef, {
    category,
    swipes: {}, // will store each user's swipes
    matched: false,
  });
};


export const joinRoom = async (code) => {
  const roomRef = doc(db, 'rooms', code);
  const roomSnap = await getDoc(roomRef);

  if (!roomSnap.exists()) {
    throw new Error('Room does not exist');
  }

  return roomSnap.data(); // return category or whatever you need
};

export const submitSwipe = async (code, userId, cardId, saidYes) => {
  const roomRef = doc(db, 'rooms', code);
  const roomSnap = await getDoc(roomRef);

  if (!roomSnap.exists()) return;

  const roomData = roomSnap.data();
  const swipes = roomData.swipes || {};

  // Add the new swipe
  const updatedUserSwipes = [...(swipes[userId] || []), { cardId, saidYes }];

  await updateDoc(roomRef, {
    [`swipes.${userId}`]: updatedUserSwipes,
  });

  // ✅ If user said yes — check for a match
  if (saidYes) {
    const usersWhoSaidYes = Object.entries(swipes).filter(([uid, userSwipes]) =>
      userSwipes.some((swipe) => swipe.cardId === cardId && swipe.saidYes)
    );

    // Include this user's yes in the check (since we are adding it now)
    if (!usersWhoSaidYes.some(([uid]) => uid === userId)) {
      usersWhoSaidYes.push([userId, updatedUserSwipes]);
    }

    if (usersWhoSaidYes.length >= 2) {
      // ✅ Save the matched card in the room if not already saved
      if (!roomData.matchedCard) {
        await updateDoc(roomRef, {
          matchedCard: cardId,
        });
      }
    }
  }
};


export const checkForMatch = async (code, cardId) => {
  const roomRef = doc(db, 'rooms', code);
  const roomSnap = await getDoc(roomRef);

  if (!roomSnap.exists()) return false;

  const swipes = roomSnap.data().swipes;

  const usersWhoSaidYes = Object.entries(swipes).filter(([_, userSwipes]) =>
    userSwipes.some((swipe) => swipe.cardId === cardId && swipe.saidYes)
  );

  return usersWhoSaidYes.length >= 2; // both said yes
};

export const resetMatch = async (code) => {
  const roomRef = doc(db, 'rooms', code);

  try {
    await updateDoc(roomRef, {
      matchedCard: null,
    });
  } catch (error) {
    console.error('Error resetting match:', error);
  }
};