const firebaseConfig = {
    apiKey: "AIzaSyDt5tMCf480mDGGeDd7liKuGt3zS2_M5OI",  // <-- GANTI DENGAN API KEY ANDA
    authDomain: "thai-tea-cst-ac9db.firebaseapp.com",
    projectId: "thai-tea-cst-ac9db",
    storageBucket: "thai-tea-cst-ac9db.firebasestorage.app",
    messagingSenderId: "907107728020",
    appId: "1:907107728020:web:7340be99b3ab4c07cdd281",
    measurementId: "G-DJFC6NYVD1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

window.auth = firebase.auth();
window.db = firebase.firestore();
