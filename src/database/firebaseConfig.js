import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCk4QP59AgPRLK_iHzKfpXyAGrlnKtTnIQ",
    authDomain: "knights-edge.firebaseapp.com",
    projectId: "knights-edge",
    storageBucket: "knights-edge.appspot.com",
    messagingSenderId: "208977723983",
    appId: "1:208977723983:web:468f088c969a05eeb2203a",
    measurementId: "G-EFV713R1M6"
  };

  //init Firebase
  firebase.initializeApp(firebaseConfig);

  //init Firestore
  const projectFirestore = firebase.firestore();

  export { projectFirestore };