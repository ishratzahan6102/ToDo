
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsJZ3fN6jI_YHFzApPYfEUR6oHm8Du_bE",
  authDomain: "todo-ed3d5.firebaseapp.com",
  projectId: "todo-ed3d5",
  storageBucket: "todo-ed3d5.appspot.com",
  messagingSenderId: "72448556620",
  appId: "1:72448556620:web:473cde2df86b51a3e47ee9",
  measurementId: "G-FNG5BWZSD3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);