import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAvZ5MdJMVkqW8TdRjD0oj41vjWETTqaEE",
  authDomain: "blogauth-9f72b.firebaseapp.com",
  projectId: "blogauth-9f72b",
  storageBucket: "blogauth-9f72b.appspot.com",
  messagingSenderId: "979921097291",
  appId: "1:979921097291:web:9e94c2d462f0029bb1f3ce",
  measurementId: "G-EXN7V6V0VF",
});

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
