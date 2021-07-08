import { createApp } from "vue";
import App from "./App.vue";
import "./assets/global.css";
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCk4QP59AgPRLK_iHzKfpXyAGrlnKtTnIQ",
    authDomain: "knights-edge.firebaseapp.com",
    databaseURL: "https://knights-edge-default-rtdb.firebaseio.com",
    projectId: "knights-edge",
    storageBucket: "knights-edge.appspot.com",
    messagingSenderId: "208977723983",
    appId: "1:208977723983:web:468f088c969a05eeb2203a",
    measurementId: "G-EFV713R1M6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

createApp(App).mount("#app");

