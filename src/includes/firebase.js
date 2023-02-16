import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDYaZC9INXnoqiCaI8kwCuzxGpThcszbn4",
  authDomain: "vue-music-api.firebaseapp.com",
  projectId: "vue-music-api",
  storageBucket: "vue-music-api.appspot.com",
  appId: "1:126871322520:web:728a7e7507a8f0937db5ed",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");

export { auth, db, usersCollection, songsCollection, storage };
