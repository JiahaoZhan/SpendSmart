// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzJZl-xzBKk9TrGt-Z55kovuGBpZO8t4s",
  authDomain: "expensify-a6a2d.firebaseapp.com",
  databaseURL: "https://expensify-a6a2d-default-rtdb.firebaseio.com",
  projectId: "expensify-a6a2d",
  storageBucket: "expensify-a6a2d.appspot.com",
  messagingSenderId: "994988709406",
  appId: "1:994988709406:web:2245992b07c72de935800f",
  measurementId: "G-Z43WR6E62S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase(app)
export default db