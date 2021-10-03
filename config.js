import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDn4Vy_3XJ_e0vHgDpk2oRQZuafDUtc43k",
  authDomain: "project-71-ff3fc.firebaseapp.com",
  projectId: "project-71-ff3fc",
  storageBucket: "project-71-ff3fc.appspot.com",
  messagingSenderId: "65535101004",
  appId: "1:65535101004:web:94c3167915efa3fb6a8ce9"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

