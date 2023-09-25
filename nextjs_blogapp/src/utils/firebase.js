// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE,
	authDomain: "nextjs-blog-82319.firebaseapp.com",
	projectId: "nextjs-blog-82319",
	storageBucket: "nextjs-blog-82319.appspot.com",
	messagingSenderId: "597242669295",
	appId: "1:597242669295:web:9ed526640d971d6c48d31a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
