// ==========================================
// UtkalaMart Firebase
// ==========================================

import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


// ==========================================
// FIREBASE CONFIGURATION
// ==========================================

const firebaseConfig = {

    apiKey: "AIzaSyBVj_KKsS7SNZ108jnw6hpOlmgeOfRhJg",

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


// ==========================================
// INITIALIZE FIREBASE
// ==========================================

const app =
    initializeApp(firebaseConfig);


// ==========================================
// FIRESTORE DATABASE
// ==========================================

const db =
    getFirestore(app);


// ==========================================
// FIREBASE AUTHENTICATION
// ==========================================

const auth =
    getAuth(app);


// ==========================================
// EXPORT
// ==========================================

export {
    app,
    db,
    auth
};
