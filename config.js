import firebase from 'firebase';

const firebaseConfig = {
 apiKey: "AIzaSyAyAF2F8jmrQuptLMbUJn4uG2Wsd3JL53Y", 
  authDomain: "fir-demo-5116b.firebaseapp.com", 
  projectId: "fir-demo-5116b", 
  storageBucket: "fir-demo-5116b.appspot.com", 
  messagingSenderId: "991141008045", 
  appId: "1:991141008045:web:5da22016046d605766ac24" 
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
