import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {

  apiKey:
    "AIzaSyDonHK2CtrUjAkAaro6stnJmdDUwB59JT0",

  authDomain:
    "utkalamart-1ec68.firebaseapp.com",

  projectId:
    "utkalamart-1ec68",

  storageBucket:
    "utkalamart-1ec68.firebasestorage.app",

  messagingSenderId:
    "664871353747",

  appId:
    "1:664871353747:web:96532fdafe78aabe7f3c66"

};


const app =
  initializeApp(firebaseConfig);


const db =
  getFirestore(app);


const auth =
  getAuth(app);


export {
  app,
  db,
  auth
};
