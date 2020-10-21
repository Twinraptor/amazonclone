import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQciyQ5WVgMKWaoVuvSlKulo8264G48SI",
  authDomain: "clone-ff56c.firebaseapp.com",
  databaseURL: "https://clone-ff56c.firebaseio.com",
  projectId: "clone-ff56c",
  storageBucket: "clone-ff56c.appspot.com",
  messagingSenderId: "182684918693",
  appId: "1:182684918693:web:08131a39531681c2ab3e4c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
