import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDrt9X8XhBEQwLjnBq6jCb3c4PXuevjYgQ",
  authDomain: "e-commerce-fa2f4.firebaseapp.com",
  projectId: "e-commerce-fa2f4",
  storageBucket: "e-commerce-fa2f4.appspot.com",
  messagingSenderId: "615823097776",
  appId: "1:615823097776:web:46abcd939fdb665f316075",
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)