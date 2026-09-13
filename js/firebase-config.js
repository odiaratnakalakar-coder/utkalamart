// Utkala Mart - Firebase Configuration

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Firebase Project Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDonHK2CtrUjAkAaro6stnJmdDUwB59JT0",
  authDomain: "utkalamart-1ec68.firebaseapp.com",
  projectId: "utkalamart-1ec68",
  storageBucket: "utkalamart-1ec68.firebasestorage.app",
  messagingSenderId: "664871353747",
  appId: "1:664871353747:web:96532fdafe78aabe7f3c66"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firestore
const db = getFirestore(app);


// Authentication
const auth = getAuth(app);


// Export
export {
  app,
  db,
  auth
};
