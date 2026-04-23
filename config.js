// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxd7pUkloythTNPTMovUrMiC_O2BRG1t0",
  authDomain: "thai-tea-cst-ac9db.firebaseapp.com",
  projectId: "thai-tea-cst-ac9db",
  storageBucket: "thai-tea-cst-ac9db.firebasestorage.app",
  messagingSenderId: "907107728020",
  appId: "1:907107728020:web:7340be99b3ab4c07cdd281",
  measurementId: "G-DJFC6NYVD1"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Export to global scope
window.auth = firebase.auth();
window.db = firebase.firestore();
